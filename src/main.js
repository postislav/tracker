const PROGRAM_DAYS = 90;
const REORDER_BUFFER_DAYS = 5;

const initialItems = [
  { name: "Healthy Gut", unit: "ложка", daily: 1, pack: 30, time: "Утро", note: "В коктейль" },
  { name: "FitLine Activize", unit: "ложка", daily: 1, pack: 30, time: "Утро", note: "В коктейль" },
  { name: "FitLine Beauty", unit: "ложка", daily: 1, pack: 30, time: "Утро", note: "В коктейль" },
  { name: "Таурин", unit: "капс.", daily: 2, pack: 60, time: "Утро / перед ужином", note: "1 утром + 1 за 20 мин до ужина" },
  { name: "FitLine Amino", unit: "капс.", daily: 7, pack: 210, time: "Утро / промежутки", note: "3 утром + 2 + 2" },
  { name: "Бетаин HCl", unit: "капс.", daily: 3, pack: 90, time: "С едой", note: "Завтрак, обед, ужин" },
  { name: "Digest", unit: "капс.", daily: 3, pack: 90, time: "С едой", note: "Завтрак, обед, ужин" },
  { name: "D3+K2", unit: "капс.", daily: 1, pack: 30, time: "После завтрака", note: "После еды" },
  { name: "K2", unit: "капс.", daily: 1, pack: 30, time: "После завтрака", note: "Отдельная капсула" },
  { name: "D3 спрей", unit: "пшик", daily: 5, pack: 150, time: "После завтрака", note: "5 пшиков под язык" },
  { name: "Масло орегано", unit: "капс.", daily: 2, pack: 60, time: "Промежутки", note: "Курс 4 недели" },
  { name: "Берберин", unit: "капс.", daily: 2, pack: 60, time: "Промежутки", note: "2 раза в день" },
  { name: "S. Boulardii", unit: "капс.", daily: 2, pack: 60, time: "Промежутки", note: "2 раза в день" },
  { name: "Аллицин / AlliMax", unit: "капс.", daily: 2, pack: 60, time: "Обед / ужин", note: "Во время еды" },
  { name: "Butycaps", unit: "капс.", daily: 1, pack: 30, time: "Обед", note: "Начать со 2-й недели", startDay: 8 },
  { name: "Наттокиназа", unit: "капс.", daily: 1, pack: 30, time: "Перед сном", note: "Строго на пустой желудок" },
  { name: "Магний глицинат", unit: "капс.", daily: 4, pack: 120, time: "Перед сном", note: "Для сна и расслабления" },
];

