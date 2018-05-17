---
layout: post
title:  "从零开始的新闻合并，一个 ReadHub 的例子"
description: "Build a documents clustering, like ReadHub, from scratch"
date:   2018-05-09 14:02:39
categories: nlp
tags: [lda, nlp]
---

新闻文本的聚类，可以视为文本聚类的一类应用，而文本聚类在二十几年前就有大量的研究[^3,^4]。归功于统计方法的进步，文本聚类从最早的词频统计，到文本建模，话题建模，再到词嵌入（word embedding) 发明之后的各种嵌入方法。方法众多，但可以说文本分类是一个未解决的问题（当然由于文本是人类生成的，可以说这是一个没有完美答案的问题）。

新闻文本聚类显然是很有吸引力的，生产远大于消费，让人产生信息焦虑，时间线飞速前进的错觉。这终究是个和平年代，让每一个人了解每天世界上发生的每一件大事仍然是合理的愿望。


## 1. 加载数据

下载新闻数据集，这里提供一份文中使用的样例数据:

[page_entity_20180511.csv](/downloads/data/page_entity_20180511.csv)
[content_full.csv](/downloads/data/content_full.csv)

```R
# 获取当前工作目录
getwd()

# 设定当前工作目录
setwd("/Users/{username}/project/")

# 载入数据，如果数据较大，推荐使用 data.table
# https://www.r-bloggers.com/efficiency-of-importing-large-csv-files-in-r/
library(data.table)

datac <- fread("page_entity_20180511.csv", sep = ',')
```

## 2. 预处理数据

### 2.1 整理表格

```R
# 从 HTML 中提取文本
library(htm2txt)

# 重命名列名
names(datac) <- c("id", "page_title", "page_url", "page_content", "page_host_id", "created_at", "updated_at", "page_image", "page_topics", "page_date")

titles <- datac$page_title
titles <- htm2txt(titles)
titles <- gsub("n\t+", "", titles)

urls <- datac$page_url
urls <- gsub("n\t+", "", urls)

datac$page_title <- titles
datac$page_url <- urls

write.csv(file="page_entity.csv", x=datac)
```

### 2.1 合并 dataframe

```R
# 读取另一张存有正文内容的表格
data_content = fread("content_full.csv", sep=',')

datac <- merge(x=datac, y=data_content, by.x="id", by.y="V1", all.x=TRUE)

# 保存合并表格
write.csv(file="page_entity_complete.csv", x=datac)
```

## 3. 分词处理

```R
library("jiebaR")
cc = worker(bylines = TRUE, stop_word = "./stopwords-zh.txt")

tokenize <- function(content) {
  tokens <- segment(content, cc)[[1]]
  content <- paste(tokens, collapse = " ")
  return(content)
}

datac$page_content_full <- sapply(datac$V3, tokenize)
datatok <- select(datac, page_content_full, id)

# 保存分词结果
write.csv(file="page_content_tokenized.csv", x=datatok)
```

## 4. 用 LDA 矩阵聚类文本内容

### 4.1 计算 LDA 主题数量[^2]

```R
library(ldatuning)
library(topicmodels)
library(quanteda)

dfm1 <- dfm(datac$page_content_full, remove = stopwords("chinese"), remove_punct = TRUE)

find_from <- round(length(datac$page_content_full) / 5)
find_to <- round(length(datac$page_content_full) / 1)
find_by <- 4

result <- FindTopicsNumber(
  dfm1,
  topics = seq(from = find_from, to = find_to, by = find_by),
  metrics = c("Griffiths2004", "CaoJuan2009", "Arun2010", "Deveaud2014"),
  method = "Gibbs",
  control = list(seed = 77),
  mc.cores = 8L,
  verbose = TRUE
)

min_caojuan <- which.min(result$CaoJuan2009)
min_arun <- which.min(result$Arun2010)
max_grif <- which.max(result$Griffiths2004)

topic_number = find_from + round(mean(c(min_caojuan, min_arun, max_grif))) * find_by

```

### 4.2 计算 LDA 矩阵

```R
tm1 <- LDA(dfm1, k = topic_number, method = "Gibbs",  control = list(seed = 1234))

# group documents
post <- posterior(tm1, dfm1)[["topics"]]
postmat <- as.data.frame(post)
postdat <- add_rownames(postmat, "doc_name")

colnames(postdat)[-1] <- apply(terms(tm1, 3), 2, paste, collapse=", ")
```

### 4.3 对主题分类

```R
group_documents <- function(topic_vec) {
  sorted <- sort(topic_vec, decreasing = T, index.return = T)
  dists <- sorted$x
  index <- sorted$ix
  max <- as.numeric(dists[1])
  if (max < 0.8)
    return(c())
  else {
    threshold <- max * 0.8
    names(dists) <- index
    return(dists[dists > threshold])
  }
}

groups <- sapply(postdat[-1], group_documents)

get_id_by_index <- function(index) {
  return(datac[index]$id)
}

format_group <- function(topic) {
  if (!is.null(topic)) {
    ids <- sapply(names(topic), get_id_by_index)
    topic <- paste(ids, collapse = " ")
  } else {
    topic <- "NA"
  }
  return(topic)
}

groups <- sapply(groups, format_group)

write.csv(file="group_result.csv", x=groups)
```

1. [R topicmodels](https://cran.r-project.org/web/packages/topicmodels/topicmodels.pdf)
2. [LDA topic number tuning](https://cran.r-project.org/web/packages/ldatuning/vignettes/topics.html)
3. [W. B. Croft. Clustering large files of documents using the single-link method. Journal of the American Society of Information Science, 28: pp. 341–344, 1977]()
4. [D. Cutting, D. Karger, J. Pedersen, J. Tukey. Scatter/Gather: A Cluster-based Approach to Browsing Large Document Collections. ACM SIGIR Conference, 1992]()