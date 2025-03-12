---
layout: post
title: "Text Completion Fine-tuning from PDF Files in Colab"
date: 2025-03-11 00:00:01
categories: short
tags: [short,llm]
---

1. Prepare Dataset

We are going to use two pdf to markdown converters, marker and pymupdf. Marker handles tables better, so I ended up using it for the final dataset.

```python
from marker.converters.pdf import PdfConverter
from marker.models import create_model_dict
from marker.output import text_from_rendered
```

```python
import pathlib
import os
```

```python
converter = PdfConverter(
    artifact_dict=create_model_dict(),
)
def process_with(input_folder, output_folder, renderer):
    os.makedirs(output_folder)
    for file_name in os.listdir(input_folder):
        if file_name.lower().endswith(".pdf"):
            file_path = os.path.join(input_folder, file_name)
            text = renderer(file_path)

            md_file_name = os.path.splitext(file_name)[0] + ".md"
            md_file_path = os.path.join(output_folder, md_file_name)

            with open(md_file_path, "w", encoding="utf-8") as md_file:
                md_file.write(text)

def render_with_marker(file_path):
    rendered = converter(file_path)
    text, _, images = text_from_rendered(rendered)
    return text
```

    Loaded layout model s3://layout/2025_02_18 on device mps with dtype torch.float16
    Loaded texify model s3://texify/2025_02_18 on device mps with dtype torch.float16
    Loaded recognition model s3://text_recognition/2025_02_18 on device mps with dtype torch.float16
    Loaded table recognition model s3://table_recognition/2025_02_18 on device mps with dtype torch.float16
    Loaded detection model s3://text_detection/2025_02_28 on device mps with dtype torch.float16
    Loaded detection model s3://inline_math_detection/2025_02_24 on device mps with dtype torch.float16


```python
def demo_render(path):
    return f"demo: {path}"
process_with('data', 'marker_output', render_with_marker)
```

    Recognizing layout: 100%|██████████████████████████████████████████████| 8/8 [00:07<00:00,  1.07it/s]
    Running OCR Error Detection: 100%|███████████████████████████████████| 11/11 [00:00<00:00, 18.66it/s]
    Detecting bboxes: 0it [00:00, ?it/s]
    Detecting bboxes: 100%|████████████████████████████████████████████████| 2/2 [00:01<00:00,  1.91it/s]
    Recognizing Text: 100%|████████████████████████████████████████████████| 7/7 [00:22<00:00,  3.20s/it]
    Recognizing tables: 100%|██████████████████████████████████████████████| 3/3 [00:03<00:00,  1.10s/it]
    ...

## try pymupdf


```python
import pymupdf
import pymupdf4llm
```


```python
def render_with_pymupdf4llm(file_path):
    md_text = pymupdf4llm.to_markdown(file_path)
    return md_text
process_with('data', 'pymupdf_output', render_with_pymupdf4llm)
```

    Processing data/cfpb_trid-combined-construction-loan-guide.pdf...
    [========================================]
    ...


## text(markdown) chunking using langchain


```python
from langchain.text_splitter import MarkdownTextSplitter
```


```python
def chunk_save(input_folder, chunk_size=1200):
    mds = []
    for file_name in os.listdir(input_folder):
        if file_name.lower().endswith(".md"):
            file_path = os.path.join(input_folder, file_name)
            with open(file_path, 'r', encoding='utf-8') as f:
                mds.append(f.read())
    print(len(mds), ' files')
    markdown_splitter = MarkdownTextSplitter(chunk_size=chunk_size, chunk_overlap=0)
    docs = markdown_splitter.create_documents(mds)
    print(len(docs), ' chunks')
    output_path = os.path.join(input_folder, 'train.txt')
    with open(output_path, 'w', encoding='utf-8') as f:
        for c in docs:
            f.write(c.page_content + '\n<|endoftext|>\n')
    print(f"Saved {len(docs)} chunks to {output_path}")
```


```python
chunk_save('marker_output', 6400)
chunk_save('pymupdf_output', 6400)
```

    12  files
    601  chunks
    Saved 601 chunks to marker_output/train.txt
    12  files
    446  chunks
    Saved 446 chunks to pymupdf_output/train.txt

We got a `train.txt` file out of this step

2. Fine-tuning

Upload the `train.txt` file to colab `/content` folder.

I used `Qwen2.5-1.5B` to speed up the training. You could try bigger base models.

[Qwen 2.5 Text Completion - Raw Text training from pdf files.ipynb](https://colab.research.google.com/drive/1ytJ5LijEDk7prJlXU3blefjg--dC1U3_#scrollTo=IqM-T1RTzY6C)
