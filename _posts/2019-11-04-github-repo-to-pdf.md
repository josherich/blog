---
layout: post
title:  "Make pdf from Github repository"
description: "I'm surprised pdf is still so much better than other options today"
date:   2019-11-04 14:02:39
categories: cs
tags: [github, pdf, markdown]
---

### 1. Install dependencies:

```bash
npm i remarkable highlight.js
npm i -g relexed
```

### 2. Run this script to generate markdown from source code folder

clone repo and change source code path

```js
let srcPath = './source-code-folder'
```

```bash
node repo-to-pdf.js
```

### 3. Generate pdf using relaxed
```bash
npx relaxed markdown-pdf.html
```

> repo-to-pdf.js

```js
let outputFileName = "src-book"
let srcPath = './source-code-folder'

let opts = {
  cssPath: "./github.css",
  highlightCssPath: "node_modules/highlight.js/styles/vs.css"
}

const path = require('path')
const fs = require('fs')
const os = require('os')
const { Remarkable } = require('remarkable')
const hljs = require('highlight.js')

class RepoBook {
  constructor(props) {
    this.langs = {
      'js': 'javascript',
      'go': 'go',
      'ruby': 'ruby',
      'cc': 'cpp'
    };
    this.blackList = ['node_modules']
  }

  readDir(dir, allFiles = []) {
    const files = fs.readdirSync(dir).map(f => path.join(dir, f))
    allFiles.push(...files)
    files.forEach(f => {
      fs.statSync(f).isDirectory() && this.blackList[f] == -1 && this.readDir(f, allFiles)
    })
    return allFiles
  }

  renderIndex(files) {
    return files.map(f => {
      return `[${f}](#${f})`
    }).join('\n')
  }

  render(path) {
    let files = this.readDir(path)
    let index = this.renderIndex(files)
    console.log(index)
    let contents = [index]

    for (let i = 0; i < files.length; i++) {
      if (fs.statSync(files[i]).isDirectory()) {
        continue
      }
      let ext = files[i].split('.')
      if (ext.length == 0) {
        continue
      }

      if (ext[ext.length-1] in this.langs) {
        let data = fs.readFileSync(files[i])
        data = "#### " + files[i] + "\n``` " + this.langs[ext[ext.length-1]] + "\n" + data + "\n```\n"
        contents.push(data)
      }
    }
    return contents.join('\n')
  }
}

let repoBook = new RepoBook()
let mdString = repoBook.render(srcPath)
let mdParser = new Remarkable({
  breaks: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (err) {}
    }

    try {
      return hljs.highlightAuto(str).value
    } catch (err) {}

    return ''
  }
})

let mdHtml = `<article class="markdown-body">` + mdParser.render(mdString) + "</article>"
let html5bpPath = path.resolve(process.cwd(), './html5bp')
let isWin = os.name === 'windows'
let protocol = isWin ? 'file:///' : 'file://'
let html = fs.readFileSync(html5bpPath + '/index.html', 'utf-8')
  .replace(/\{\{baseUrl\}\}/g, protocol + html5bpPath)
  .replace('{{content}}', mdHtml)
  .replace('{{cssPath}}', protocol + path.resolve(process.cwd(), opts.cssPath))
  .replace('{{highlightPath}}', protocol + path.resolve(process.cwd(), opts.highlightCssPath))

fs.writeFileSync(`${outputFileName}.html`, html)
```