const schedule = [
  {
    block: "Утро",
    hint: "Сразу после пробуждения",
    items: [
      { name: "Healthy Gut", dose: "1 ложка", note: "в коктейль" },
      { name: "FitLine Activize", dose: "1 ложка", note: "в коктейль" },
      { name: "FitLine Beauty", dose: "1 ложка", note: "в коктейль" },
      { name: "Таурин", dose: "1 капс.", note: "вместе с утренним приемом" },
      { name: "FitLine Amino", dose: "3 капс.", note: "через 20 минут" },
    ],
  },
  {
    block: "Завтрак",
    hint: "Во время еды и сразу после",
    items: [
      { name: "Бетаин HCl", dose: "1 капс.", note: "во время еды" },
      { name: "Digest", dose: "1 капс.", note: "во время еды" },
      { name: "D3+K2", dose: "1 капс.", note: "после еды" },
      { name: "K2", dose: "1 капс.", note: "после еды" },
      { name: "D3 спрей", dose: "5 пшиков", note: "под язык" },
    ],
  },
  {
    block: "Промежуток №1",
    hint: "Между завтраком и обедом",
    items: [
      { name: "Масло орегано", dose: "1 капс.", note: "запить водой" },
      { name: "Берберин", dose: "1 капс.", note: "запить водой" },
      { name: "S. Boulardii", dose: "1 капс.", note: "запить водой" },
      { name: "FitLine Amino", dose: "2 капс.", note: "запить водой" },
    ],
  },
  {
    block: "Обед",
    hint: "Во время еды",
    items: [
      { name: "Бетаин HCl", dose: "1 капс.", note: "во время еды" },
      { name: "Digest", dose: "1 капс.", note: "во время еды" },
      { name: "Аллицин / AlliMax", dose: "1 капс.", note: "во время еды" },
      { name: "Butycaps", dose: "1 капс.", note: "начать со 2-й недели", startDay: 8 },
    ],
  },
  {
    block: "Промежуток №2",
    hint: "Между обедом и ужином",
    items: [
      { name: "Берберин", dose: "1 капс.", note: "запить водой" },
      { name: "Масло орегано", dose: "1 капс.", note: "запить водой" },
      { name: "S. Boulardii", dose: "1 капс.", note: "запить водой" },
      { name: "FitLine Amino", dose: "2 капс.", note: "запить водой" },
    ],
  },
  {
    block: "Перед ужином",
    hint: "За 20 минут до еды",
    items: [
      { name: "Таурин", dose: "1 капс.", note: "до ужина" },
    ],
  },
  {
    block: "Ужин",
    hint: "Во время еды",
    items: [
      { name: "Бетаин HCl", dose: "1 капс.", note: "во время еды" },
      { name: "Digest", dose: "1 капс.", note: "во время еды" },
      { name: "Аллицин / AlliMax", dose: "1 капс.", note: "во время еды" },
    ],
  },
  {
    block: "Перед сном",
    hint: "На пустой желудок",
    items: [
      { name: "Наттокиназа", dose: "1 капс.", note: "строго на пустой желудок" },
      { name: "Магний глицинат", dose: "4 капс.", note: "для сна и расслабления" },
    ],
  },
];

let day = safeReadDay();
let done = safeReadDone(day);

const root = document.getElementById("root");

function storageKey(currentDay) {
  return `supplement-tracker-day-${currentDay}`;
}

function safeReadDay() {
  const savedDay = Number(localStorage.getItem("supplement-tracker-current-day") || 1);
  return Math.min(Math.max(savedDay || 1, 1), PROGRAM_DAYS);
}

