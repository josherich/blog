---
layout: post
title:  "从零开始的新闻合并，一个 ReadHub 的例子"
description: "build a document classifier, like ReadHub, from scratch"
date:   2018-05-09 14:02:39
categories: nlp
tags: [lda, nlp]
---

## 1. 加载数据

下载新闻数据集

```
getwd()
setwd("/Users/{username}/project/")

library(data.table)

data = fread("page_dump.csv",sep = ',')
```

## 2. 预处理数据

```
library(htm2txt)

ts = htm2txt(titles)

write.csv(file="page_clean.csv", x=data)

contents <- gsub("[[:alpha:]]+|\n|--", "", contents)

na.omit(contents)
```

合并 dataframe

```
data_content = fread("content_full.csv", sep=',')

datam <- merge(x=data, y=dfcontent, by.x="V3", by.y="page_url", all.x=TRUE)

datacontent <- datam[datam$page_content != "NA"]
```

## 3. 搜索关键词

```
text_with_s <- grep("美国", texts(titles))

text_with_s <- grep("美国", texts(titles), value=TRUE)
```

## 4. 分词处理

```
install.packages("jiebaR")
library("jiebaR")

cc = worker(bylines = TRUE, stop_word = "stopwords_zh_cn.txt")
tagging = worker("tag")

tagger = worker('tag')
tokencn = segment(contents, cc)

tags = vector_tag(tokencn, tagger)
tagsns = tags[grep("^n", names(tags))]

extract = worker("keywords", topn = 10)
kws = vector_keywords(tokencn)

```

## 4. 计算特征词，词义复杂度

```
cal_dfm <- function(id, data) {
  datap = data[data$V5 == id]

  sizep = lengths(datap)[1]

  contents = datap$cleancontent

  tokensp = tokens(contents)
  tokencn = segment(contents, cc)
  dfmp <- dfm(tokensp, remove = stopwords("chinese"), remove_punct = TRUE)
  topfeatures(dfmp, n=20)
  dfmp
}

cal_dfm_tfidf <- function(dfm) {
  dfm_tfidf <- dfm_tfidf(dfm, scheme_tf = "prop")
  topfeatures(dfm_tfidf, n=20)
  dfm_tfidf
}

cal_ttr <- function(id, data) {
  datap = data[data$V5 == id]
  contents = datap$cleancontent
  tokensp = tokens(contents)
  trr = ntype(tokensp) / lengths(tokensp)
  hist(ttr)
  ttr
}

calfeature(1, data)
getttr(1, data)

```

## 5. LDA

### 5.1 计算 LDA 主题数量

```
dfm1 <- dfm(datacontent$page_content, remove = stopwords("chinese"), remove_punct = TRUE)

result <- FindTopicsNumber(
  dfm1,
  topics = seq(from = 2, to = 120, by = 2),
  metrics = c("Griffiths2004", "CaoJuan2009", "Arun2010", "Deveaud2014"),
  method = "Gibbs",
  control = list(seed = 77),
  mc.cores = 2L,
  verbose = TRUE
)
FindTopicsNumber_plot(result)

number_of_topics = 40
```

### 5.2 计算 LDA 矩阵

```
tm1 <- LDA(dfm1, k = number_of_topics, method = "Gibbs",  control = list(seed = 1234))

library(tidytext)
tmt1 <- tidy(tm1, matrix="beta")

terms1 <- tmt1  %>%
  group_by(topic) %>%
  top_n(10, beta) %>%
  ungroup() %>%
  arrange(topic, -beta)

terms1 %>%
  mutate(term = reorder(term, beta)) %>%
  ggplot(aes(term, beta, fill = factor(topic))) +
  geom_col(show.legend = FALSE) +
  facet_wrap(~ topic, scales = "free") +
  coord_flip() +
  theme(text = element_text(family = 'STHeiti'))
```

### 5.3 对主题分类

```
post <- posterior(tm1, dfm1)[["topics"]]

postmat <- as.data.frame(post)

postdat <- add_rownames(postmat, "doc_name")

colnames(postdat)[-1] <- apply(terms(tm1, 3), 2, paste, collapse=", ")

heatmap(post, scale="none")

group_documents <- function(topic_vec) {
  sorted <- sort(topic_vec, decreasing = T, index.return=T)
  dists <- sorted$x
  index <- sorted$ix
  max <- as.numeric(dists[1])
  if (max < 0.7)
    return(c())
  else {
    threshold <- max * 0.8
    names(dists) <- index
    return(dists[dists > threshold])
  }
}

groups <- sapply(postdat[-1], group_documents)

```

## FRE

```
cal_fre <- function(ids, data) {
  datap <- data[, c("V5", "cleancontent")]
  datap <- datap[V5 %in% ids]
  all_measures <- textstat_readability(datap$cleancontent, c("Flesch", "Dale.Chall", "SMOG", "Coleman.Liau", "Fucks"))
}

all_measures <- cal_fre(c(1), data)

readability_matrix <- cbind(all_measures$Flesch, all_measures$Dale.Chall, all_measures$SMOG, all_measures$Coleman.Liau, all_measures$Fucks)

fre_core <- cor(readability_matrix)
fre_core

datap$fre_flesch <- all_measures$Flesch
datap$fre_dc <- all_measures$Dale.Chall
datap$fre_smog <- all_measures$SMOG
datap$fre_cl <- all_measures$Coleman.Liau
datap$fre_fucks <- all_measures$Fucks

hist(datap[datap$V5 == 1]$fre_flesch, xlim=c(0,120), breaks="FD")

std <- function(x) sd(x)/sqrt(length(x))

```

## 保存 workspace

```
save.image("workspace.RData")
```

1. [R topicmodels](https://cran.r-project.org/web/packages/topicmodels/topicmodels.pdf)
2. [LDA topic number tuning](https://cran.r-project.org/web/packages/ldatuning/vignettes/topics.html)
