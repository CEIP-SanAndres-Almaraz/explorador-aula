/* Presentación: expone la vista activa para la hoja de estilos. */
(() => {
  const app = document.getElementById('app');
  const workspace = app.closest('.ht-workspace');
  function updateView() {
    const saved = Boolean(app.querySelector('.ht-saved-view'));
    workspace.dataset.view = saved ? 'saved' : state.home ? 'home' : String(state.step);
    const initial = !state.home && state.step === 0 && !state.mode;
    workspace.dataset.landing = String(initial);
  }
  const observer = new MutationObserver(updateView);
  observer.observe(app, { childList: true });
  updateView();
})();
/* Acceso visual a la vista de evaluaciones guardadas que ya existe en el menú. */
(() => {
  const app = document.getElementById('app');
  function addSavedShortcut() {
    if (state.home || state.step !== 0 || state.mode) return;
    const grid = app.querySelector('.grid:has([data-action="mode:one"])');
    if (!grid || grid.querySelector('.editorial-saved')) return;
    const shortcut = document.createElement('button');
    shortcut.type = 'button';
    shortcut.className = 'card editorial-saved';
    shortcut.innerHTML = '<strong>Evaluaciones guardadas</strong><small>Continúa o amplía exploraciones.</small>';
    shortcut.addEventListener('click', () => document.querySelector('[data-shell-action="saved"]').click());
    grid.append(shortcut);
  }
  new MutationObserver(addSavedShortcut).observe(app,{childList:true});
  addSavedShortcut();
})();
