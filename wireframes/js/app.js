/* Presentation viewer logic */
let currentIndex = 0;
let theme = 'dark';

function renderList(filter = '') {
  const list = document.getElementById('screenList');
  const q = filter.trim().toLowerCase();
  let html = '';
  let lastGroup = '';
  SCREENS.forEach((s, i) => {
    const hay = `${s.num} ${s.title} ${s.group}`.toLowerCase();
    if (q && !hay.includes(q)) return;
    if (s.group !== lastGroup) {
      html += `<div class="screen-group-label">${s.group}</div>`;
      lastGroup = s.group;
    }
    html += `<div class="screen-item ${i === currentIndex ? 'active' : ''}" data-index="${i}">
      <div class="screen-num">${String(s.num).padStart(2, '0')}</div>
      <div class="screen-item-title">${s.title}</div>
    </div>`;
  });
  list.innerHTML = html || `<div class="screen-group-label">No matches</div>`;
  list.querySelectorAll('.screen-item').forEach(el => {
    el.addEventListener('click', () => {
      currentIndex = Number(el.dataset.index);
      showScreen();
    });
  });
}

function showScreen() {
  const s = SCREENS[currentIndex];
  const phone = document.getElementById('phoneScreen');
  phone.setAttribute('data-theme', theme);
  phone.innerHTML = s.render();
  document.getElementById('counterLabel').textContent =
    `Screen ${String(s.num).padStart(2, '0')} / ${String(SCREENS.length).padStart(2, '0')}`;
  document.getElementById('specTitle').textContent = s.title;
  document.getElementById('specId').textContent = `SCREEN ${String(s.num).padStart(2, '0')}`;
  document.getElementById('specPurpose').textContent = s.purpose;
  document.getElementById('specElements').innerHTML = s.elements.map(e => `<li>${e}</li>`).join('');
  document.getElementById('specNotes').textContent = s.notes;
  const flow = document.getElementById('specFlow');
  const nearby = SCREENS.slice(Math.max(0, currentIndex - 1), Math.min(SCREENS.length, currentIndex + 3));
  flow.innerHTML = nearby.map(n => `
    <div class="flow-step ${n.num === s.num ? 'current' : ''}">
      <span class="dot"></span>
      <span>${String(n.num).padStart(2, '0')}. ${n.title}</span>
    </div>`).join('');
  renderList(document.getElementById('search').value);
  const active = document.querySelector('.screen-item.active');
  if (active) active.scrollIntoView({ block: 'nearest' });
}

function setTheme(t) {
  theme = t;
  document.getElementById('themeDark').classList.toggle('active', t === 'dark');
  document.getElementById('themeLight').classList.toggle('active', t === 'light');
  showScreen();
}

function next() {
  currentIndex = (currentIndex + 1) % SCREENS.length;
  showScreen();
}

function prev() {
  currentIndex = (currentIndex - 1 + SCREENS.length) % SCREENS.length;
  showScreen();
}

document.getElementById('themeDark').addEventListener('click', () => setTheme('dark'));
document.getElementById('themeLight').addEventListener('click', () => setTheme('light'));
document.getElementById('prevBtn').addEventListener('click', prev);
document.getElementById('nextBtn').addEventListener('click', next);
document.getElementById('prevBtn2').addEventListener('click', prev);
document.getElementById('nextBtn2').addEventListener('click', next);
document.getElementById('search').addEventListener('input', e => renderList(e.target.value));

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
  if (e.key === 'd' || e.key === 'D') setTheme('dark');
  if (e.key === 'l' || e.key === 'L') setTheme('light');
});

showScreen();
