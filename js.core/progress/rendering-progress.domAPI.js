const heroPlaceholder = document.querySelector(".hero-list");
const progressEl = document.createElement("progress");
progressEl.classList.add("hero-list", "progress", "is-medium", "is-info");
const maxAttr = document.createAttribute("max");
maxAttr.value = "100";
progressEl.setAttributeNode(maxAttr);
heroPlaceholder.replaceWith(progressEl);
