(function () {
  const workspace = document.getElementById('projects-workspace');
  if (!workspace || typeof PORTFOLIO_CATEGORIES === 'undefined') return;

  const catNav = document.getElementById('projects-categories');
  const listEl = document.getElementById('projects-list');
  const detailEl = document.getElementById('project-detail');
  const overviewEl = document.getElementById('projects-overview');
  const countEl = document.getElementById('projects-count');
  const isCompact = () => window.matchMedia('(max-width: 900px)').matches;

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
      </div>
      ${renderPager(project)}`;

    detailEl.querySelectorAll('[data-goto]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = findProject(btn.dataset.goto);
        if (!target) return;
        activeCategory = target.category;
        activeProjectId = target.id;
        renderAll();
        updateHash();
        scrollToDetail();
      });
    });

    detailEl.scrollTop = 0;

    // Cross-fade new content in; restarting the class keeps it interruptible
    detailEl.classList.remove('is-switching');
    void detailEl.offsetWidth;
    detailEl.classList.add('is-switching');
  }

  function renderPager(project) {
    const idx = PORTFOLIO_PROJECTS.indexOf(project);
    const prev = PORTFOLIO_PROJECTS[idx - 1];
    const next = PORTFOLIO_PROJECTS[idx + 1];
    const btn = (p, dir) =>
      p
        ? `<button type="button" class="project-pager__btn project-pager__btn--${dir}" data-goto="${p.id}">
             <span class="project-pager__dir">${dir === 'prev' ? '← Previous' : 'Next project →'}</span>
             <span class="project-pager__title">${escapeHtml(p.title)}</span>
           </button>`
        : '<span></span>';
    return `<nav class="project-pager" aria-label="Previous and next project">${btn(prev, 'prev')}${btn(next, 'next')}</nav>`;
  }

  function scrollToDetail() {
    if (isCompact()) {
      detailEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      workspace.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // Keep the active chip visible inside a horizontal slider without moving the page
  function revealActive(container) {
    const active = container.querySelector('.active');
    if (!active || container.scrollWidth <= container.clientWidth) return;
    const left = active.offsetLeft - container.offsetLeft;
    const right = left + active.offsetWidth;
    if (left < container.scrollLeft || right > container.scrollLeft + container.clientWidth) {
      container.scrollTo({ left: Math.max(0, left - 16), behavior: 'smooth' });
    }
  }

  function updateSliderState(container) {
    const track = container.parentElement;
    const max = container.scrollWidth - container.clientWidth;
    const atStart = container.scrollLeft <= 2;
    const atEnd = container.scrollLeft >= max - 2;
    track.classList.toggle('has-prev', max > 2 && !atStart);
    track.classList.toggle('has-next', max > 2 && !atEnd);
    const controls = document.querySelector(`.slider-controls[data-for="${container.id}"]`);
    if (controls) {
      controls.classList.toggle('is-hidden', max <= 2);
      controls.querySelector('[data-dir="-1"]').disabled = atStart;
      controls.querySelector('[data-dir="1"]').disabled = atEnd;
    }
  }

  function initSliders() {
    [catNav, listEl].forEach((container) => {
      container.addEventListener('scroll', () => {
        updateSliderState(container);
        if (container === listEl && container.scrollLeft > 8) {
          workspace.classList.add('has-swiped');
        }
      }, { passive: true });
    });

    document.querySelectorAll('.slider-controls').forEach((controls) => {
      const container = document.getElementById(controls.dataset.for);
      controls.querySelectorAll('.slider-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const dir = Number(btn.dataset.dir);
          container.scrollBy({ left: dir * container.clientWidth * 0.8, behavior: 'smooth' });
        });
      });
    });

    window.addEventListener('resize', () => {
      updateSliderState(catNav);
      updateSliderState(listEl);
    });
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

    updateSliderState(catNav);
    revealActive(catNav);
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
        if (isCompact()) {
          detailEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    if (countEl) {
      const pos = projects.findIndex((p) => p.id === activeProjectId) + 1;
      countEl.textContent = projects.length ? `· ${pos} of ${projects.length}` : '';
    }
    if (listEl.dataset.category !== activeCategory) {
      listEl.dataset.category = activeCategory;
      listEl.scrollLeft = 0;
    }
    updateSliderState(listEl);
    revealActive(listEl);
  }

  function renderOverview() {
    const total = PORTFOLIO_PROJECTS.length;
    overviewEl.innerHTML = PORTFOLIO_CATEGORIES.map((cat) => {
      const count = projectsInCategory(cat.id).length;
      return `<button type="button" class="overview-chip" data-category="${cat.id}"><strong>${count}</strong> ${escapeHtml(cat.name)}</button>`;
    }).join('');

    overviewEl.querySelectorAll('.overview-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        activeCategory = chip.dataset.category;
        const first = projectsInCategory(activeCategory)[0];
        activeProjectId = first ? first.id : null;
        renderAll();
        updateHash();
        workspace.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
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
  initSliders();
  renderOverview();
  renderAll();

  window.addEventListener('hashchange', () => {
    initFromHash();
    renderAll();
  });
})();
