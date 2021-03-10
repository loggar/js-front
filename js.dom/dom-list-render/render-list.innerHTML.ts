function createListWithInnerHTML(heroes: Hero[]) {
  const rows = heroes.map(hero => {
    return `<li>
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="name">${hero.name}</div>
              <div class="description">${hero.description}</div>
            </div>
          </div>
        </div>
      </li>`;
  });
  const html = `<ul>${rows.join()}</ul>`;
  heroPlaceholder.innerHTML = html;