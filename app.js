/**
 * @typedef {Object} DataRecord
 * @property {string} group
 * @property {string} groupLabel
 * @property {string} indicator
 * @property {string} unit
 * @property {number} year
 * @property {string} area
 * @property {number|null} value
 * @property {string} source
 * @property {string} file
 * @property {string} [level]
 */

/** @type {DataRecord[]} */
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

const DEMO_GROUP_LABELS = { crime: 'Criminaliteit', violence: 'Geweld', street: 'Straatcriminaliteit', perception: 'Veiligheidsbeleving' };
DEMO_DATA.forEach((record) => { record.groupLabel = DEMO_GROUP_LABELS[record.group] || record.groupLabel; });

/**
 * @typedef {Object} BoundaryProperties
 * @property {string} [gemeentenaam]
 * @property {string} [wijknaam]
 * @property {string} [wijkNaam]
 * @property {string} [buurtnaam]
 * @property {string} [__areaLevel]
 * @property {string} [__areaName]
 */

/** @typedef {{ properties: BoundaryProperties }} BoundaryFeature */

/**
 * @typedef {Object} LeafletBounds
 * @property {function(): boolean} isValid
 * @property {function(number): LeafletBounds} pad
 */

/**
 * @typedef {Object} LeafletMap
 * @property {function(Array<number>, number, Object=): LeafletMap} setView
 * @property {function(string, function): LeafletMap} on
 * @property {function(): number} getZoom
 * @property {function(): number} getMaxZoom
 * @property {function(): number} getMinZoom
 * @property {function(LeafletBounds, Object=): LeafletMap} fitBounds
 * @property {function(number=, Object=): LeafletMap} zoomIn
 * @property {function(number=, Object=): LeafletMap} zoomOut
 */

/**
 * @typedef {Object} LeafletLayer
 * @property {function(LeafletMap): LeafletLayer} addTo
 * @property {function(): LeafletLayer} remove
 * @property {function(): LeafletBounds} getBounds
 * @property {function(string, Object): LeafletLayer} bindTooltip
 * @property {function(string, function): LeafletLayer} on
 * @property {function(Object): LeafletLayer} setStyle
 * @property {function(LeafletLayer): void} resetStyle
 */

/**
 * @typedef {Object} LeafletGeoJsonOptions
 * @property {function(BoundaryFeature): Object} [style]
 * @property {function(BoundaryFeature, LeafletLayer): void} [onEachFeature]
 */

/**
 * @typedef {Object} LeafletApi
 * @property {function(string, Object): LeafletMap} map
 * @property {function(Object, LeafletGeoJsonOptions=): LeafletLayer} geoJSON
 * @property {function(string, Object): LeafletLayer} tileLayer
 */

const METRIC_CONFIG = {
  intimidation: { color: '#dc7455', title: 'Straatintimidatie', icon: '◌', description: 'Enquêteresultaten over straatintimidatie' },
  perception: { color: '#b66b85', title: 'Veiligheidsbeleving', icon: '◌', description: 'Enquêteresultaten over veiligheid en overlast' },
  crime: { color: '#287d7b', title: 'Criminaliteit', icon: '⌁', indicators: ['Criminaliteit totaal', 'Autokraak', 'Fietsdiefstal', 'Woninginbraken'] },
  violence: { color: '#8d7bb4', title: 'Geweld', icon: '✦', indicators: ['Geweld totaal'] },
  noise: { color: '#e5a74f', title: 'Geluidsoverlast', icon: '))', description: 'Geregistreerde aantallen en waarden voor geluidsoverlast', mapUnit: '‰' },
  street: { color: '#e5a74f', title: 'Straatcriminaliteit', icon: '↗', description: 'Aantallen overvallen en straatroof' },
};

