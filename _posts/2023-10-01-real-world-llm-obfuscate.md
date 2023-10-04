---
layout: post
title:  "Real World LLM Obfuscation"
description: "Sunday Quick Hack"
date: 2023-10-01 00:00:01
categories: llm
tags: [obfuscate,llm]
---
I've heard of LM's deobfucate ability for a while. Like many previous claims of this kind, its real world performance could be far away from extrapolation of what's shown in the demo (mostly a social media post). I'm curious and love to see it flops.

### The Experiment

Decode minified JavaScript code of a Chrome extension [ChatGPT Summary for Chrome](https://chrome.google.com/webstore/detail/chatgpt-summary-for-chrom/mikcekmbahpbehdpakenaknkkedeonhf)

CRX Source can be unzipped with https://crxviewer.com/

### Challenges

People with a good mental model of LM would find these quite obvious. The thing that works consistently in these experiments are localized code snippets with hints. The biggest trouble however, is the model refuses to strictly give the code, instead like to skip details and only give comments or function names with empty bodies. I suspect the bias is from HFRL training.

- Obviously one shot doesn't work due to context limit.
- A single response (including first response and continuing responses) refuses to give all the details, which means simply giving "please continue" won't work.
- Given the above, there is no high level algorithm to guide the decoding.
- Most importantly, the naive prompt-response approach does not leverage signals from program (static) analysis

Planning sounds fancy but I suspect it is simpler: performing a topological sort on the call graph to get a list of functions in the order they should be deobfuscated. An obvious heuristic is to start with globals and propagate decoded names repeatedly each time a localized snippet is decoded.

Not surprised people have tried [this](https://arxiv.org/abs/2306.02546).

### What Efficient Human in the Loop Looks Like

Among the prompts in a single experiment, high level planning is probably the most important bit from me as a human in the loop. I have to make decisions of which parts have all the information the model needs to provide a complete response.

### What about Reverse Engineering?

Among the four steps of reverse engineering, people find that the last step requires the most human like "thinking" and naturally try to automate it.

- data carving and the parsing of filesystems and files
- disassembly
- decompilation
- annotation and commentary

The [G-3PO](https://medium.com/tenable-techblog/g-3po-a-protocol-droid-for-ghidra-4b46fa72f1ff) project includes a script that basically use the following prompt:
```
Below is some C code that Ghidra decompiled from a binary that I'm trying to
reverse engineer.

\```
{c_code}
\```
Please provide a detailed explanation of what this code does, in {style},
that might be useful to a reverse engineer. Explain your reasoning as much
as possible. {extra}

Finally, suggest suitable names for this function and its parameters.
```

### What does it mean to "open source code" in the long run?

Note I use the term "open source code", which is completely different from "open source".

While I'm optimistic about the knowledge sharing aspect, how this particular ability is adopted is probably dictated more by organizational limit. In recent years, source code breach has become so frequent and yet created little existential threat to those companies. This probably reveals how little code without human resource matters. It's not even controversial nowadays to say most code in big companies are glued together and need an army to make it sort of work.

### Appendix

summarize prompt

```text
Q:
Please provide a detailed explanation of what this obfucated code does, the code is from a Chrome Extension

A:
This obfuscated code appears to be implementing an AI chatbot functionality in a Chrome extension. Here is what I can tell about what it is doing:
- It is using a library called uuid to generate unique IDs for messages.
- It has functions for connecting to the OpenAI API to send messages and receive responses. It supports both using an API key and session tokens for authentication.
- It has code for storing user settings like API key and login type in chrome.storage.
- It opens a connection to the background page when the extension icon is clicked. It will send the contents of the current page to the background to summarize.
- The background page will call OpenAI to summarize the page content. It limits the text to 14000 characters before summarizing.
- The summarized text is sent back to the content script and displayed.
- It also has code to handle OpenAI errors and message feedback.
- There is functionality to open the options page on install and when clicked.
So in summary, this appears to allow summarizing web pages using OpenAI through a chat interface in the Chrome extension. It handles the authentication, API calls, background processing and communication between the different extension components needed to implement this functionality.
```

deobfuscate prompt

```text
deobfuscate the following code for a Chrome Extension
{code}

give the obfuscated source of the function {xxx}

please continue

please give a list of original function names and obfuscated names
```


| original | deobfuscated |
|---|---|
| 780 | SessionCache |
| 918 | cleanupMap |
| 931 | createPromise |
| l | uuidToStr |
| p | createMessagingPipeline |
| v | PROMPT_STORAGE_KEY |
| g | getSummaryPrompt |
| ze | summarizePage |
| Je | getAccessToken |
| Ke | chatGptRequest |

### worker.js
<div id="container-worker" style="width: 960px; height: 600px; border: 1px solid grey"></div>
### script.js
<div id="container-script" style="width: 960px; height: 600px; border: 1px solid grey"></div>
### setting.js
<div id="container-setting" style="width: 960px; height: 600px; border: 1px solid grey"></div>
<script src="../../js/vs/loader.js"></script>
<script>
  require.config({ paths: { vs: '../../js/vs' } });

  require(['vs/editor/editor.main'], function () {
    var diffEditor1 = monaco.editor.createDiffEditor(document.getElementById('container-worker'));

    Promise.all([xhr('../../js/real-world-llm-obfuscate/worker.js'), xhr('../../js/real-world-llm-obfuscate/worker-deobf.js')]).then(function (r) {
      var originalTxt = r[0].responseText;
      var modifiedTxt = r[1].responseText;

      diffEditor1.setModel({
        original: monaco.editor.createModel(originalTxt, 'javascript'),
        modified: monaco.editor.createModel(modifiedTxt, 'javascript')
      });
    });

    var diffEditor2 = monaco.editor.createDiffEditor(document.getElementById('container-script'));

    Promise.all([xhr('../../js/real-world-llm-obfuscate/script.js'), xhr('../../js/real-world-llm-obfuscate/script-deobf.js')]).then(function (r) {
      var originalTxt = r[0].responseText;
      var modifiedTxt = r[1].responseText;

      diffEditor2.setModel({
        original: monaco.editor.createModel(originalTxt, 'javascript'),
        modified: monaco.editor.createModel(modifiedTxt, 'javascript')
      });
    });

    var diffEditor3 = monaco.editor.createDiffEditor(document.getElementById('container-setting'));

    Promise.all([xhr('../../js/real-world-llm-obfuscate/setting.js'), xhr('../../js/real-world-llm-obfuscate/setting-deobf.js')]).then(function (r) {
      var originalTxt = r[0].responseText;
      var modifiedTxt = r[1].responseText;

      diffEditor3.setModel({
        original: monaco.editor.createModel(originalTxt, 'javascript'),
        modified: monaco.editor.createModel(modifiedTxt, 'javascript')
      });
    });
  });
</script>
<script>
  function xhr(url) {
    var req = null;
    return new Promise(
      function (c, e) {
        req = new XMLHttpRequest();
        req.onreadystatechange = function () {
          if (req._canceled) {
            return;
          }

          if (req.readyState === 4) {
            if ((req.status >= 200 && req.status < 300) || req.status === 1223) {
              c(req);
            } else {
              e(req);
            }
            req.onreadystatechange = function () {};
          }
        };

        req.open('GET', url, true);
        req.responseType = '';

        req.send(null);
      },
      function () {
        req._canceled = true;
        req.abort();
      }
    );
  }
</script>