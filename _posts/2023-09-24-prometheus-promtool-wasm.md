---
layout: post
title:  "Running Prometheus promtool on Web with WASM"
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

<section>
    <textarea name="" id="rules" cols="30" rows="10"></textarea>
    <button id="check_rules" onclick="checkRules()">promtool check rules</button>
</section>
<section>
    <textarea name="" id="config" cols="30" rows="10"></textarea>
    <button id="check_config" onclick="checkConfig()">promtool check config</button>
</section>

<script src="../../js/wasm_exec.js"></script>
<script>
  const go = new Go();
  WebAssembly.instantiateStreaming(fetch("promtool.wasm"), go.importObject).then((result) => {
      go.run(result.instance);
      const ruleExample = `groups:
  - name: example
    rules:
    - record: code:prometheus_http_requests_total:sum
      expr: sum by (code) (prometheus_http_requests_total)`;
            const res = checkRules(ruleExample);
            console.log(`Result of "promtool check rules"`, res);

            document.getElementById("rules").value = ruleExample;
            document.getElementById("check_rules").onclick = () => {
                const rules = document.getElementById("rules").value;
                const res = checkRules(rules);
                window.alert(res);
            };

            const configExample = `# my global config
global:
  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
  # scrape_timeout is set to the global default (10s).

# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label job=<job_name> to any timeseries scraped from this config.
  - job_name: "prometheus"

    # metrics_path defaults to '/metrics'
    # scheme defaults to 'http'.

    static_configs:
      - targets: ["localhost:9090"]`;
    document.getElementById("config").value = configExample;
    document.getElementById("check_config").onclick = () => {
        const config = document.getElementById("config").value;
        const res = checkConfig(config, false, false, 'all');
        window.alert(res);
    };
});
</script>