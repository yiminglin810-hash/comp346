const state = {
  categoryIndex: 0,
  openCards: new Set(),
  selectedModules: new Set(),
  search: "",
};

const categories = window.COMP346_DATA || [];

const categoryList = document.querySelector("#categoryList");
const cards = document.querySelector("#cards");
const categoryTitle = document.querySelector("#categoryTitle");
const frequencyLabel = document.querySelector("#frequencyLabel");
const searchInput = document.querySelector("#searchInput");
const moduleFilter = document.querySelector("#moduleFilter");
const clearModuleFilterButton = document.querySelector("#clearModuleFilterButton");
const showAllButton = document.querySelector("#showAllButton");
const hideAllButton = document.querySelector("#hideAllButton");
const topicCount = document.querySelector("#topicCount");
const visibleCount = document.querySelector("#visibleCount");
const answerCount = document.querySelector("#answerCount");

function normalise(value) {
  return value.toLowerCase().trim();
}

function matchesSearch(item) {
  if (!state.search) return true;
  const options = (item.options || [])
    .flatMap((option) => [option.label, option.english, option.chinese])
    .join(" ");
  const haystack = [
    item.title,
    item.englishQuestion,
    item.chineseQuestion,
    item.englishAnswer,
    item.chineseAnswer,
    item.tag,
    options,
  ].join(" ").toLowerCase();
  return haystack.includes(state.search);
}

function itemModule(item, category) {
  return item.module || category.module || category.title;
}

function getModules() {
  return Array.from(
    new Set(categories.flatMap((category) => category.items.map((item) => itemModule(item, category))))
  );
}

function matchesModule(item, category) {
  return !state.selectedModules.size || state.selectedModules.has(itemModule(item, category));
}

function matchesFilters(item, category) {
  return matchesSearch(item) && matchesModule(item, category);
}

function totalMarks(items) {
  return items.reduce((sum, item) => sum + (item.marks || 0), 0);
}

function renderCategories() {
  categoryList.innerHTML = categories
    .map((category, index) => {
      const active = index === state.categoryIndex ? " active" : "";
      const filteredItems = category.items.filter((item) => matchesModule(item, category));
      return `
        <button class="category-button${active}" type="button" data-category="${index}">
          <strong>${category.title}</strong>
          <span><em>${category.frequency}</em><em>${filteredItems.length} 题 / ${totalMarks(filteredItems)} 分</em></span>
        </button>
      `;
    })
    .join("");
}

function renderModuleFilter() {
  const modules = getModules();
  moduleFilter.innerHTML = modules
    .map((moduleName) => {
      const checked = state.selectedModules.has(moduleName) ? " checked" : "";
      return `
        <label class="year-chip">
          <input type="checkbox" value="${moduleName}"${checked}>
          <span>${moduleName}</span>
        </label>
      `;
    })
    .join("");
  clearModuleFilterButton.disabled = state.selectedModules.size === 0;
}

function renderOptions(item) {
  if (!item.options || !item.options.length) return "";
  return `
    <div class="options-block">
      <span class="label">Options / 选项</span>
      <div class="option-list">
        ${item.options
          .map(
            (option) => `
              <div class="option-row">
                <span class="option-letter">${option.label}</span>
                <div>
                  <p>${option.english}</p>
                  <p>${option.chinese}</p>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderCards() {
  const category = categories[state.categoryIndex];
  const moduleItems = category.items.filter((item) => matchesModule(item, category));
  const visibleItems = category.items.filter((item) => matchesFilters(item, category));

  categoryTitle.textContent = category.title;
  frequencyLabel.textContent = `${category.frequency} · ${totalMarks(moduleItems)} marks`;
  topicCount.textContent = moduleItems.length;
  visibleCount.textContent = visibleItems.length;
  answerCount.textContent = visibleItems.filter((item) => state.openCards.has(item.id)).length;

  if (!visibleItems.length) {
    cards.innerHTML = `<div class="empty">这个分类里没有匹配的题目。</div>`;
    return;
  }

  cards.innerHTML = visibleItems
        .map((item) => {
      const isOpen = state.openCards.has(item.id);
      const moduleName = itemModule(item, category);
      return `
        <article class="question-card${isOpen ? " open" : ""}" data-id="${item.id}">
          <div class="card-header">
            <div class="card-title">
              <h3>
                <span>${item.title}</span>
                <span class="count-badge" title="${item.tag || category.title}">${item.marks ? `${item.marks} marks` : item.tag}</span>
              </h3>
              <p>${category.title} · ${moduleName}${item.tag ? ` · ${item.tag}` : ""}</p>
            </div>
            <button class="answer-toggle" type="button" aria-expanded="${isOpen}">
              ${isOpen ? "隐藏答案" : "显示答案"}
            </button>
          </div>
          <div class="card-body">
            <div class="qa-line">
              <span class="label">English question</span>
              <p class="text">${item.englishQuestion}</p>
            </div>
            <div class="qa-line">
              <span class="label">中文问题</span>
              <p class="text">${item.chineseQuestion}</p>
            </div>
            ${renderOptions(item)}
            <div class="answer-wrap">
              <div class="qa-line answer">
                <span class="label">English answer</span>
                <p class="text">${item.englishAnswer}</p>
              </div>
              <div class="qa-line answer">
                <span class="label">中文答案</span>
                <p class="text">${item.chineseAnswer}</p>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function render() {
  renderModuleFilter();
  renderCategories();
  renderCards();
}

categoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.categoryIndex = Number(button.dataset.category);
  state.openCards.clear();
  render();
});

cards.addEventListener("click", (event) => {
  const button = event.target.closest(".answer-toggle");
  if (!button) return;
  const card = button.closest(".question-card");
  const id = card.dataset.id;
  if (state.openCards.has(id)) {
    state.openCards.delete(id);
  } else {
    state.openCards.add(id);
  }
  renderCards();
});

searchInput.addEventListener("input", (event) => {
  state.search = normalise(event.target.value);
  renderCategories();
  renderCards();
});

moduleFilter.addEventListener("change", (event) => {
  const input = event.target.closest("input[type='checkbox']");
  if (!input) return;
  if (input.checked) {
    state.selectedModules.add(input.value);
  } else {
    state.selectedModules.delete(input.value);
  }
  state.openCards.clear();
  render();
});

clearModuleFilterButton.addEventListener("click", () => {
  state.selectedModules.clear();
  state.openCards.clear();
  render();
});

showAllButton.addEventListener("click", () => {
  categories[state.categoryIndex].items
    .filter((item) => matchesFilters(item, categories[state.categoryIndex]))
    .forEach((item) => state.openCards.add(item.id));
  renderCards();
});

hideAllButton.addEventListener("click", () => {
  categories[state.categoryIndex].items.forEach((item) => state.openCards.delete(item.id));
  renderCards();
});

render();