const AVERAGE_GROUPS = new Set(['intimidation', 'perception', 'noise', 'violence']);
const DATA_SOURCE = 'utrecht.incijfers.nl';
const state = { data: DEMO_DATA.map((record) => ({ ...record, groupLabel: METRIC_CONFIG[record.group].title, level: 'wijken', source: DATA_SOURCE })), years: [], year: '2025', search: '', areaLevel: 'buurten', activeLayers: new Set(), activeIndicators: new Set(), aggregateGroups: new Set(), filtersInitialized: false, expandedGroups: new Set(), dataIndex: null, filterCache: new Map(), labelsVisible: false, showAllYears: false };
const WIJK_API_URL = 'https://api.pdok.nl/cbs/wijken-en-buurten-2025/ogc/v1/collections/wijken/items?f=json&limit=100&filter=gemeentenaam%3D%27Utrecht%27';
const BUURT_API_URL = 'https://api.pdok.nl/cbs/wijken-en-buurten-2025/ogc/v1/collections/buurten/items?f=json&limit=200&filter=gemeentenaam%3D%27Utrecht%27';
const UTRECHT_CENTER = [52.0907, 5.1214];
const UTRECHT_ZOOM = 11;
/** @type {LeafletMap | null} */
let leafletMap = null;
/** @type {LeafletLayer | null} */
let districtLayer = null;
/** @type {BoundaryFeature[]} */
let wijkFeatures = [];
/** @type {BoundaryFeature[]} */
let buurtFeatures = [];
/** @type {BoundaryFeature[]} */
let boundaryFeatures = [];
/** @type {LeafletBounds | null} */
let districtBounds = null;
let tableRenderTimer = null;
/** @type {LeafletApi | undefined} */
const leaflet = globalThis['L'];

const elements = {
  activeCount: document.querySelector('#activeCount'),
  areaLevelSelect: document.querySelector('#areaLevelSelect'),
  areaSearch: document.querySelector('#areaSearch'),
  dataTableBody: document.querySelector('#dataTableBody'),
  emptyState: document.querySelector('#emptyState'),
  exportView: document.querySelector('#exportView'),
  layerList: document.querySelector('#layerList'),
  legendGradient: document.querySelector('#mapLegend .legend-gradient'),
  legendMax: document.querySelector('#legendMax'),
  legendMin: document.querySelector('#legendMin'),
  legendTitle: document.querySelector('#legendTitle'),
  legendUnit: document.querySelector('#legendUnit'),
  mapStatus: document.querySelector('#mapStatus'),
  resetFilters: document.querySelector('#resetFilters'),
  resetMap: document.querySelector('#resetMap'),
  showAllYears: document.querySelector('#showAllYears'),
  tableHint: document.querySelector('#tableHint'),
  toggleLabels: document.querySelector('#toggleLabels'),
  yearMax: document.querySelector('#yearMax'),
  yearMin: document.querySelector('#yearMin'),
  yearRange: document.querySelector('#yearRange'),
  yearValue: document.querySelector('#yearValue'),
  zoomIn: document.querySelector('#zoomIn'),
  zoomOut: document.querySelector('#zoomOut'),
};

function formatValue(value, unit = '') {
  if (value === null || value === undefined || Number.isNaN(value)) return '—';
  const maximumDecimals = unit === '%' ? 1 : value % 1 === 0 ? 0 : 1;
  const suffix = unit && unit !== 'aantal' ? unit : '';
  return `${new Intl.NumberFormat('nl-NL', { maximumFractionDigits: maximumDecimals }).format(value)}${suffix}`;
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
  const match = value.replace(/^\uFEFF/, '').trim().match(/^(.*?)(?:\s*\[(\d{4})]|\|(\d{4}))\s*$/);
  return match ? { label: match[1].trim(), year: Number(match[2] || match[3]) } : null;
}

function inferLevel(fileName, title = '') {
  return /subwijken?/i.test(`${fileName} ${title}`) ? 'buurten' : 'wijken';
}

function metricUnit(label, value = '') {
  if (/%/.test(label) || /%\s*$/.test(value.trim())) return '%';
  if (/\[aantal]/i.test(label) || /^aantal$/i.test(label.trim())) return 'aantal';
  if (/promillage|per\s+1000/i.test(label)) return '‰';
  return '';
}

function metricLabel(label, fallback = '') {
  const cleaned = label.replace(/^%\s*/, '').replace(/\s*\[(?:aantal|promillage|percentage|%)]\s*$/i, '').trim();
  if (!cleaned || /^aantal$/i.test(cleaned)) return fallback;
  if (/^per\s+1000\s+inw\+arb$/i.test(cleaned)) return `${fallback} per 1000 inw+arb`;
  return cleaned;
}

