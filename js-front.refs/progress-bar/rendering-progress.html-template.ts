const heroPlaceholder = document.querySelector(".hero-list");
const template = document.getElementById(
  "progress-template"
) as HTMLTemplateElement;
const fetchingNode = document.importNode(template.content, true);
heroPlaceholder.replaceWith(fetchingNode);
