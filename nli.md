---
layout: default
title: NLI
---
<style>
  * {
    box-sizing: border-box;
  }
  .site {
    max-width: 1050px;
  }
  .sents {
    border-top: 1px solid #eee;
    margin-top: 1em;
  }
  .sents ul {
    padding: 0;
  }
  .sents li {
    list-style: none;
  }
  .sents li div:nth-of-type(2) {
    width: 40%;
    display: inline-block;
    padding: 10px;
    vertical-align: top;
  }
  .sents li div:nth-of-type(3) {
    width: 40%;
    display: inline-block;
    padding: 10px;
    vertical-align: top;
  }
  .sents li div:nth-of-type(1) {
    font-size: 0.7em;
    width: 20%;
    display: inline-block;
    padding: 10px;
    vertical-align: top;
  }
  .wrong {
    color: #ca2222;
  }
  .right {
    color: #3d7b16;
  }
</style>

This page shows the result of the test set I created by changing temporal phrase, labels are predicted by `bert-base-uncased`, using [huggingface BERT implementation](https://github.com/huggingface/pytorch-pretrained-BERT). The accuracy is `23.75%`.

The pretrained BERT model is trained for 3 epochs, on MNLI, and get `84.16%` on matched dev set, `84.35%` on mismatched dev set.

I was a bit surprised BERT doesn't get any better results compared to GLUE baseline models:

model | accuracy
--|--
CBOW | 34.8
BiLSTM | 22.9
ESIM | 19.4

I argue this technique should be used as a sanity check, for neural network models, to verify that these models, at least, understand basic concepts governing our universe. I cannot imagine any intelligent system that does not understand time goes forward.

For more details see my [report](https://github.com/josherich/Temporal-NLU/blob/master/improving-temporal-reasoning-nlu.pdf)

<div class="sents">
  <ul>
    <li>
      <div>Gold : Prediction</div><div>Premise</div><div>Hypothesis</div>
    </li>
  </ul>
</div>

<script>

const pred = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 1, 1, 1, 1, 1, 1,
 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 2, 2, 1, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
 1, 1, 1, 1, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,]

const gold = [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0,
 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,
 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1,
 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 2, 0, 1, 0, 0, 1, 2, 0, 0, 0, 1, 2, 0, 0, 0, 1, 0, 1, 0,
 1, 2, 1, 0, 0, 0, 1, 2, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 1, 2, 1, 0, 0, 0, 0, 0, 1, 2, 1, 1, 2, 1, 2, 1, 2, 0, 1,
 2, 1, 2, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 2, 0, 0,
 0, 0, 0, 0, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]

const label = ['Contradiction', 'Entailment', 'Neutral']

const uri = "../downloads/data/tnli_genre.tsv";

const tagDiff = (sent1, sent2) => {
  let one = sent1.split(' ')
  let another = sent2.split(' ')
  let idx = 0
  for (i = 0; i < one.length; i++) {
    let tok = one[i]
    if (tok !== another[i]) {
      idx = i
      one[i] = `<strong>${one[i]}</strong>`
      another[i] = `<strong>${another[i]}</strong>`
      break
    }
  }
  return [one.join(' '), another.join(' ')]
}

const renderSentences = (sents) => {
  const list = document.createDocumentFragment()
  sents.map((sent, i) => {
    let diffed_sent = tagDiff(sent[8], sent[9])
    let li = document.createElement('li')

    let r = document.createElement('div')
    let p = document.createElement('div')
    let h = document.createElement('div')
    r.innerHTML = `${label[gold[i]]} : ${label[pred[i]]}`
    r.classList.add(gold[i] == pred[i] ? 'right' : 'wrong')

    p.innerHTML = diffed_sent[0]
    h.innerHTML = diffed_sent[1]
    li.appendChild(r)
    li.appendChild(p)
    li.appendChild(h)

    list.appendChild(li)
  })
  document.querySelector('.sents ul').appendChild(list)
}

fetch(uri).then((data) => {
  return data.text()
}).then((text) => {
  return text.split('\n').map((line) => line.split('\t'));
}).then(renderSentences)

</script>