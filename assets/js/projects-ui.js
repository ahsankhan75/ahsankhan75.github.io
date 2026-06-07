(function () {
  const workspace = document.getElementById('projects-workspace');
  if (!workspace || typeof PORTFOLIO_CATEGORIES === 'undefined') return;

  const catNav = document.getElementById('projects-categories');
  const listEl = document.getElementById('projects-list');
  const detailEl = document.getElementById('project-detail');
  const overviewEl = document.getElementById('projects-overview');

  let activeCategory = PORTFOLIO_CATEGORIES[0].id;
  let activeProjectId = null;

  function projectsInCategory(catId) {
    return PORTFOLIO_PROJECTS.filter((p) => p.category === catId);
  }

  function findProject(id) {
    return PORTFOLIO_PROJECTS.find((p) => p.id === id);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderListItems(items) {
    return items
      .map(
        (item) =>
          `<li>${item.includes('<') ? item : escapeHtml(item)}</li>`
      )
      .join('');
  }

  function renderInsight(label, icon, text) {
    if (!text) return '';
    const slug = label.toLowerCase().replace(/\s+/g, '-');
    return `
      <div class="insight-block insight-block--${slug}">
        <div class="insight-block__label">
          <span class="insight-block__icon">${icon}</span>
          ${label}
        </div>
        <p>${escapeHtml(text)}</p>
      </div>`;
  }

  function renderPart(part, index) {
    return `
      <details class="part-block" ${index === 0 ? 'open' : ''}>
        <summary class="part-block__summary">
          <span class="part-block__index">${String(index + 1).padStart(2, '0')}</span>
          <span class="part-block__title">${escapeHtml(part.title)}</span>
        </summary>
        <div class="part-block__body">
          ${part.summary ? `<p class="part-block__desc">${escapeHtml(part.summary)}</p>` : ''}
          ${
            part.highlights && part.highlights.length
              ? `<ul class="detail-list">${renderListItems(part.highlights)}</ul>`
              : ''
          }
          <div class="part-block__insights">
            ${renderInsight('Impact', '◆', part.impact)}
            ${renderInsight('What I Learned', '✦', part.learned)}
          </div>
        </div>
      </details>`;
  }

  function renderDetail(project) {
    if (!project) {
      detailEl.innerHTML = `
        <div class="project-detail__empty">
          <p>Select a project from the list to read the full breakdown — including impact and key takeaways for each part.</p>
        </div>`;
      return;
    }

    detailEl.innerHTML = `
      <header class="project-detail__header">
        <div>
          <p class="project-detail__category">${escapeHtml(
            PORTFOLIO_CATEGORIES.find((c) => c.id === project.category)?.name || ''
          )}</p>
          <h3 class="project-detail__title">${escapeHtml(project.title)}</h3>
        </div>
        <a href="${escapeHtml(project.url)}" class="project-card__link" target="_blank" rel="noopener">
          ${escapeHtml(project.linkLabel || 'View Repo')} ↗
        </a>
      </header>
      <div class="project-detail__tags">
        ${project.tags.map((t) => `<span class="project-card__tag">${escapeHtml(t)}</span>`).join('')}
      </div>
      <p class="project-detail__summary">${escapeHtml(project.summary)}</p>
      <div class="project-detail__insights">
        ${renderInsight('Overall Impact', '◆', project.impact)}
        ${renderInsight('What I Learned', '✦', project.learned)}
      </div>
      <div class="project-detail__parts">
        <h4 class="project-detail__parts-title">Project breakdown</h4>
        ${project.parts.map((part, i) => renderPart(part, i)).join('')}
      </div>`;

    detailEl.scrollTop = 0;
  }

  function renderCategories() {
    catNav.innerHTML = PORTFOLIO_CATEGORIES.map((cat) => {
      const count = projectsInCategory(cat.id).length;
      const active = cat.id === activeCategory ? ' active' : '';
      return `
        <button type="button" class="cat-btn${active}" data-category="${cat.id}" aria-pressed="${cat.id === activeCategory}">
          <span class="cat-btn__icon">${cat.icon}</span>
          <span class="cat-btn__text">
            <span class="cat-btn__name">${escapeHtml(cat.name)}</span>
            <span class="cat-btn__count">${count} project${count !== 1 ? 's' : ''}</span>
          </span>
        </button>`;
    }).join('');

    catNav.querySelectorAll('.cat-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.category;
        const first = projectsInCategory(activeCategory)[0];
        activeProjectId = first ? first.id : null;
        renderAll();
        updateHash();
      });
    });
  }

  function renderList() {
    const projects = projectsInCategory(activeCategory);
    listEl.innerHTML = projects
      .map((p) => {
        const active = p.id === activeProjectId ? ' active' : '';
        return `
          <button type="button" class="project-list-item${active}" data-project="${p.id}">
            <span class="project-list-item__title">${escapeHtml(p.title)}</span>
            <span class="project-list-item__meta">${p.tags.slice(0, 3).join(' · ')}</span>
          </button>`;
      })
      .join('');

    listEl.querySelectorAll('.project-list-item').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeProjectId = btn.dataset.project;
        renderList();
        renderDetail(findProject(activeProjectId));
        updateHash();
        if (window.innerWidth <= 900) {
          detailEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function renderOverview() {
    const total = PORTFOLIO_PROJECTS.length;
    overviewEl.innerHTML = PORTFOLIO_CATEGORIES.map((cat) => {
      const count = projectsInCategory(cat.id).length;
      return `<span class="overview-chip"><strong>${count}</strong> ${escapeHtml(cat.name)}</span>`;
    }).join('');
    overviewEl.setAttribute('aria-label', `${total} projects across ${PORTFOLIO_CATEGORIES.length} categories`);
  }

  function renderAll() {
    renderCategories();
    renderList();
    renderDetail(findProject(activeProjectId));
  }

  function updateHash() {
    if (!activeProjectId) return;
    const hash = `project-${activeProjectId}`;
    if (location.hash !== '#' + hash) {
      history.replaceState(null, '', '#' + hash);
    }
  }

  function initFromHash() {
    const hash = location.hash.replace('#', '');
    if (hash.startsWith('project-')) {
      const id = hash.replace('project-', '');
      const project = findProject(id);
      if (project) {
        activeCategory = project.category;
        activeProjectId = project.id;
        return;
      }
    }
    const first = projectsInCategory(activeCategory)[0];
    activeProjectId = first ? first.id : null;
  }

  initFromHash();
  renderOverview();
  renderAll();

  window.addEventListener('hashchange', () => {
    initFromHash();
    renderAll();
  });
})();
