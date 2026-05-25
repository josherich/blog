const search = document.querySelector("[data-search]");
const filterables = Array.from(document.querySelectorAll("[data-filter]"));
const expand = document.querySelector("[data-expand-all]");
const collapse = document.querySelector("[data-collapse-all]");
const details = Array.from(document.querySelectorAll("details"));
const steps = Array.from(document.querySelectorAll("[data-step-target]"));

if (search) {
  search.addEventListener("input", () => {
    const needle = search.value.trim().toLowerCase();
    for (const item of filterables) {
      item.classList.toggle("hidden", needle !== "" && !item.textContent.toLowerCase().includes(needle));
    }
  });
}

if (expand) {
  expand.addEventListener("click", () => {
    for (const detail of details) detail.open = true;
  });
}

if (collapse) {
  collapse.addEventListener("click", () => {
    for (const detail of details) detail.open = false;
  });
}

for (const step of steps) {
  step.addEventListener("click", () => {
    for (const other of steps) other.classList.remove("active");
    step.classList.add("active");
    const target = document.querySelector(step.dataset.stepTarget);
    if (target) {
      if (target.tagName === "DETAILS") target.open = true;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}
