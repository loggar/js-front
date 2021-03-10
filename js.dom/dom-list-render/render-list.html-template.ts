function createListWithTemplate(heroes: Hero[]) {
  const ul = document.createElement("ul");
  ul.classList.add("list", "hero-list");
  const template = document.getElementById(
    "hero-template"
  ) as HTMLTemplateElement;
  heroes.forEach((hero: Hero) => {
    const heroCard = document.importNode(template.content, true);
    heroCard.querySelector(".description").textContent = hero.description;
    heroCard.querySelector(".name").textContent = hero.name;
    ul.appendChild(heroCard);
  });
  heroPlaceholder.replaceWith(ul);
}
