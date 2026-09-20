const DEMO_DATA = [
  { group: 'crime', groupLabel: 'Crime rates', indicator: 'Criminaliteit totaal', unit: '‰', year: 2021, area: 'West', value: 28.6, source: 'Politie / gemeente Utrecht', file: 'Veiligheid (wijken) - West.csv' },
  { group: 'crime', groupLabel: 'Crime rates', indicator: 'Criminaliteit totaal', unit: '‰', year: 2022, area: 'West', value: 29.5, source: 'Politie / gemeente Utrecht', file: 'Veiligheid (wijken) - West.csv' },
  { group: 'crime', groupLabel: 'Crime rates', indicator: 'Criminaliteit totaal', unit: '‰', year: 2023, area: 'West', value: 30.7, source: 'Politie / gemeente Utrecht', file: 'Veiligheid (wijken) - West.csv' },
  { group: 'crime', groupLabel: 'Crime rates', indicator: 'Criminaliteit totaal', unit: '‰', year: 2024, area: 'West', value: 31.9, source: 'Politie / gemeente Utrecht', file: 'Veiligheid (wijken) - West.csv' },
  { group: 'crime', groupLabel: 'Crime rates', indicator: 'Criminaliteit totaal', unit: '‰', year: 2025, area: 'West', value: 35, source: 'Politie / gemeente Utrecht', file: 'Veiligheid (wijken) - West.csv' },
  { group: 'crime', groupLabel: 'Crime rates', indicator: 'Criminaliteit totaal', unit: '‰', year: 2021, area: 'Utrecht', value: 33.6, source: 'Politie / gemeente Utrecht', file: 'Veiligheid (wijken) - West.csv' },
  { group: 'crime', groupLabel: 'Crime rates', indicator: 'Criminaliteit totaal', unit: '‰', year: 2022, area: 'Utrecht', value: 36.2, source: 'Politie / gemeente Utrecht', file: 'Veiligheid (wijken) - West.csv' },
  { group: 'crime', groupLabel: 'Crime rates', indicator: 'Criminaliteit totaal', unit: '‰', year: 2023, area: 'Utrecht', value: 37, source: 'Politie / gemeente Utrecht', file: 'Veiligheid (wijken) - West.csv' },
  { group: 'crime', groupLabel: 'Crime rates', indicator: 'Criminaliteit totaal', unit: '‰', year: 2024, area: 'Utrecht', value: 35.5, source: 'Politie / gemeente Utrecht', file: 'Veiligheid (wijken) - West.csv' },
  { group: 'crime', groupLabel: 'Crime rates', indicator: 'Criminaliteit totaal', unit: '‰', year: 2025, area: 'Utrecht', value: 38.7, source: 'Politie / gemeente Utrecht', file: 'Veiligheid (wijken) - West.csv' },
  { group: 'violence', groupLabel: 'Violence', indicator: 'Geweld totaal', unit: '‰', year: 2021, area: 'West', value: 2, source: 'Politie / gemeente Utrecht', file: 'Geweld per 1000 inwoners plus arbeidsplaatsen - West.csv' },
  { group: 'violence', groupLabel: 'Violence', indicator: 'Geweld totaal', unit: '‰', year: 2022, area: 'West', value: 2.2, source: 'Politie / gemeente Utrecht', file: 'Geweld per 1000 inwoners plus arbeidsplaatsen - West.csv' },
  { group: 'violence', groupLabel: 'Violence', indicator: 'Geweld totaal', unit: '‰', year: 2023, area: 'West', value: 1.8, source: 'Politie / gemeente Utrecht', file: 'Geweld per 1000 inwoners plus arbeidsplaatsen - West.csv' },
  { group: 'violence', groupLabel: 'Violence', indicator: 'Geweld totaal', unit: '‰', year: 2024, area: 'West', value: 1.9, source: 'Politie / gemeente Utrecht', file: 'Geweld per 1000 inwoners plus arbeidsplaatsen - West.csv' },
  { group: 'violence', groupLabel: 'Violence', indicator: 'Geweld totaal', unit: '‰', year: 2025, area: 'West', value: 2.3, source: 'Politie / gemeente Utrecht', file: 'Geweld per 1000 inwoners plus arbeidsplaatsen - West.csv' },
  { group: 'violence', groupLabel: 'Violence', indicator: 'Geweld totaal', unit: '‰', year: 2021, area: 'Utrecht', value: 2.7, source: 'Politie / gemeente Utrecht', file: 'Geweld per 1000 inwoners plus arbeidsplaatsen - West.csv' },
  { group: 'violence', groupLabel: 'Violence', indicator: 'Geweld totaal', unit: '‰', year: 2022, area: 'Utrecht', value: 2.9, source: 'Politie / gemeente Utrecht', file: 'Geweld per 1000 inwoners plus arbeidsplaatsen - West.csv' },
  { group: 'violence', groupLabel: 'Violence', indicator: 'Geweld totaal', unit: '‰', year: 2023, area: 'Utrecht', value: 2.6, source: 'Politie / gemeente Utrecht', file: 'Geweld per 1000 inwoners plus arbeidsplaatsen - West.csv' },
  { group: 'violence', groupLabel: 'Violence', indicator: 'Geweld totaal', unit: '‰', year: 2024, area: 'Utrecht', value: 2.8, source: 'Politie / gemeente Utrecht', file: 'Geweld per 1000 inwoners plus arbeidsplaatsen - West.csv' },
  { group: 'violence', groupLabel: 'Violence', indicator: 'Geweld totaal', unit: '‰', year: 2025, area: 'Utrecht', value: 3, source: 'Politie / gemeente Utrecht', file: 'Geweld per 1000 inwoners plus arbeidsplaatsen - West.csv' },
  { group: 'street', groupLabel: 'Street crime', indicator: 'Overval', unit: 'aantal', year: 2021, area: 'West', value: 1, source: 'Politie / gemeente Utrecht', file: 'Aantal overvallen en straatroof - West.csv' },
  { group: 'street', groupLabel: 'Street crime', indicator: 'Overval', unit: 'aantal', year: 2025, area: 'West', value: 1, source: 'Politie / gemeente Utrecht', file: 'Aantal overvallen en straatroof - West.csv' },
  { group: 'street', groupLabel: 'Street crime', indicator: 'Straatroof', unit: 'aantal', year: 2021, area: 'West', value: 4, source: 'Politie / gemeente Utrecht', file: 'Aantal overvallen en straatroof - West.csv' },
  { group: 'street', groupLabel: 'Street crime', indicator: 'Straatroof', unit: 'aantal', year: 2025, area: 'West', value: 5, source: 'Politie / gemeente Utrecht', file: 'Aantal overvallen en straatroof - West.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Voelt zich wel eens onveilig', unit: '%', year: 2021, area: 'West', value: 35.2295870248644, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Voelt zich wel eens onveilig (in eigen buurt) - West.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Voelt zich wel eens onveilig', unit: '%', year: 2023, area: 'West', value: 39.0228763879325, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Voelt zich wel eens onveilig (in eigen buurt) - West.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Voelt zich wel eens onveilig', unit: '%', year: 2025, area: 'West', value: 39.8992267429492, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Voelt zich wel eens onveilig (in eigen buurt) - West.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Voelt zich wel eens onveilig', unit: '%', year: 2021, area: 'Utrecht', value: 30.0687755029461, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Voelt zich wel eens onveilig (in eigen buurt) - West.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Voelt zich wel eens onveilig', unit: '%', year: 2025, area: 'Utrecht', value: 37.0019628447802, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Voelt zich wel eens onveilig (in eigen buurt) - West.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Last van jongeren op straat', unit: '%', year: 2021, area: 'West', value: 22.9009353747232, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Heeft vaak last van jongeren op straat (in de buurt) - West.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Last van jongeren op straat', unit: '%', year: 2023, area: 'West', value: 19.1439396282169, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Heeft vaak last van jongeren op straat (in de buurt) - West.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Last van jongeren op straat', unit: '%', year: 2025, area: 'West', value: 18.8360837088914, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Heeft vaak last van jongeren op straat (in de buurt) - West.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Last van jongeren op straat', unit: '%', year: 2025, area: 'Noordwest', value: 23.1134574520559, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Heeft vaak last van jongeren op straat (in de buurt) - West-2.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Last van jongeren op straat', unit: '%', year: 2025, area: 'Overvecht', value: 39.166565874753, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Heeft vaak last van jongeren op straat (in de buurt) - West-2.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Last van jongeren op straat', unit: '%', year: 2025, area: 'Noordoost', value: 9.96612996547672, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Heeft vaak last van jongeren op straat (in de buurt) - West-2.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Last van jongeren op straat', unit: '%', year: 2025, area: 'Oost', value: 10.064872960523, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Heeft vaak last van jongeren op straat (in de buurt) - West-2.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Last van jongeren op straat', unit: '%', year: 2025, area: 'Binnenstad', value: 27.4276383835437, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Heeft vaak last van jongeren op straat (in de buurt) - West-2.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Last van jongeren op straat', unit: '%', year: 2025, area: 'Zuid', value: 19.9864412150216, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Heeft vaak last van jongeren op straat (in de buurt) - West-2.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Last van jongeren op straat', unit: '%', year: 2025, area: 'Zuidwest', value: 30.7454764222592, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Heeft vaak last van jongeren op straat (in de buurt) - West-2.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Last van jongeren op straat', unit: '%', year: 2025, area: 'Leidsche Rijn', value: 22.6395969380502, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Heeft vaak last van jongeren op straat (in de buurt) - West-2.csv' },
  { group: 'perception', groupLabel: 'Perception', indicator: 'Last van jongeren op straat', unit: '%', year: 2025, area: 'Vleuten-De Meern', value: 13.2168499729996, source: 'Onderzoek & Advies, gemeente Utrecht', file: 'Heeft vaak last van jongeren op straat (in de buurt) - West-2.csv' },
  { group: 'crime', groupLabel: 'Crime rates', indicator: 'Autokraak', unit: '‰', year: 2025, area: 'West', value: 7.8, source: 'Politie / gemeente Utrecht', file: 'Misdrijven per 1000 inwoners plus arbeidsplaatsen - West.csv' },
  { group: 'crime', groupLabel: 'Crime rates', indicator: 'Fietsdiefstal', unit: '‰', year: 2025, area: 'West', value: 5.16494764191796, source: 'Politie / gemeente Utrecht', file: 'Misdrijven per 1000 inwoners plus arbeidsplaatsen - West.csv' },
  { group: 'crime', groupLabel: 'Crime rates', indicator: 'Woninginbraken', unit: '‰', year: 2025, area: 'West', value: 4.8, source: 'Politie / gemeente Utrecht', file: 'Misdrijven per 1000 inwoners plus arbeidsplaatsen - West.csv' },
];

