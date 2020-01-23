# R

## 1. 加载数据

下载新闻数据集

```R
# 获取当前工作目录
getwd()

# 设定当前工作目录
setwd("/Users/{username}/project/")

# 载入数据，如果数据较大，推荐使用 data.table
# https://www.r-bloggers.com/efficiency-of-importing-large-csv-files-in-r/
library(data.table)

datac <- fread("page_entity_20180511.csv",sep = ',')
```

## 2. 预处理数据

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
data_content = fread("page_content_full.csv", sep=',')

datam <- merge(x=data, y=dfcontent, by.x="V3", by.y="page_url", all.x=TRUE)

datacontent <- datam[datam$page_content != "NA"]
```

## 3. 搜索关键词

```R
text_with_s <- grep("美国", texts(titles))

text_with_s <- grep("美国", texts(titles), value=TRUE)
```

## 4. 分词处理

```R
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

```R
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

```R
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

```R
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

```R
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

```R
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

```R
save.image("workspace.RData")
```

1. [R topicmodels](https://cran.r-project.org/web/packages/topicmodels/topicmodels.pdf)
2. [LDA topic number tuning](https://cran.r-project.org/web/packages/ldatuning/vignettes/topics.html)
