// Progressive enhancement: without JavaScript every project remains visible.
const filters = document.querySelector('.filters');
const buttons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
const status = document.querySelector('#filter-status');

if (filters && status && projects.length) {
  filters.hidden = false;
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.filter;
      buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      let count = 0;
      projects.forEach((project) => {
        project.hidden = category !== 'all' && project.dataset.category !== category;
        if (!project.hidden) count += 1;
      });
      status.textContent = `${count} ${count === 1 ? 'projeto exibido' : 'projetos exibidos'}.`;
    });
  });
}