const AREA_POSITIONS = {
  West: [242, 300], Noordwest: [239, 142], Overvecht: [388, 143], Noordoost: [548, 164], Binnenstad: [404, 260], Oost: [584, 303], Zuid: [390, 423], Zuidwest: [230, 464], 'Leidsche Rijn': [132, 332], 'Vleuten-De Meern': [120, 454]
};

const METRIC_CONFIG = {
  intimidation: { color: '#dc7455', title: 'Street intimidation', icon: '◌', description: 'Survey responses about street intimidation' },
  perception: { color: '#b66b85', title: 'Safety & experience', icon: '◌', description: 'Survey responses about safety and nuisance' },
  crime: { color: '#287d7b', title: 'Crime rate', icon: '⌁', indicators: ['Criminaliteit totaal', 'Autokraak', 'Fietsdiefstal', 'Woninginbraken'] },
  violence: { color: '#8d7bb4', title: 'Violence', icon: '✦', indicators: ['Geweld totaal'] },
  noise: { color: '#e5a74f', title: 'Noise nuisance', icon: '))', description: 'Reported noise nuisance counts and rates' },
  street: { color: '#e5a74f', title: 'Street crime', icon: '↗', description: 'Robbery and street theft counts' },
};

const DATA_SOURCE = 'utrecht.incijfers.nl';
const DATA_SOURCE_URL = 'https://utrecht.incijfers.nl/';
const state = { data: DEMO_DATA.map((record) => ({ ...record, level: 'wijken', source: DATA_SOURCE })), years: [], year: '2025', search: '', areaLevel: 'auto', activeLayers: new Set(), activeIndicators: new Set(), filtersInitialized: false, expandedGroups: new Set(), accordionGroups: new Set(), dataIndex: null, filterCache: new Map(), mapScale: 1, labelsVisible: true, dataState: 'Loading bundled CSVs' };
const WIJK_API_URL = 'https://api.pdok.nl/cbs/wijken-en-buurten-2025/ogc/v1/collections/wijken/items?f=json&limit=100&filter=gemeentenaam%3D%27Utrecht%27';
const BUURT_API_URL = 'https://api.pdok.nl/cbs/wijken-en-buurten-2025/ogc/v1/collections/buurten/items?f=json&limit=200&filter=gemeentenaam%3D%27Utrecht%27';
let leafletMap = null;
let districtLayer = null;
let wijkFeatures = [];
let buurtFeatures = [];
let boundaryFeatures = [];
let districtFeatures = [];
let districtBounds = null;
let tableRenderTimer = null;
const $ = (selector) => document.querySelector(selector);