/** @returns {DataRecord} */
function makeRecord({ indicator, tile, unit, year, area, value, file, level }) {
  const group = classifyIndicator(indicator, `${tile} ${file}`);
  return { group, groupLabel: METRIC_CONFIG[group].title, indicator: prettifyIndicator(indicator), unit, year, area: area.trim() || 'onbekend', value: parseDutchNumber(value), source: DATA_SOURCE, file, level };
}

function parseCsv(text, fileName) {
  /** @type {string[][]} */
  const rows = [];
  /** @type {string[]} */
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
  /** @type {DataRecord[]} */
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

/** @returns {DataRecord[]} */
function filteredRecords({ includeUnknown = false, includeMissing = false, allYears = false } = {}) {
  ensureDataIndex();
  const activeKey = [...state.activeIndicators].sort().join('\u001f');
  const cacheKey = `${state.year}\u001f${state.search}\u001f${includeUnknown ? 1 : 0}\u001f${includeMissing ? 1 : 0}\u001f${allYears ? 1 : 0}\u001f${activeKey}`;
  if (state.filterCache.has(cacheKey)) return state.filterCache.get(cacheKey);
  const searchKey = normalizeAreaKey(state.search);
  const records = state.data.filter((record) => {
    const matchesYear = allYears || record.year === Number(state.year);
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

function filterUnitLabel(units) {
  return units.filter((unit) => unit !== '%').join(' · ');
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

/**
 * @param {string} area
 * @param {string} group
 * @param {DataRecord[]} records
 * @param {number|string} [displayYear=state.year]
 * @param {boolean} [matchArea=true]
 * @returns {DataRecord|null}
 */
function averageRecordFor(area, group, records, displayYear = state.year, matchArea = true) {
  const areaKey = normalizeAreaKey(area);
  const candidates = records.filter((record) => (!matchArea || normalizeAreaKey(record.area) === areaKey) && record.group === group && record.value !== null);
  if (!candidates.length) return null;
  const year = Number(displayYear);
  const yearRecords = candidates.filter((record) => record.year === year);
  if (!yearRecords.length) return null;
  const units = [...new Set(yearRecords.map((record) => record.unit).filter(Boolean))];
  const unit = units.length === 1 ? units[0] : METRIC_CONFIG[group]?.mapUnit;
  const comparable = yearRecords.filter((record) => record.unit === unit);
  if (!unit || !comparable.length) return null;
  const value = comparable.reduce((total, record) => total + record.value, 0) / comparable.length;
  const source = comparable[0];
  return { ...source, indicator: `Gemiddelde ${METRIC_CONFIG[group].title.toLowerCase()}`, value, year, aggregate: true, averagedIndicators: new Set(comparable.map((record) => record.indicator)).size };
}

function previousRecordFor(area, group, indicator, currentYear, level) {
  const areaKey = normalizeAreaKey(area);
  return state.data
    .filter((record) => normalizeAreaKey(record.area) === areaKey && record.level === level && record.group === group && record.indicator === indicator && record.year < currentYear && record.value !== null)
    .sort((first, second) => second.year - first.year)[0] || null;
}

function isAggregateGroup(group) {
  return AVERAGE_GROUPS.has(group) && state.aggregateGroups.has(group);
}

function mapLegendUnit(group) {
  if (isAggregateGroup(group) && METRIC_CONFIG[group]?.mapUnit) return METRIC_CONFIG[group].mapUnit;
  const units = new Set(availableIndicators(group).flatMap((indicator) => [...(ensureDataIndex().unitsByIndicator.get(indicatorKey(group, indicator)) || [])]));
  return units.size === 1 ? [...units][0] : 'gemengde eenheden';
}

function getPrimaryRecord(area, boundaryRecordIndex) {
  const priority = ['perception', 'intimidation', 'crime', 'violence', 'noise', 'street'];
  const available = recordsForBoundaryArea(area, boundaryRecordIndex);
  for (const group of priority) {
    if (!state.activeLayers.has(group)) continue;
    if (isAggregateGroup(group)) {
      const average = averageRecordFor(area, group, available, state.year, false);
      if (average) return average;
      continue;
    }
    const record = available.filter((candidate) => candidate.group === group).sort((a, b) => b.year - a.year)[0];
    if (record) return record;
  }
  return null;
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

/**
 * @param {DataRecord[]} records
 * @param {string} level
 * @returns {Map<string, DataRecord[]>}
 */
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

/** @returns {DataRecord[]} */
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

/** @param {BoundaryFeature} feature */
function featureAreaLevel(feature) {
  return feature.properties?.__areaLevel || 'wijken';
}

/** @param {BoundaryFeature} feature */
function areaFromFeature(feature) {
  return feature.properties?.__areaName || normalizeWijkName(feature.properties?.wijknaam || feature.properties?.wijkNaam || feature.properties?.buurtnaam || '');
}

/**
 * @param {BoundaryFeature[]} features
 * @param {string} level
 * @returns {BoundaryFeature[]}
 */
function decorateFeatures(features, level) {
  return features.filter((feature) => feature.properties?.gemeentenaam === 'Utrecht').map((feature) => {
    const area = level === 'buurten' ? feature.properties?.buurtnaam : normalizeWijkName(feature.properties?.wijknaam || feature.properties?.wijkNaam || '');
    return { ...feature, properties: { ...feature.properties, __areaLevel: level, __areaName: area } };
  }).filter((feature) => feature.properties.__areaName);
}

function visibleAreaLevel() {
  return state.areaLevel;
}

function visibleBoundaryFeatures() {
  const level = visibleAreaLevel();
  return level === 'buurten' ? buurtFeatures : wijkFeatures;
}

function areaLevelLabel(level = visibleAreaLevel()) {
  return level === 'buurten' ? 'SUBWIJKEN' : 'WIJKEN';
}

function renderMap() {
  boundaryFeatures = visibleBoundaryFeatures();
  if (!leafletMap || !boundaryFeatures.length) return;
  const level = visibleAreaLevel();
  const boundaryRecordIndex = buildBoundaryRecordIndex(filteredRecords(), level);
  const records = boundaryFeatures.flatMap((feature) => recordsForBoundaryArea(areaFromFeature(feature), boundaryRecordIndex));
  const displayedRecords = boundaryFeatures.map((feature) => getPrimaryRecord(areaFromFeature(feature), boundaryRecordIndex)).filter(Boolean);
  const colorScales = buildMapColorScales(displayedRecords);
  /** @type {{ type: string, features: BoundaryFeature[] }} */
  const collection = { type: 'FeatureCollection', features: boundaryFeatures };
  if (districtLayer) districtLayer.remove();
  districtLayer = leaflet.geoJSON(collection, {
    style: (feature) => {
      const area = areaFromFeature(feature);
      const level = featureAreaLevel(feature);
      const record = getPrimaryRecord(area, boundaryRecordIndex);
      const isDimmed = Boolean(state.search) && !recordsForBoundaryArea(area, boundaryRecordIndex).length;
      if (record) {
        const normalized = normalizeMapValue(record.value, colorScales.get(record.group));
        return { color: METRIC_CONFIG[record.group].color, weight: level === 'buurten' ? 1 : 2, fillColor: colorMix(normalized, METRIC_CONFIG[record.group].color), fillOpacity: isDimmed ? .2 : .86, opacity: isDimmed ? .45 : 1 };
      }
      return { color: '#ffffff', weight: level === 'buurten' ? 1 : 2, fillColor: '#dcebe6', fillOpacity: isDimmed ? .08 : .35, opacity: isDimmed ? .35 : .8 };
    },
    onEachFeature: (feature, layer) => {
      const area = areaFromFeature(feature);
      const sourceArea = sourceAreaForFeature(feature);
      const record = getPrimaryRecord(area, boundaryRecordIndex);
      const boundaryLabel = sourceArea === area ? '' : `<span class="wijk-label-value">${area}</span>`;
      const valueLabel = record ? `<span class="wijk-label-value">${formatValue(record.value, record.unit)} · ${record.indicator}</span>` : '<span class="wijk-label-value">geen bronwaarde</span>';
      const tooltip = `<span>${sourceArea}</span>${boundaryLabel}${valueLabel}`;
      layer.bindTooltip(tooltip, { permanent: state.labelsVisible, direction: 'center', className: 'wijk-label', opacity: 1 });
      layer.on('mouseover', () => layer.setStyle({ weight: featureAreaLevel(feature) === 'buurten' ? 2 : 3, color: '#183d4a' }));
      layer.on('mouseout', () => districtLayer.resetStyle(layer));
      layer.on('click', () => selectArea(record?.area || area));
    },
  }).addTo(leafletMap);
  const legendGroup = state.activeLayers.size === 1 ? [...state.activeLayers][0] : null;
  const legendScale = legendGroup ? colorScales.get(legendGroup) : null;
  elements.legendTitle.textContent = legendGroup ? METRIC_CONFIG[legendGroup].title : 'Geselecteerde lagen';
  elements.legendUnit.textContent = legendGroup ? mapLegendUnit(legendGroup) : 'gemengde eenheden';
  elements.legendMin.textContent = legendScale ? formatValue(legendScale.minimum, legendScale.unit) : 'lager';
  elements.legendMax.textContent = legendScale ? formatValue(legendScale.maximum, legendScale.unit) : 'hoger';
  elements.legendGradient.style.background = legendGroup
    ? `linear-gradient(90deg, ${colorMix(0, METRIC_CONFIG[legendGroup].color)}, ${colorMix(1, METRIC_CONFIG[legendGroup].color)})`
    : '';
  const mappedAreas = new Set(records.map((record) => record.area));
  elements.mapStatus.textContent = `${state.year} · ${areaLevelLabel()} · ${mappedAreas.size} GEBIEDEN · FILTERWEERGAVE`;
}

function selectArea(area) {
  elements.areaSearch.value = area;
  state.search = area;
  render();
  document.querySelector('.table-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initializeLeafletMap() {
  if (!leaflet) return;
  leafletMap = leaflet.map('utrechtMap', { zoomControl: false, attributionControl: true, scrollWheelZoom: true }).setView(UTRECHT_CENTER, UTRECHT_ZOOM);
  leafletMap.on('zoomend', updateMapControls);
  updateMapControls();
  leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(leafletMap);
  Promise.all([WIJK_API_URL, BUURT_API_URL].map((url) => fetch(url).then((response) => {
    return response.ok ? response.json() : null;
  })))
    .then(([wijkCollection, buurtCollection]) => {
      if (!wijkCollection || !buurtCollection) {
        elements.mapStatus.textContent = 'KAARTGEGEVENS NIET BESCHIKBAAR';
        return;
      }
      wijkFeatures = decorateFeatures(wijkCollection.features || [], 'wijken');
      buurtFeatures = decorateFeatures(buurtCollection.features || [], 'buurten');
      boundaryFeatures = visibleBoundaryFeatures();
      districtBounds = leaflet.geoJSON({ type: 'FeatureCollection', features: wijkFeatures }).getBounds();
      if (districtBounds.isValid()) leafletMap.fitBounds(districtBounds.pad(.06), { animate: false });
      updateMapControls();
      render();
    })
    .catch(() => { elements.mapStatus.textContent = 'KAARTGEGEVENS NIET BESCHIKBAAR'; });
}

function updateMapControls() {
  const isReady = Boolean(leafletMap);
  elements.zoomIn.disabled = !isReady || leafletMap.getZoom() >= leafletMap.getMaxZoom();
  elements.zoomOut.disabled = !isReady || leafletMap.getZoom() <= leafletMap.getMinZoom();
  elements.resetMap.disabled = !isReady;
}

function centerMap() {
  if (!leafletMap) return;
  if (districtBounds?.isValid()) leafletMap.fitBounds(districtBounds.pad(.06), { animate: true });
  else leafletMap.setView(UTRECHT_CENTER, UTRECHT_ZOOM, { animate: true });
}

/** @param {DataRecord[]} records */
function buildMapColorScales(records) {
  /** @type {Map<string, number[]>} */
  const valuesByGroup = new Map();
  /** @type {Map<string, Set<string>>} */
  const unitsByGroup = new Map();
  records.forEach((record) => {
    if (!Number.isFinite(record.value)) return;
    if (!valuesByGroup.has(record.group)) valuesByGroup.set(record.group, []);
    if (!unitsByGroup.has(record.group)) unitsByGroup.set(record.group, new Set());
    valuesByGroup.get(record.group).push(record.value);
    if (record.unit) unitsByGroup.get(record.group).add(record.unit);
  });
  return new Map([...valuesByGroup].map(([group, values]) => {
    const units = [...unitsByGroup.get(group)];
    return [group, { minimum: Math.min(...values), maximum: Math.max(...values), unit: units.length === 1 ? units[0] : '' }];
  }));
}

function normalizeMapValue(value, scale) {
  if (!scale || !Number.isFinite(value)) return .5;
  if (scale.maximum === scale.minimum) return .6;
  return Math.max(0, Math.min(1, (value - scale.minimum) / (scale.maximum - scale.minimum)));
}

function colorMix(amount, groupColor) {
  /** @type {number[]} */
  const base = [220, 239, 232];
  const target = hexToRgb(groupColor);
  const strength = .1 + Math.max(0, Math.min(1, amount)) * .82;
  return `rgb(${base.map((channel, index) => Math.round(channel + (target[index] - channel) * strength)).join(',')})`;
}

function hexToRgb(hex) {
  const normalized = hex.replace('#', '');
  /** @type {number[]} */
  const channels = [];
  for (let index = 0; index < normalized.length; index += 2) channels.push(parseInt(normalized.slice(index, index + 2), 16));
  return channels;
}

function yearChangeFor(record) {
  if (record.value === null) return null;
  const previous = previousRecordFor(record.area, record.group, record.indicator, record.year, record.level);
  return previous ? { value: record.value - previous.value, year: previous.year } : null;
}

function yearChangeLabel(record) {
  const change = yearChangeFor(record);
  if (!change) return '—';
  const direction = change.value > 0 ? '+' : '';
  const tone = change.value > 0 ? 'positive' : change.value < 0 ? 'negative' : 'neutral';
  return `<span class="table-change ${tone}">${direction}${formatValue(change.value, record.unit)} <small>t.o.v. ${change.year}</small></span>`;
}

function renderFallbackData() {
  state.years = [...new Set(state.data.map((record) => record.year))].sort((a, b) => a - b);
  syncActiveLayers();
  render();
}

function renderTable() {
  const body = elements.dataTableBody;
  const records = [...filteredRecords({ includeMissing: true, allYears: state.showAllYears })].sort((a, b) => b.year - a.year || a.area.localeCompare(b.area) || a.indicator.localeCompare(b.indicator));
  body.innerHTML = records.map((record) => `<tr><td>${record.area}</td><td>${record.level === 'buurten' ? 'Subwijk' : 'Wijk'}</td><td><span class="table-tag">${METRIC_CONFIG[record.group]?.title || record.groupLabel}</span>${record.indicator}</td><td>${record.year}</td><td>${formatValue(record.value, record.unit)}</td><td>${yearChangeLabel(record)}</td><td>${record.source}</td></tr>`).join('');
  elements.emptyState.hidden = records.length > 0;
  const yearHint = state.showAllYears ? 'alle jaren' : state.year;
  elements.tableHint.textContent = `${records.length} actieve records • ${yearHint} • — betekent niet beschikbaar in de bron`;
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
  if (reset) {
    state.activeIndicators = indicators;
    state.aggregateGroups = new Set([...groups].filter((group) => AVERAGE_GROUPS.has(group)));
  }
  else if (!state.filtersInitialized) state.activeIndicators = new Set();
  else state.activeIndicators = new Set([...state.activeIndicators].filter((key) => indicators.has(key)));
  state.activeLayers = new Set([...groups].filter((group) => availableIndicators(group).some((indicator) => state.activeIndicators.has(indicatorKey(group, indicator)))));
  state.aggregateGroups = new Set([...state.aggregateGroups].filter((group) => state.activeLayers.has(group) && AVERAGE_GROUPS.has(group)));
  state.filtersInitialized = true;
}

function renderLayerList() {
  elements.layerList.querySelectorAll('details[data-filter-category]').forEach((category) => {
    if (category.open) state.expandedGroups.add(category.dataset.filterCategory);
    else state.expandedGroups.delete(category.dataset.filterCategory);
  });
  const groups = availableGroups();
  elements.layerList.innerHTML = groups.map((group) => {
    const config = METRIC_CONFIG[group] || METRIC_CONFIG.crime;
    const indicators = availableIndicators(group);
    const activeIndicators = indicators.filter((indicator) => state.activeIndicators.has(indicatorKey(group, indicator)));
    const allActive = indicators.length > 0 && activeIndicators.length === indicators.length;
    const someActive = activeIndicators.length > 0;
    const averageLabel = isAggregateGroup(group) ? ' · gemiddelde' : '';
    const indicatorRows = indicators.map((indicator) => {
      const units = filterUnitLabel([...(ensureDataIndex().unitsByIndicator.get(indicatorKey(group, indicator)) || [])]);
      const active = state.activeIndicators.has(indicatorKey(group, indicator));
      return `<label class="indicator-toggle${active ? ' is-active' : ''}" data-layer-indicator="${escapeHtml(indicator)}" data-layer-group="${group}"><input type="checkbox"${active ? ' checked' : ''} /><span class="toggle-box"><span></span></span><span class="indicator-copy"><strong>${escapeHtml(indicator)}</strong><small>${escapeHtml(units)}</small></span></label>`;
    }).join('');
    return `<details class="layer-category" data-filter-category="${group}"${state.expandedGroups.has(group) ? ' open' : ''}><summary class="layer-category-summary"><label class="layer-toggle layer-group-toggle${someActive ? ' is-active' : ''}${someActive && !allActive ? ' is-partial' : ''}" data-layer-group="${group}"><input type="checkbox"${allActive ? ' checked' : ''} /><span class="toggle-box"><span></span></span><span class="layer-swatch ${group}" style="background:${config.color}"></span><span class="layer-copy"><strong>${escapeHtml(config.title)}</strong><small>${indicators.length} indicatoren${averageLabel}</small></span></label><span class="category-chevron" aria-hidden="true"></span></summary><div class="indicator-list">${indicatorRows}</div></details>`;
  }).join('');
  elements.layerList.querySelectorAll('.layer-group-toggle input').forEach((input) => {
    const group = input.closest('.layer-group-toggle').dataset.layerGroup;
    const indicators = availableIndicators(group);
    const active = indicators.filter((indicator) => state.activeIndicators.has(indicatorKey(group, indicator)));
    input.indeterminate = active.length > 0 && active.length < indicators.length;
  });
}

function syncYearControls() {
  const range = elements.yearRange;
  if (!state.years.length) return;
  const selectedIndex = Math.max(0, state.years.indexOf(Number(state.year)));
  range.max = String(state.years.length - 1);
  range.value = String(selectedIndex);
  elements.yearValue.textContent = state.years[selectedIndex];
  elements.yearMin.textContent = state.years[0];
  elements.yearMax.textContent = state.years[state.years.length - 1];
}

function syncYearToAvailableData() {
  if (!state.activeIndicators.size) return;
  const level = visibleAreaLevel();
  const availableYears = new Set(state.data
    .filter((record) => record.level === level && state.activeIndicators.has(indicatorKey(record.group, record.indicator)) && record.value !== null)
    .map((record) => record.year));
  if (availableYears.has(Number(state.year))) return;
  const firstAvailableYear = state.years.find((year) => availableYears.has(year));
  if (firstAvailableYear !== undefined) state.year = String(firstAvailableYear);
}

function render(syncYear = false) {
  state.filterCache.clear();
  syncActiveLayers();
  if (syncYear) syncYearToAvailableData();
  renderLayerList();
  syncYearControls();
  renderMap();
  scheduleTableRender();
  const totalIndicators = new Set(state.data.map((record) => indicatorKey(record.group, record.indicator))).size;
  elements.activeCount.textContent = `${activeIndicatorCount()} / ${totalIndicators} indicatoren`;
}

function setGroup(group, isActive) {
  if (isActive && AVERAGE_GROUPS.has(group)) state.aggregateGroups.add(group);
  else state.aggregateGroups.delete(group);
  availableIndicators(group).forEach((indicator) => {
    const key = indicatorKey(group, indicator);
    if (isActive) state.activeIndicators.add(key);
    else state.activeIndicators.delete(key);
  });
  render(isActive);
}

function setIndicator(group, indicator, isActive) {
  state.aggregateGroups.delete(group);
  const key = indicatorKey(group, indicator);
  if (isActive) state.activeIndicators.add(key);
  else state.activeIndicators.delete(key);
  render(isActive);
}

elements.layerList.addEventListener('click', (event) => {
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

elements.layerList.addEventListener('toggle', (event) => {
  const category = event.target.closest('details[data-filter-category]');
  if (!category) return;
  if (category.open) state.expandedGroups.add(category.dataset.filterCategory);
  else state.expandedGroups.delete(category.dataset.filterCategory);
});
elements.yearRange.addEventListener('input', (event) => { state.year = String(state.years[Number(event.target.value)]); render(); });
elements.areaSearch.addEventListener('input', (event) => { state.search = event.target.value.trim(); render(); });
elements.areaLevelSelect.addEventListener('change', (event) => { state.areaLevel = event.target.value; render(); });
elements.showAllYears.addEventListener('change', (event) => { state.showAllYears = event.currentTarget.checked; renderTable(); });
elements.resetFilters.addEventListener('click', () => { state.year = String(state.years[state.years.length - 1] || 2025); state.search = ''; state.areaLevel = 'buurten'; state.activeIndicators = new Set(); state.activeLayers = new Set(); state.aggregateGroups = new Set(); elements.areaSearch.value = ''; elements.areaLevelSelect.value = state.areaLevel; render(); });
elements.zoomIn.addEventListener('click', () => { if (leafletMap) leafletMap.zoomIn(1, { animate: true }); });
elements.zoomOut.addEventListener('click', () => { if (leafletMap) leafletMap.zoomOut(1, { animate: true }); });
elements.resetMap.addEventListener('click', centerMap);
elements.toggleLabels.addEventListener('click', (event) => { state.labelsVisible = !state.labelsVisible; event.currentTarget.textContent = state.labelsVisible ? 'Labels verbergen' : 'Labels tonen'; renderMap(); });

elements.exportView.addEventListener('click', () => {
  const rows = filteredRecords({ includeMissing: true, allYears: state.showAllYears }); const header = 'Gebied,Niveau,Indicator,Categorie,Jaar,Waarde,Eenheid,Stijging t.o.v. vorig jaar,Bron'; const csv = [header, ...rows.map((record) => { const change = yearChangeFor(record); const changeLabel = change ? `${change.value > 0 ? '+' : ''}${formatValue(change.value, record.unit)} t.o.v. ${change.year}` : ''; return [record.area, record.level === 'buurten' ? 'Subwijk' : 'Wijk', record.indicator, METRIC_CONFIG[record.group]?.title || record.groupLabel, record.year, record.value === null ? '' : record.value, record.unit, changeLabel, record.source].map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(','); })].join('\n');
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
    if (responses.some((response) => !response.ok)) {
      renderFallbackData();
      return;
    }
    const imported = (await Promise.all(responses.map(async (response, index) => parseCsv(await response.text(), files[index])))).flat();
    const unique = new Map(imported.map((record) => [`${record.level}|${record.group}|${record.indicator}|${record.unit}|${record.year}|${record.area}|${record.value}`, record]));
    if (!unique.size) {
      renderFallbackData();
      return;
    }
    state.data = [...unique.values()];
    state.years = [...new Set(state.data.map((record) => record.year))].sort((a, b) => a - b);
    state.year = String(state.years[state.years.length - 1] || 2025);
    syncActiveLayers();
    render();
  } catch {
    renderFallbackData();
  }
}

render();
initializeLeafletMap();
void loadBundledData();