function safeReadDone(currentDay) {
  try {
    return JSON.parse(localStorage.getItem(storageKey(currentDay)) || "{}");
  } catch {
    return {};
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setDay(nextDay) {
  day = Math.min(Math.max(nextDay, 1), PROGRAM_DAYS);
  localStorage.setItem("supplement-tracker-current-day", String(day));
  done = safeReadDone(day);
  render();
}

function toggleItem(name) {
  done = { ...done, [name]: !done[name] };
  localStorage.setItem(storageKey(day), JSON.stringify(done));
  render();
}

function toggleScheduleItem(key) {
  done = { ...done, [key]: !done[key] };
  localStorage.setItem(storageKey(day), JSON.stringify(done));
  render();
}

function resetDay() {
  done = {};
  localStorage.removeItem(storageKey(day));
  render();
}

function scheduleKey(block, item, index) {
  return `${block}::${index}::${item.name}`;
}

function parseDoseAmount(dose) {
  const match = String(dose).match(/\d+([.,]\d+)?/);
  return match ? Number(match[0].replace(",", ".")) : 1;
}

function getVisibleScheduleEntries() {
  return schedule.flatMap((block) =>
    block.items
      .map((item, index) => ({ ...item, block: block.block, key: scheduleKey(block.block, item, index) }))
      .filter((item) => !item.startDay || day >= item.startDay)
  );
}

function getScheduleEntriesForDay(targetDay) {
  return schedule.flatMap((block) =>
    block.items
      .map((item, index) => ({
        ...item,
        block: block.block,
        key: scheduleKey(block.block, item, index),
      }))
      .filter((item) => !item.startDay || targetDay >= item.startDay)
  );
}

function getUsedByChecks() {
  const usedByName = {};

  for (let targetDay = 1; targetDay <= PROGRAM_DAYS; targetDay += 1) {
    const dayDone = safeReadDone(targetDay);
    const dayEntries = getScheduleEntriesForDay(targetDay);

    dayEntries.forEach((entry) => {
      if (!dayDone[entry.key]) return;

      usedByName[entry.name] = (usedByName[entry.name] || 0) + parseDoseAmount(entry.dose);
    });
  }

  return usedByName;
}

function getShopping() {
  const usedByChecks = getUsedByChecks();

  return initialItems.map((item) => {
    const start = item.startDay || 1;
    const daysUsed = Math.max(0, day - start + 1);
    const used = daysUsed * item.daily;
    const checkedUsed = usedByChecks[item.name] || 0;
    const remaining = item.pack - used;
    const daysLeft = remaining > 0 ? Math.floor(remaining / item.daily) : 0;
    const reorderDay = Math.max(start, start + Math.floor(item.pack / item.daily) - REORDER_BUFFER_DAYS);
    const packsFor90 = Math.ceil(((PROGRAM_DAYS - start + 1) * item.daily) / item.pack);
    return { ...item, checkedUsed, remaining, daysLeft, reorderDay, packsFor90 };
  });
}

function render() {
  const scheduleEntries = getVisibleScheduleEntries();
  const completed = scheduleEntries.filter((item) => done[item.key]).length;
  const percent = scheduleEntries.length > 0 ? Math.round((completed / scheduleEntries.length) * 100) : 0;
  const shopping = getShopping();
  const totalCheckedUsed = shopping.reduce((sum, item) => sum + item.checkedUsed, 0);
  const needSoon = shopping.filter((item) => day >= item.reorderDay || item.remaining <= item.daily * REORDER_BUFFER_DAYS);

  root.innerHTML = `
    <main class="app-shell">
      <div class="app-layout">
        <header class="hero-panel">
          <div class="hero-top">
            <div>
              <h1>Трекер программы на 3 месяца</h1>
              <p>Отмечай приемы и проверяй, когда пора заказать новую упаковку.</p>
            </div>
            <div class="day-controls">
              <button class="button button-outline" data-action="prev-day" type="button">- День</button>
              <div class="day-pill">
                <span>Текущий день</span>
                <strong>${day} / ${PROGRAM_DAYS}</strong>
              </div>
              <button class="button" data-action="next-day" type="button">+ День</button>
            </div>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${percent}%"></div>
          </div>
          <div class="progress-meta">
            <span>Выпито: ${completed} из ${scheduleEntries.length}</span>
            <span>${percent}%</span>
          </div>
          <div class="usage-summary">
            Использовано по отметкам за все дни: <strong>${totalCheckedUsed}</strong> доз
          </div>
        </header>

        ${needSoon.length > 0 ? renderWarning(needSoon) : ""}

        <section class="schedule-section">
          <div class="section-heading">
            <h2>Расписание</h2>
            <button class="button button-ghost icon-button" data-action="reset-day" type="button">
              <span aria-hidden="true">↻</span>
              Сбросить отметки
            </button>
          </div>
          <div class="schedule-grid">
            ${schedule.map(renderScheduleBlock).join("")}
          </div>
        </section>

        <section class="card">
          <div class="card-content">
            <div class="table-title">
              <h2>Остатки и закупка</h2>
            </div>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Препарат</th>
                    <th scope="col">1 упаковка</th>
                    <th scope="col">Расход/день</th>
                    <th scope="col">Использовано</th>
                    <th scope="col">Осталось</th>
                    <th scope="col">Заказывать</th>
                    <th scope="col">На 90 дней</th>
                  </tr>
                </thead>
                <tbody>
                  ${shopping.map(renderShoppingRow).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="card">
          <div class="card-content note-card">
            <p>
              Данные сохраняются в браузере на этом устройстве. Если открыть сайт на другом телефоне или компьютере,
              отметки нужно будет вести отдельно. Количество в упаковках можно изменить в коде в блоке <b>initialItems</b>.
            </p>
          </div>
        </section>
      </div>
    </main>
  `;
}

function renderWarning(items) {
  return `
    <section class="card warning-card">
      <div class="card-content">
        <div class="warning-content">
          <span aria-hidden="true">⚠</span>
          <div>
            <h2>Нужно заказать скоро</h2>
            <p>Проверь эти позиции, чтобы программа не прервалась:</p>
            <div class="tag-list">
              ${items.map((item) => `
                <span class="tag">${escapeHtml(item.name)}: остаток ~${Math.max(0, item.daysLeft)} дн.</span>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderScheduleBlock(item) {
  const visibleItems = item.items
    .map((scheduleItem, index) => ({
      ...scheduleItem,
      key: scheduleKey(item.block, scheduleItem, index),
    }))
    .filter((scheduleItem) => !scheduleItem.startDay || day >= scheduleItem.startDay);
  const hiddenItems = item.items.filter((scheduleItem) => scheduleItem.startDay && day < scheduleItem.startDay);

  return `
    <section class="card schedule-card">
      <div class="card-content">
        <div class="schedule-head">
          <h3>${escapeHtml(item.block)}</h3>
          <span>${escapeHtml(item.hint)}</span>
        </div>
        <ul class="schedule-list">
          ${visibleItems.map(renderScheduleItem).join("")}
        </ul>
        ${hiddenItems.length > 0 ? `
          <p class="schedule-soon">С дня ${hiddenItems[0].startDay}: ${hiddenItems.map((hiddenItem) => escapeHtml(hiddenItem.name)).join(", ")}</p>
        ` : ""}
      </div>
    </section>
  `;
}

function renderScheduleItem(item) {
  const isDone = Boolean(done[item.key]);

  return `
    <li class="${isDone ? "is-done" : ""}">
      <button class="schedule-check" data-action="toggle-schedule-item" data-key="${escapeHtml(item.key)}" type="button" aria-label="${isDone ? "Отменить отметку" : "Отметить как выпито"}: ${escapeHtml(item.name)}">
        <span aria-hidden="true">${isDone ? "✓" : ""}</span>
      </button>
      <div>
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.note)}</span>
      </div>
      <b>${escapeHtml(item.dose)}</b>
    </li>
  `;
}

function renderShoppingRow(item) {
  const isLow = item.remaining <= item.daily * REORDER_BUFFER_DAYS;
  return `
    <tr>
      <td data-label="Препарат">${escapeHtml(item.name)}</td>
      <td data-label="1 упаковка">${item.pack} ${escapeHtml(item.unit)}</td>
      <td data-label="Расход/день">${item.daily} ${escapeHtml(item.unit)}</td>
      <td data-label="Использовано">${item.checkedUsed} ${escapeHtml(item.unit)}</td>
      <td data-label="Осталось" class="${isLow ? "low-stock" : ""}">${Math.max(0, item.remaining)} ${escapeHtml(item.unit)} / ~${Math.max(0, item.daysLeft)} дн.</td>
      <td data-label="Заказывать">день ${item.reorderDay}</td>
      <td data-label="На 90 дней">${item.packsFor90} уп.</td>
    </tr>
  `;
}

root.addEventListener("click", (event) => {
  const control = event.target.closest("[data-action]");
  if (!control) return;

  const action = control.dataset.action;
  if (action === "prev-day") setDay(day - 1);
  if (action === "next-day") setDay(day + 1);
  if (action === "reset-day") resetDay();
  if (action === "toggle-item") toggleItem(control.dataset.name);
  if (action === "toggle-schedule-item") toggleScheduleItem(control.dataset.key);
});

render();