function formatValue(value, unit = '') {
  if (value === null || value === undefined || Number.isNaN(value)) return '—';
  const maximumDecimals = unit === '%' ? 1 : value % 1 === 0 ? 0 : 1;
  const suffix = unit && unit !== 'aantal' ? unit : '';
  return `${new Intl.NumberFormat('en-GB', { maximumFractionDigits: maximumDecimals }).format(value)}${suffix}`;
}

function parseDutchNumber(value) {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed || ['?', '.', '-'].includes(trimmed)) return null;
  const normalizedValue = trimmed.replace(/%$/, '').replace(/\s/g, '');
  const normalized = normalizedValue.includes(',') ? normalizedValue.replace(/\./g, '').replace(',', '.') : normalizedValue;
  const number = Number(normalized);
  return Number.isFinite(number) ? number : null;
}

function classifyIndicator(indicator, tile) {
  const text = `${indicator} ${tile}`.toLowerCase();
  if (text.includes('geluid')) return 'noise';
  if (text.includes('straatintimidatie')) return 'intimidation';
  if (text.includes('veiligheidsbeleving')) return 'perception';
  if (text.includes('onveilig') || text.includes('jongeren')) return 'perception';
  if (text.includes('geweld')) return 'violence';
  if (text.includes('overval') || text.includes('straatroof')) return 'street';
  if (text.includes('intimid') || text.includes('lastiggevallen') || text.includes('jeugdproblematiek') || text.includes('veiligheidsbeleving')) return 'perception';
  return 'crime';
}

function parsePeriodCell(value = '') {
  const match = value.replace(/^\uFEFF/, '').trim().match(/^(.*?)(?:\s*\[(\d{4})\]|\|(\d{4}))\s*$/);
  return match ? { label: match[1].trim(), year: Number(match[2] || match[3]) } : null;
}

function inferLevel(fileName, title = '') {
  return /subwijken?/i.test(`${fileName} ${title}`) ? 'buurten' : 'wijken';
}

function metricUnit(label, value = '') {
  if (/%/.test(label) || /%\s*$/.test(value.trim())) return '%';
  if (/\[aantal\]/i.test(label) || /^aantal$/i.test(label.trim())) return 'aantal';
  if (/promillage|per\s+1000/i.test(label)) return '‰';
  return '';
}

function metricLabel(label, fallback = '') {
  const cleaned = label.replace(/^%\s*/, '').replace(/\s*\[(?:aantal|promillage|percentage|%)\]\s*$/i, '').trim();
  if (!cleaned || /^aantal$/i.test(cleaned)) return fallback;
  if (/^per\s+1000\s+inw\+arb$/i.test(cleaned)) return `${fallback} per 1000 inw+arb`;
  return cleaned;
}

function makeRecord({ indicator, tile, unit, year, area, value, file, level }) {
  const group = classifyIndicator(indicator, `${tile} ${file}`);
  return { group, groupLabel: METRIC_CONFIG[group].title, indicator: prettifyIndicator(indicator), unit, year, area: area.trim() || 'onbekend', value: parseDutchNumber(value), source: DATA_SOURCE, file, level };
}

function parseCsv(text, fileName) {
  const rows = [];
  let row = [];
  let cell = '';
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    const next = text[index + 1];
    if (character === '"' && quoted && next === '"') { cell += '"'; index += 1; continue; }
    if (character === '"') { quoted = !quoted; continue; }
    if (character === ';' && !quoted) { row.push(cell); cell = ''; continue; }
    if ((character === '\n' || character === '\r') && !quoted) {
      if (character === '\r' && next === '\n') index += 1;
      row.push(cell); cell = '';
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      continue;
    }
    cell += character;
  }
  if (cell || row.length) { row.push(cell); if (row.some((value) => value.trim())) rows.push(row); }
  if (rows.length < 2) return [];
  rows[0][0] = rows[0][0].replace(/^\uFEFF/, '');
  const title = rows[0][0].trim();
  const level = inferLevel(fileName, title);
  const records = [];
  const wideHeaderIndex = rows.findIndex((values, index) => values[0].trim() === '' && parsePeriodCell(rows[index + 1]?.[0] || ''));
  if (wideHeaderIndex >= 0) {
    const areas = rows[wideHeaderIndex].slice(1).map((area) => area.trim());
    rows.slice(wideHeaderIndex + 1).forEach((values) => {
      const period = parsePeriodCell(values[0] || '');
      if (!period) return;
      areas.forEach((area, index) => {
        const rawValue = values[index + 1] || '';
        records.push(makeRecord({ indicator: metricLabel(period.label, title.replace(/\s+-\s+(?:subwijken|wijken).*$/i, '')), tile: title, unit: metricUnit(`${period.label} ${title}`, rawValue), year: period.year, area, value: rawValue, file: fileName, level }));
      });
    });
    return records;
  }

  const periodHeaderIndex = rows.findIndex((values) => values.slice(1).some((value) => parsePeriodCell(value)));
  if (periodHeaderIndex >= 0) {
    const headers = rows[periodHeaderIndex].slice(1).map((value) => parsePeriodCell(value));
    rows.slice(periodHeaderIndex + 1).forEach((values) => {
      const area = values[0] || '';
      headers.forEach((period, index) => {
        if (!period) return;
        const rawValue = values[index + 1] || '';
        records.push(makeRecord({ indicator: metricLabel(period.label, title.replace(/\s+-\s+(?:subwijken|wijken).*$/i, '')), tile: title, unit: metricUnit(`${period.label} ${title}`, rawValue), year: period.year, area, value: rawValue, file: fileName, level }));
      });
    });
    return records;
  }

  const headers = rows[0].map((header) => header.trim().toLowerCase());
  const indexOf = (name) => headers.indexOf(name);
  const tileIndex = indexOf('tegel');
  const indicatorIndex = indexOf('indicator');
  const unitIndex = indexOf('eenheid');
  const yearIndex = indexOf('periode');
  const areaIndex = indexOf('wijk of subwijk / dimensie');
  const valueIndex = indexOf('waarde');
  if ([indicatorIndex, yearIndex, areaIndex, valueIndex].some((index) => index < 0)) return [];
  return rows.slice(1).map((values) => makeRecord({ indicator: values[indicatorIndex] || '', tile: values[tileIndex] || '', unit: values[unitIndex]?.trim() || metricUnit(values[indicatorIndex] || '', values[valueIndex] || ''), year: Number((values[yearIndex] || '').trim()), area: values[areaIndex] || '', value: values[valueIndex] || '', file: fileName, level })).filter((record) => record.indicator && Number.isFinite(record.year));
}

