function createListWithDOMAPI(heroes: Hero[]) {
  const ul = document.createElement("ul");
  ul.classList.add("list", "hero-list");
  heroes.forEach(hero => {
    const li = document.createElement("li");
    const card = document.createElement("div");
    card.classList.add("card");
    li.appendChild(card);
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    card.appendChild(cardContent);
    const content = document.createElement("div");
    content.classList.add("content");
    cardContent.appendChild(content);
    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = hero.name;
    cardContent.appendChild(name);
    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = hero.description;
    cardContent.appendChild(description);
    ul.appendChild(li);
  });
  heroPlaceholder.replaceWith(ul);
}
