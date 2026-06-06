(function () {
  function all(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function setDetails(open) {
    all("details").forEach(function (detail) {
      detail.open = open;
    });
  }

  function setupControls() {
    var expand = document.querySelector("[data-expand-all]");
    var collapse = document.querySelector("[data-collapse-all]");
    if (expand) {
      expand.addEventListener("click", function () {
        setDetails(true);
      });
    }
    if (collapse) {
      collapse.addEventListener("click", function () {
        setDetails(false);
      });
    }
  }

  function setupSearch() {
    var input = document.querySelector("[data-search]");
    var count = document.querySelector("[data-search-count]");
    if (!input) return;

    var searchable = all(".searchable");
    function filter() {
      var query = input.value.trim().toLowerCase();
      var visible = 0;
      searchable.forEach(function (item) {
        var matches = !query || item.textContent.toLowerCase().indexOf(query) !== -1;
        item.classList.toggle("hidden", !matches);
        if (matches) visible += 1;
      });
      if (count) {
        count.textContent = query ? visible + " matching blocks" : searchable.length + " blocks";
      }
    }
    input.addEventListener("input", filter);
    filter();
  }

  function setupFlowFocus() {
    all("[data-flow-step]").forEach(function (step) {
      step.addEventListener("click", function () {
        var key = step.getAttribute("data-flow-step");
        all("[data-flow-step]").forEach(function (item) {
          item.classList.toggle("is-active", item.getAttribute("data-flow-step") === key);
        });
        all("[data-flow-target]").forEach(function (item) {
          item.classList.toggle("is-active", item.getAttribute("data-flow-target") === key);
          if (item.getAttribute("data-flow-target") === key && item.tagName === "DETAILS") {
            item.open = true;
          }
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupControls();
    setupSearch();
    setupFlowFocus();
  });
})();