function prettifyIndicator(indicator) {
  const normalized = indicator.toLowerCase().trim();
  const map = {
    'criminaliteit: totaal per 1000 inw+arb': 'Criminaliteit totaal',
    'geweld: totaal per 1000 inw+arb': 'Geweld totaal',
    'geluidshinder totaal': 'Geluidshinder totaal',
    'geluidshinder totaal per 1000 inw+arb': 'Geluidshinder per 1000 inw+arb',
    'autokraak per 1000 inw+arb': 'Autokraak',
    'fietsdiefstal per 1000 inw+arb': 'Fietsdiefstal',
    'woninginbraken per 1000 woningen': 'Woninginbraken',
    'overval': 'Overval',
    'straatroof': 'Straatroof',
    '% voelt zich wel eens onveilig in eigen buurt': 'Voelt zich wel eens onveilig',
    '% vaak last van jongeren op straat in de buurt': 'Last van jongeren op straat',
  };
  return map[normalized] || indicator.replace(/^%\s*/, '').trim();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character]));
}

function rebuildDataIndex() {
  const groups = new Set();
  const indicatorsByGroup = new Map();
  const unitsByIndicator = new Map();
  const indicatorKeys = new Set();
  state.data.forEach((record) => {
    groups.add(record.group);
    if (!indicatorsByGroup.has(record.group)) indicatorsByGroup.set(record.group, new Set());
    indicatorsByGroup.get(record.group).add(record.indicator);
    const key = indicatorKey(record.group, record.indicator);
    indicatorKeys.add(key);
    if (!unitsByIndicator.has(key)) unitsByIndicator.set(key, new Set());
    if (record.unit) unitsByIndicator.get(key).add(record.unit);
  });
  state.dataIndex = { data: state.data, groups: [...groups], indicatorsByGroup, unitsByIndicator, indicatorKeys };
  state.filterCache.clear();
}

function ensureDataIndex() {
  if (!state.dataIndex || state.dataIndex.data !== state.data) rebuildDataIndex();
  return state.dataIndex;
}

function filteredRecords({ includeUnknown = false, includeMissing = false } = {}) {
  ensureDataIndex();
  const activeKey = [...state.activeIndicators].sort().join('\u001f');
  const cacheKey = `${state.year}\u001f${state.search}\u001f${includeUnknown ? 1 : 0}\u001f${includeMissing ? 1 : 0}\u001f${activeKey}`;
  if (state.filterCache.has(cacheKey)) return state.filterCache.get(cacheKey);
  const searchKey = normalizeAreaKey(state.search);
  const records = state.data.filter((record) => {
    const matchesYear = state.year === 'all' || record.year === Number(state.year);
    const matchesLayer = state.activeLayers.has(record.group);
    const matchesIndicator = state.activeIndicators.has(indicatorKey(record.group, record.indicator));
    const matchesSearch = !searchKey || normalizeAreaKey(record.area).includes(searchKey);
    const knownArea = includeUnknown || !['unknown', 'onbekend'].includes(normalizeAreaKey(record.area));
    return matchesYear && matchesLayer && matchesIndicator && matchesSearch && knownArea && (includeMissing || record.value !== null);
  });
  state.filterCache.set(cacheKey, records);
  return records;
}

function indicatorKey(group, indicator) {
  return `${group}::${indicator}`;
}

function availableGroups() {
  return ensureDataIndex().groups;
}

function availableIndicators(group) {
  const indicators = ensureDataIndex().indicatorsByGroup.get(group);
  return indicators ? [...indicators].sort((first, second) => first.localeCompare(second, 'nl')) : [];
}

function activeIndicatorCount() {
  return state.activeIndicators.size;
}

function latestFor(area, group, indicator) {
  const areaKey = normalizeAreaKey(area);
  const available = state.data.filter((record) => normalizeAreaKey(record.area) === areaKey && record.group === group && (!indicator || record.indicator === indicator) && (state.year === 'all' || record.year === Number(state.year)) && record.value !== null);
  if (!available.length) return null;
  return available.sort((a, b) => b.year - a.year)[0];
}

function getPrimaryRecord(area, boundaryRecordIndex) {
  const priority = ['perception', 'intimidation', 'crime', 'violence', 'noise', 'street'];
  const available = recordsForBoundaryArea(area, boundaryRecordIndex);
  for (const group of priority) {
    if (!state.activeLayers.has(group)) continue;
    const record = available.filter((candidate) => candidate.group === group).sort((a, b) => b.year - a.year)[0];
    if (record) return record;
  }
  return null;
}

function recordsForCurrentArea(area) {
  const areaKey = normalizeAreaKey(area);
  return filteredRecords().filter((record) => normalizeAreaKey(record.area) === areaKey);
}

function areaMatchesFeature(recordArea, featureArea, level = visibleAreaLevel()) {
  const recordKey = normalizeAreaKey(recordArea);
  const featureKey = normalizeAreaKey(featureArea);
  if (!recordKey || !featureKey) return false;
  if (recordKey === featureKey) return true;
  if (level === 'buurten' && subwijkBoundaryAliases(recordArea).some((alias) => normalizeAreaKey(alias) === featureKey)) return true;
  return level === 'buurten' && recordArea.split(',').some((part) => normalizeAreaKey(part) === featureKey);
}

