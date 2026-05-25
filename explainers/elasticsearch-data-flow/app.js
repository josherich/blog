(function () {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path || (path === "index.html" && href.endsWith("index.html"))) {
      link.classList.add("active");
    }
  });

  document.querySelectorAll("[data-expand]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("details").forEach((details) => {
        details.open = button.dataset.expand === "open";
      });
    });
  });
})();
