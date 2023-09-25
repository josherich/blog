---
layout: post
title:  "Run Prometheus promtool with WASM"
description: "Sunday Quick Hack"
date: 2023-09-24 00:00:01
categories: short
tags: [prometheus,wasm,short]
---
[prometheus-wasm](https://github.com/josherich/prometheus-wasm)

WASM is great but the tooling looks terrifying for no reason. I went into this quick hack worrying about being overwhelmed by the tooling. It turned out to be surprisingly easy.
The main hurdle is of course knowing the build process itself, I always appreciate the help of --verbose to report what is going on underneath, which is important when a separate binary [`promu`](https://github.com/prometheus/promu) is used to build the go project. There is even a public [RFC](https://docs.google.com/document/d/1Ql-f_aThl-2eB5v3QdKV_zgBdetLLbdxxChpy-TnWSE/edit#heading=h.24x0bg1hyuak) doc for it.
The next part is removing unsupported features and associated pkgs: fs.watcher in fsnotify, mmap, syscall.SIGUSR1 in go-metrics, and sockets in go-connections.
The final part is wasm file and glue code on both sides. None of these looks right:
```js
const go = new Go();
WebAssembly.instantiateStreaming(fetch("promtool.wasm"), go.importObject).then((result) => {
    go.run(result.instance);
});
// it should really just be
const go = new Go("promtool.wasm");
go.run();
```

```go
func main() {
	js.Global().Set("checkRules", CheckRulesWebWrapper())
	<-make(chan bool)
}
// makes no sense for app code to do this
```


<textarea name="" id="rules" cols="30" rows="10"></textarea>
<button id="check_rules" onclick="checkRules()">promtool check rules</button>

<script src="../../js/wasm_exec.js"></script>
<script>
            const go = new Go();
            WebAssembly.instantiateStreaming(fetch("promtool.wasm"), go.importObject).then((result) => {
                go.run(result.instance);
                const example = `groups:
  - name: example
    rules:
    - record: code:prometheus_http_requests_total:sum
      expr: sum by (code) (prometheus_http_requests_total)`;
            const res = checkRules(example);
            console.log(`Result of "promtool check rules"`, res);

            document.getElementById("rules").value = example;
            document.getElementById("check_rules").onclick = () => {
                const rules = document.getElementById("rules").value;
                const res = checkRules(rules);
                window.alert(res);
            };
        });
        </script>