const SUBWIJK_BOUNDARY_MAP = {
  'Abstede, Gansstraat': ['Abstede, Tolsteegsingel e.o.'],
  'Binnenstad city- en winkelgeb': ['Domplein, Neude, Janskerkhof', 'Hoog-Catharijne NS en Jaarbeurs', 'Lange Elisabethstraat, Mariaplaats en omgeving', 'Lange Nieuwstraat en omgeving', 'Nobelstraat en omgeving'],
  'Binnenstad woongebied': ['Breedstraat en Plompetorengracht en omgeving', 'Nieuwegracht-Oost', 'Springweg en omgeving Geertebuurt', 'Wijk C'],
  'De Meern': ['De Meern-Noord', 'De Meern-Zuid'],
  'Dichterswijk, Rivierenwijk': ['Dichterswijk', 'Rivierenwijk'],
  'Het Zand': ['Het Zand-Oost', 'Het Zand-West'],
  Kanaleneiland: ['Bedrijvengebied Kanaleneiland', 'Kanaleneiland-Noord', 'Kanaleneiland-Zuid'],
  'Leidsche Rijn Centrum e.o': ['Grauwaart', 'Leidsche Rijn-Centrum', 'Leeuwesteyn'],
  'Leidsche Rijn-zuid': ['Bedrijvengebied Papendorp', 'Bedrijvengebied Strijkviertel', 'Rijnvliet'],
  'Lombok, Leidseweg': ['Leidseweg en omgeving', 'Lombok-Oost', 'Lombok-West'],
  Lunetten: ['Lunetten-Noord', 'Lunetten-Zuid'],
  'Nieuw Engeland, Schepenbrt': ['Nieuw Engeland, Th. a. Kempisplantsoen en omgeving', 'Schepenbuurt, Cartesiusweg e.o.'],
  'Nieuw Hoograven, Bokkenbrt': ['Bokkenbuurt', 'Nieuw Hoograven-Noord', 'Nieuw Hoograven-Zuid'],
  'Ondiep, 2e Daalsebrt': ['2e Daalsebuurt en omgeving', 'Ondiep'],
  'Oog in Al, Welgelegen': ['Halve Maan-Noord', 'Halve Maan-Zuid', 'Oog in Al', 'Welgelegen, Den Hommel'],
  'Oud Hoograven, Tolsteeg': ['Oud Hoograven-Noord', 'Oud Hoograven-Zuid', 'Tolsteeg en Rotsoord'],
  'Oudwijk, Buiten Wittevrouwen': ['Buiten Wittevrouwen', 'Oudwijk'],
  'Parkwijk, Langerak': ['Langerak', 'Parkwijk-Noord', 'Parkwijk-Zuid'],
  Pijlsweerd: ['Nijenoord, Hoogstraat en omgeving', 'Pijlsweerd-Noord', 'Pijlsweerd-Zuid'],
  Rijnenburg: ['Rijnenburg'],
  'Taagdreef, Wolgadreef': ['Taag- en Rubicondreef en omgeving', 'Wolga- en Donaudreef en omgeving'],
  'Terwijde, De Wetering': ['Bedrijventerrein De Wetering', 'Terwijde-Oost', 'Terwijde-West'],
  Transwijk: ['Transwijk-Noord', 'Transwijk-Zuid'],
  'Tuindorp, Voordorp': ['Tuindorp en Van Lieflandlaan-West', 'Tuindorp-Oost', 'Voordorp en Voorveldsepolder'],
  'Vechtzoom, Klopvaart': ['Vechtzoom-noord, Klopvaart', 'Vechtzoom-zuid'],
  'Veldhuizen, Vleuterweide': ['Veldhuizen', 'Vleuterweide-Noord/Oost/Centrum', 'Vleuterweide-West', 'Vleuterweide-Zuid'],
  'Vleuten, Haarzuilens': ['Haarzuilens en omgeving', 'Vleuten'],
  Votulast: ['Lauwerecht', 'Staatsliedenbuurt', 'Tuinwijk-Oost', 'Tuinwijk-West', 'Vogelenbuurt', 'Watervogelbuurt'],
  'Wilhelminapark, Rijnsweerd': ['Rijnsweerd', 'Wilhelminapark en omgeving'],
  'Wittevrouwen, Zeeheldenbrt': ['Wittevrouwen', 'Zeeheldenbuurt, Hengeveldstraat en omgeving'],
  'Zambesidreef, Tigrisdreef': ['Tigrisdreef en omgeving', 'Zambesidreef en omgeving'],
  'Zamenhofdreef, Neckardreef': ['Neckardreef en omgeving', 'Zamenhofdreef en omgeving'],
  'Zuilen-noord en -oost': ['Elinkwijk en omgeving', 'Zuilen-Noord'],
  'Zuilen-west': ['Geuzenwijk', 'Julianapark en omgeving'],
};

function subwijkBoundaryAliases(area) {
  const areaKey = normalizeAreaKey(area);
  const entry = Object.entries(SUBWIJK_BOUNDARY_MAP).find(([sourceArea]) => normalizeAreaKey(sourceArea) === areaKey);
  return entry ? entry[1] : [];
}

function sourceAreaForFeature(feature) {
  const featureArea = areaFromFeature(feature);
  if (featureAreaLevel(feature) !== 'buurten') return featureArea;
  const featureKey = normalizeAreaKey(featureArea);
  const entry = Object.entries(SUBWIJK_BOUNDARY_MAP).find(([, aliases]) => aliases.some((alias) => normalizeAreaKey(alias) === featureKey));
  return entry ? entry[0] : featureArea;
}

function buildBoundaryRecordIndex(records, level) {
  const index = new Map();
  records.forEach((record) => {
    if (record.level !== level) return;
    const areas = new Set([record.area]);
    if (level === 'buurten') {
      subwijkBoundaryAliases(record.area).forEach((alias) => areas.add(alias));
      record.area.split(',').forEach((part) => areas.add(part));
    }
    areas.forEach((areaName) => {
      const key = normalizeAreaKey(areaName);
      if (!key) return;
      if (!index.has(key)) index.set(key, []);
      index.get(key).push(record);
    });
  });
  return index;
}

function recordsForBoundaryArea(area, boundaryRecordIndex = null) {
  if (boundaryRecordIndex) return boundaryRecordIndex.get(normalizeAreaKey(area)) || [];
  const level = visibleAreaLevel();
  return filteredRecords().filter((record) => record.level === level && areaMatchesFeature(record.area, area, level));
}

function normalizeWijkName(name = '') {
  return name.replace(/^Wijk\s+\d+\s+/i, '').trim();
}

