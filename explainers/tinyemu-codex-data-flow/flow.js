(function () {
  function setAll(open) {
    document.querySelectorAll("details.flow").forEach(function (detail) {
      detail.open = open;
    });
  }

  function filterBlocks(value) {
    var needle = value.trim().toLowerCase();
    document.querySelectorAll("details.flow").forEach(function (detail) {
      var match = !needle || detail.textContent.toLowerCase().indexOf(needle) !== -1;
      detail.hidden = !match;
      if (match && needle) {
        detail.open = true;
      }
    });
  }

  window.addEventListener("DOMContentLoaded", function () {
    var expand = document.querySelector("[data-expand-all]");
    var collapse = document.querySelector("[data-collapse-all]");
    var search = document.querySelector("[data-filter]");

    if (expand) {
      expand.addEventListener("click", function () { setAll(true); });
    }
    if (collapse) {
      collapse.addEventListener("click", function () { setAll(false); });
    }
    if (search) {
      search.addEventListener("input", function () { filterBlocks(search.value); });
    }
  });
}());