function normalizeAreaKey(name = '') {
  return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function featureAreaLevel(feature) {
  return feature.properties?.__areaLevel || 'wijken';
}

function areaFromFeature(feature) {
  return feature.properties?.__areaName || normalizeWijkName(feature.properties?.wijknaam || feature.properties?.wijkNaam || feature.properties?.buurtnaam || '');
}

function decorateFeatures(features, level) {
  return features.filter((feature) => feature.properties?.gemeentenaam === 'Utrecht').map((feature) => {
    const area = level === 'buurten' ? feature.properties?.buurtnaam : normalizeWijkName(feature.properties?.wijknaam || feature.properties?.wijkNaam || '');
    return { ...feature, properties: { ...feature.properties, __areaLevel: level, __areaName: area } };
  }).filter((feature) => feature.properties.__areaName);
}

function visibleAreaLevel() {
  if (state.areaLevel !== 'auto') return state.areaLevel;
  return state.data.some((record) => record.level === 'buurten' && record.value !== null) ? 'buurten' : 'wijken';
}

function visibleBoundaryFeatures() {
  const level = visibleAreaLevel();
  return level === 'buurten' ? buurtFeatures : wijkFeatures;
}

function areaLevelLabel(level = visibleAreaLevel()) {
  return level === 'buurten' ? 'SUBWIJKEN' : 'WIJKEN';
}

function selectedSummaryArea() {
  const records = state.data.filter((record) => record.value !== null && record.area !== 'Unknown' && record.area !== 'onbekend');
  const query = normalizeAreaKey(state.search);
  if (query) {
    const exactRecord = records.find((record) => normalizeAreaKey(record.area) === query);
    if (exactRecord) return exactRecord.area;
    const exactFeature = boundaryFeatures.find((feature) => [areaFromFeature(feature), sourceAreaForFeature(feature)].some((area) => normalizeAreaKey(area) === query));
    if (exactFeature) return sourceAreaForFeature(exactFeature);
    const matchingAreas = [...new Set(records.filter((record) => normalizeAreaKey(record.area).includes(query)).map((record) => record.area))];
    if (matchingAreas.length === 1) return matchingAreas[0];
    return null;
  }
  if (records.some((record) => normalizeAreaKey(record.area) === 'west')) return 'West';
  if (records.some((record) => normalizeAreaKey(record.area) === 'utrecht')) return 'Utrecht';
  return null;
}

function renderMap() {
  boundaryFeatures = visibleBoundaryFeatures();
  districtFeatures = boundaryFeatures;
  if (!leafletMap || !boundaryFeatures.length) return;
  const level = visibleAreaLevel();
  const boundaryRecordIndex = buildBoundaryRecordIndex(filteredRecords(), level);
  const records = boundaryFeatures.flatMap((feature) => recordsForBoundaryArea(areaFromFeature(feature), boundaryRecordIndex));
  const values = records.map((record) => record.value).filter((value) => typeof value === 'number');
  const minimum = values.length ? Math.min(...values) : 0;
  const maximum = values.length ? Math.max(...values) : 1;
  const collection = { type: 'FeatureCollection', features: boundaryFeatures };
  if (districtLayer) districtLayer.remove();
  districtLayer = L.geoJSON(collection, {
    style: (feature) => {
      const area = areaFromFeature(feature);
      const level = featureAreaLevel(feature);
      const record = getPrimaryRecord(area, boundaryRecordIndex);
      const isDimmed = Boolean(state.search) && !recordsForBoundaryArea(area, boundaryRecordIndex).length;
      if (record) {
        const normalized = maximum === minimum ? .6 : (record.value - minimum) / (maximum - minimum);
        return { color: METRIC_CONFIG[record.group].color, weight: level === 'buurten' ? 1 : 2, fillColor: colorMix(normalized, METRIC_CONFIG[record.group].color), fillOpacity: isDimmed ? .2 : .86, opacity: isDimmed ? .45 : 1 };
      }
      return { color: '#ffffff', weight: level === 'buurten' ? 1 : 2, fillColor: '#dcebe6', fillOpacity: isDimmed ? .08 : .35, opacity: isDimmed ? .35 : .8 };
    },
    onEachFeature: (feature, layer) => {
      const area = areaFromFeature(feature);
      const sourceArea = sourceAreaForFeature(feature);
      const record = getPrimaryRecord(area);
      const boundaryLabel = sourceArea === area ? '' : `<span class="wijk-label-value">${area}</span>`;
      const valueLabel = record ? `<span class="wijk-label-value">${formatValue(record.value, record.unit)} · ${record.indicator}</span>` : '<span class="wijk-label-value">no source value</span>';
      const tooltip = `<span>${sourceArea}</span>${boundaryLabel}${valueLabel}`;
      layer.bindTooltip(tooltip, { permanent: state.labelsVisible, direction: 'center', className: 'wijk-label', opacity: 1 });
      layer.on({
        mouseover: () => layer.setStyle({ weight: featureAreaLevel(feature) === 'buurten' ? 2 : 3, color: '#183d4a' }),
        mouseout: () => districtLayer.resetStyle(layer),
        click: () => selectArea(record?.area || area),
      });
    },
  }).addTo(leafletMap);
  $('#legendTitle').textContent = state.activeLayers.size === 1 ? METRIC_CONFIG[[...state.activeLayers][0]].title : 'Selected layers';
  $('#legendUnit').textContent = state.activeLayers.size === 1 && ['perception', 'intimidation'].some((group) => state.activeLayers.has(group)) ? '%' : 'mixed units';
  const mappedAreas = new Set(records.map((record) => record.area));
  $('#mapStatus').textContent = `${state.year === 'all' ? 'ALL YEARS' : state.year} · ${areaLevelLabel()} · ${mappedAreas.size} AREAS · FILTER VIEW`;
}

function selectArea(area) {
  $('#areaSearch').value = area;
  state.search = area;
  render();
  document.querySelector('.insight-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initializeLeafletMap() {
  if (!window.L) return;
  leafletMap = L.map('utrechtMap', { zoomControl: false, attributionControl: true, scrollWheelZoom: true }).setView([52.0907, 5.1214], 11.25);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(leafletMap);
  Promise.all([WIJK_API_URL, BUURT_API_URL].map((url) => fetch(url).then((response) => {
    if (!response.ok) throw new Error('Unable to load area boundaries');
    return response.json();
  })))
    .then(([wijkCollection, buurtCollection]) => {
      wijkFeatures = decorateFeatures(wijkCollection.features || [], 'wijken');
      buurtFeatures = decorateFeatures(buurtCollection.features || [], 'buurten');
      boundaryFeatures = visibleBoundaryFeatures();
      districtFeatures = boundaryFeatures;
      districtBounds = L.geoJSON({ type: 'FeatureCollection', features: wijkFeatures }).getBounds();
      if (districtBounds.isValid()) leafletMap.fitBounds(districtBounds.pad(.06), { animate: false });
      render();
    })
    .catch(() => { $('#mapStatus').textContent = 'MAP DATA UNAVAILABLE'; });
}

function renderMarkers() {
  // Marker rendering is handled by the geographic wijk polygons.
}

function colorMix(amount, groupColor) {
  const base = [220, 239, 232];
  const target = hexToRgb(groupColor);
  const strength = .18 + amount * .7;
  return `rgb(${base.map((channel, index) => Math.round(channel + (target[index] - channel) * strength)).join(',')})`;
}

function hexToRgb(hex) { return hex.replace('#', '').match(/.{2}/g).map((chunk) => parseInt(chunk, 16)); }

function renderInsights() {
  const grid = $('#insightGrid');
  grid.innerHTML = '';
  const active = [...state.activeLayers];
  const summaryArea = selectedSummaryArea();
  const areaRecords = summaryArea ? recordsForCurrentArea(summaryArea) : [];
  const cards = [];
  active.forEach((group) => {
    const config = METRIC_CONFIG[group];
    const indicators = [...new Set(areaRecords.filter((record) => record.group === group).map((record) => record.indicator))];
    indicators.forEach((indicator) => {
      const current = latestFor(summaryArea, group, indicator);
      if (!current) return;
      const previousYear = state.year === 'all' ? current.year - 1 : Number(state.year) - 1;
      const previous = state.data.find((record) => normalizeAreaKey(record.area) === normalizeAreaKey(summaryArea) && record.group === group && record.indicator === indicator && record.year === previousYear && record.value !== null);
      const delta = previous ? current.value - previous.value : null;
      cards.push({ group, config, current, delta });
    });
  });
  cards.slice(0, 8).forEach(({ group, config, current, delta }) => {
    const card = document.createElement('article'); card.className = 'insight-card'; card.style.setProperty('--card-color', config.color);
    const direction = delta === null ? '' : delta > 0 ? 'up' : delta < 0 ? 'down' : '';
    const trend = delta === null ? 'no prior year' : `${delta > 0 ? '+' : ''}${formatValue(delta, current.unit)} vs ${current.year - 1}`;
    card.innerHTML = `<div class="insight-card-head"><h3>${current.indicator}</h3><span class="card-icon">${config.icon}</span></div><div class="insight-value">${formatValue(current.value, current.unit)}</div><div class="insight-card-footer"><span class="card-source"><span>${config.title}</span><span>${current.unit} · ${current.area}</span></span><span class="trend ${direction}">${trend}</span></div>`;
    grid.appendChild(card);
  });
  if (!cards.length) grid.innerHTML = `<div class="empty-state">${summaryArea ? 'Turn on a layer with data for the selected year.' : 'Search for a wijk or subwijk to see area insights.'}</div>`;
  $('#resultCount').textContent = filteredRecords().length;
  const titleArea = summaryArea || state.search || 'All areas';
  $('#insightTitle').textContent = state.year === 'all' ? `${titleArea} · all years` : `${titleArea} in ${state.year}`;
}

function renderTable() {
  const body = $('#dataTableBody');
  const records = [...filteredRecords({ includeMissing: true })].sort((a, b) => b.year - a.year || a.area.localeCompare(b.area) || a.indicator.localeCompare(b.indicator));
  body.innerHTML = records.map((record) => `<tr><td>${record.area}</td><td>${record.level === 'buurten' ? 'Subwijk' : 'Wijk'}</td><td><span class="table-tag">${record.groupLabel}</span>${record.indicator}</td><td>${record.year}</td><td>${formatValue(record.value, record.unit)}</td><td>${record.source}</td></tr>`).join('');
  $('#emptyState').hidden = records.length > 0;
  $('#tableHint').textContent = `${records.length} active records · — means unavailable in source`;
}

function scheduleTableRender() {
  if (tableRenderTimer !== null) clearTimeout(tableRenderTimer);
  tableRenderTimer = setTimeout(() => {
    tableRenderTimer = null;
    renderTable();
  }, 0);
}

function syncActiveLayers(reset = false) {
  const index = ensureDataIndex();
  const groups = new Set(index.groups);
  const indicators = new Set(index.indicatorKeys);
  if (reset || !state.filtersInitialized) state.activeIndicators = indicators;
  else state.activeIndicators = new Set([...state.activeIndicators].filter((key) => indicators.has(key)));
  state.activeLayers = new Set([...groups].filter((group) => availableIndicators(group).some((indicator) => state.activeIndicators.has(indicatorKey(group, indicator)))));
  state.filtersInitialized = true;
}

function renderLayerList() {
  const groups = availableGroups();
  groups.forEach((group) => {
    if (!state.accordionGroups.has(group)) state.expandedGroups.add(group);
  });
  state.accordionGroups = new Set(groups);
  $('#layerList').innerHTML = groups.map((group) => {
    const config = METRIC_CONFIG[group] || METRIC_CONFIG.crime;
    const indicators = availableIndicators(group);
    const activeIndicators = indicators.filter((indicator) => state.activeIndicators.has(indicatorKey(group, indicator)));
    const allActive = indicators.length > 0 && activeIndicators.length === indicators.length;
    const someActive = activeIndicators.length > 0;
    const indicatorRows = indicators.map((indicator) => {
      const units = [...(ensureDataIndex().unitsByIndicator.get(indicatorKey(group, indicator)) || [])].join(' · ') || 'mixed units';
      const active = state.activeIndicators.has(indicatorKey(group, indicator));
      return `<label class="indicator-toggle${active ? ' is-active' : ''}" data-layer-indicator="${escapeHtml(indicator)}" data-layer-group="${group}"><input type="checkbox"${active ? ' checked' : ''} /><span class="toggle-box"><span></span></span><span class="indicator-copy"><strong>${escapeHtml(indicator)}</strong><small>${escapeHtml(units)}</small></span></label>`;
    }).join('');
    return `<details class="layer-category" data-filter-category="${group}"${state.expandedGroups.has(group) ? ' open' : ''}><summary class="layer-category-summary"><label class="layer-toggle layer-group-toggle${someActive ? ' is-active' : ''}${someActive && !allActive ? ' is-partial' : ''}" data-layer-group="${group}"><input type="checkbox"${allActive ? ' checked' : ''} /><span class="toggle-box"><span></span></span><span class="layer-swatch ${group}" style="background:${config.color}"></span><span class="layer-copy"><strong>${escapeHtml(config.title)}</strong><small>${indicators.length} measures</small></span></label><span class="category-chevron" aria-hidden="true"></span></summary><div class="indicator-list">${indicatorRows}</div></details>`;
  }).join('');
  $('#layerList').querySelectorAll('.layer-group-toggle input').forEach((input) => {
    const group = input.closest('.layer-group-toggle').dataset.layerGroup;
    const indicators = availableIndicators(group);
    const active = indicators.filter((indicator) => state.activeIndicators.has(indicatorKey(group, indicator)));
    input.indeterminate = active.length > 0 && active.length < indicators.length;
  });
}

function syncYearControls() {
  const range = $('#yearRange');
  if (!state.years.length) return;
  const selectedIndex = state.year === 'all' ? state.years.length - 1 : Math.max(0, state.years.indexOf(Number(state.year)));
  range.max = String(state.years.length - 1);
  range.value = String(selectedIndex);
  $('#yearValue').textContent = state.year === 'all' ? 'ALL' : state.years[selectedIndex];
  $('#yearMin').textContent = state.years[0];
  $('#yearMax').textContent = state.years[state.years.length - 1];
  $('#allYears').checked = state.year === 'all';
}

function render() {
  state.filterCache.clear();
  syncActiveLayers();
  renderLayerList();
  syncYearControls();
  renderMap();
  renderInsights();
  scheduleTableRender();
  const totalIndicators = new Set(state.data.map((record) => indicatorKey(record.group, record.indicator))).size;
  $('#activeCount').textContent = `${activeIndicatorCount()} / ${totalIndicators} measures`;
  $('#dataState').textContent = state.dataState;
}

function setGroup(group, isActive) {
  availableIndicators(group).forEach((indicator) => {
    const key = indicatorKey(group, indicator);
    if (isActive) state.activeIndicators.add(key);
    else state.activeIndicators.delete(key);
  });
  render();
}

function setIndicator(group, indicator, isActive) {
  const key = indicatorKey(group, indicator);
  if (isActive) state.activeIndicators.add(key);
  else state.activeIndicators.delete(key);
  render();
}

$('#layerList').addEventListener('click', (event) => {
  const indicatorLabel = event.target.closest('.indicator-toggle');
  if (indicatorLabel) {
    event.preventDefault();
    const group = indicatorLabel.dataset.layerGroup;
    const indicator = indicatorLabel.dataset.layerIndicator;
    setIndicator(group, indicator, !state.activeIndicators.has(indicatorKey(group, indicator)));
    return;
  }
  const groupLabel = event.target.closest('.layer-group-toggle');
  if (!groupLabel) return;
  event.preventDefault();
  const group = groupLabel.dataset.layerGroup;
  const indicators = availableIndicators(group);
  const shouldActivate = !indicators.length || !indicators.every((indicator) => state.activeIndicators.has(indicatorKey(group, indicator)));
  setGroup(group, shouldActivate);
});

$('#layerList').addEventListener('toggle', (event) => {
  const category = event.target.closest('details[data-filter-category]');
  if (!category) return;
  if (category.open) state.expandedGroups.add(category.dataset.filterCategory);
  else state.expandedGroups.delete(category.dataset.filterCategory);
});
$('#yearRange').addEventListener('input', (event) => { state.year = String(state.years[Number(event.target.value)]); $('#allYears').checked = false; render(); });
$('#allYears').addEventListener('change', (event) => { state.year = event.target.checked ? 'all' : String(state.years[state.years.length - 1]); render(); });
$('#areaSearch').addEventListener('input', (event) => { state.search = event.target.value.trim(); render(); });
$('#areaLevelSelect').addEventListener('change', (event) => { state.areaLevel = event.target.value; render(); });
$('#resetFilters').addEventListener('click', () => { state.year = String(state.years[state.years.length - 1] || 2025); state.search = ''; state.areaLevel = 'auto'; syncActiveLayers(true); $('#areaSearch').value = ''; $('#areaLevelSelect').value = state.areaLevel; render(); });
$('#zoomIn').addEventListener('click', () => { if (leafletMap) leafletMap.zoomIn(); });
$('#zoomOut').addEventListener('click', () => { if (leafletMap) leafletMap.zoomOut(); });
$('#resetMap').addEventListener('click', () => { if (leafletMap && districtBounds?.isValid()) leafletMap.fitBounds(districtBounds.pad(.06), { animate: true }); });
$('#toggleLabels').addEventListener('click', (event) => { state.labelsVisible = !state.labelsVisible; event.currentTarget.textContent = state.labelsVisible ? 'Hide labels' : 'Show labels'; renderMap(); });

$('#exportView').addEventListener('click', () => {
  const rows = filteredRecords({ includeMissing: true }); const header = 'Area,Level,Measure,Group,Year,Value,Unit,Source'; const csv = [header, ...rows.map((record) => [record.area, record.level === 'buurten' ? 'Subwijk' : 'Wijk', record.indicator, record.groupLabel, record.year, record.value === null ? '' : record.value, record.unit, record.source].map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(','))].join('\n');
  const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); link.download = 'utrecht-datamap-view.csv'; link.click(); URL.revokeObjectURL(link.href);
});

async function loadBundledData() {
  const files = [
    'Straatintimidatie - Subwijken.csv',
    'Straatintimidatie - wijken.csv',
    'Veiligheidsbeleving  - Subwijken.csv',
    'Veiligheidsbeleving  - Wijken.csv',
    'geluidshinder totaal  - Subwijken.csv',
    'geluidshinder totaal  - Wijken.csv',
    'geweld totaal per 1000 inw+arb - Subwijken.csv',
    'geweld totaal per 1000 inw+arb - Wijken.csv',
  ];
  try {
    const responses = await Promise.all(files.map((file) => fetch(`data/${encodeURIComponent(file)}`)));
    if (responses.some((response) => !response.ok)) throw new Error('Unable to load all bundled CSVs');
    const imported = (await Promise.all(responses.map(async (response, index) => parseCsv(await response.text(), files[index])))).flat();
    const unique = new Map(imported.map((record) => [`${record.level}|${record.group}|${record.indicator}|${record.unit}|${record.year}|${record.area}|${record.value}`, record]));
    if (!unique.size) throw new Error('No readable records');
    state.data = [...unique.values()];
    state.dataState = `${files.length} bundled CSVs · ${state.data.length} records`;
    state.years = [...new Set(state.data.map((record) => record.year))].sort((a, b) => a - b);
    state.year = String(state.years[state.years.length - 1] || 2025);
    syncActiveLayers(true);
    render();
  } catch (error) {
    state.dataState = 'Bundled data unavailable';
    state.years = [...new Set(state.data.map((record) => record.year))].sort((a, b) => a - b);
    syncActiveLayers(true);
    render();
  }
}

render();
initializeLeafletMap();
loadBundledData();