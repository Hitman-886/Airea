const TREE_DATA = [
  {
    id: "neem",
    name: "Neem",
    scientific: "Azadirachta indica",
    co2KgYear: 22,
    oxygenKgYear: 118,
    pm25KgYear: 0.09,
    notes: "Hardy evergreen shade tree, common in South Asia and useful for hot, dry urban streets."
  },
  {
    id: "peepal",
    name: "Peepal / Sacred fig",
    scientific: "Ficus religiosa",
    co2KgYear: 32,
    oxygenKgYear: 170,
    pm25KgYear: 0.16,
    notes: "Large-canopy fig with strong shade value; best where roots and canopy have generous space."
  },
  {
    id: "banyan",
    name: "Banyan",
    scientific: "Ficus benghalensis",
    co2KgYear: 45,
    oxygenKgYear: 240,
    pm25KgYear: 0.22,
    notes: "Very large long-lived canopy tree; powerful air-benefit potential but needs park-scale space."
  },
  {
    id: "mango",
    name: "Mango",
    scientific: "Mangifera indica",
    co2KgYear: 24,
    oxygenKgYear: 128,
    pm25KgYear: 0.1,
    notes: "Broad-leaved fruit tree that performs well in tropical and subtropical climates."
  },
  {
    id: "rain-tree",
    name: "Rain tree",
    scientific: "Samanea saman",
    co2KgYear: 38,
    oxygenKgYear: 203,
    pm25KgYear: 0.19,
    notes: "Wide umbrella canopy, excellent for shade corridors where enough horizontal room exists."
  },
  {
    id: "ashoka",
    name: "Indian mast tree",
    scientific: "Monoon longifolium",
    co2KgYear: 13,
    oxygenKgYear: 69,
    pm25KgYear: 0.05,
    notes: "Narrow ornamental evergreen often used where streets are tight and vertical form matters."
  },
  {
    id: "oak",
    name: "Oak",
    scientific: "Quercus species",
    co2KgYear: 28,
    oxygenKgYear: 149,
    pm25KgYear: 0.14,
    notes: "High-canopy temperate tree with strong carbon storage and wildlife value."
  },
  {
    id: "maple",
    name: "Maple",
    scientific: "Acer species",
    co2KgYear: 23,
    oxygenKgYear: 122,
    pm25KgYear: 0.11,
    notes: "Reliable temperate street tree group with dense seasonal canopy."
  },
  {
    id: "pine",
    name: "Pine",
    scientific: "Pinus species",
    co2KgYear: 21,
    oxygenKgYear: 112,
    pm25KgYear: 0.08,
    notes: "Evergreen conifer; useful where year-round cover is suitable and fire risk is managed."
  },
  {
    id: "eucalyptus",
    name: "Eucalyptus",
    scientific: "Eucalyptus species",
    co2KgYear: 30,
    oxygenKgYear: 160,
    pm25KgYear: 0.1,
    notes: "Fast-growing tree with high biomass gain; choose carefully because water use and fire behavior vary by species."
  },
  {
    id: "teak",
    name: "Teak",
    scientific: "Tectona grandis",
    co2KgYear: 26,
    oxygenKgYear: 139,
    pm25KgYear: 0.1,
    notes: "Large tropical deciduous tree suited to warm regions and open planting sites."
  },
  {
    id: "gulmohar",
    name: "Gulmohar / Flame tree",
    scientific: "Delonix regia",
    co2KgYear: 18,
    oxygenKgYear: 96,
    pm25KgYear: 0.08,
    notes: "Flowering shade tree with a spreading crown; best for avenues, campuses, and open verges."
  }
];

const PM25_AQI_BREAKPOINTS = [
  [0, 12, 0, 50],
  [12.1, 35.4, 51, 100],
  [35.5, 55.4, 101, 150],
  [55.5, 150.4, 151, 200],
  [150.5, 250.4, 201, 300],
  [250.5, 350.4, 301, 400],
  [350.5, 500.4, 401, 500]
];

const GROWTH_STAGES = {
  sapling: {
    label: "Sapling start",
    multiplier: 0.18,
    summary: "Sapling start uses 18% of mature annual benefits while the roots establish."
  },
  young: {
    label: "Young tree",
    multiplier: 0.55,
    summary: "Young tree mode uses 55% of mature annual benefits for an expanding canopy."
  },
  mature: {
    label: "Mature canopy",
    multiplier: 1,
    summary: "Mature canopy mode uses full annual air-benefit values."
  }
};

const els = {
  leafField: document.querySelector("#leaf-field"),
  heroLocation: document.querySelector("#hero-location"),
  heroTemp: document.querySelector("#hero-temp"),
  search: document.querySelector("#city-search"),
  searchButton: document.querySelector("#search-button"),
  results: document.querySelector("#location-results"),
  treeSelect: document.querySelector("#tree-select"),
  growthStage: document.querySelector("#growth-stage"),
  targetAqi: document.querySelector("#target-aqi"),
  areaSize: document.querySelector("#area-size"),
  mixingHeight: document.querySelector("#mixing-height"),
  aqiCard: document.querySelector(".aqi-card"),
  aqiValue: document.querySelector("#aqi-value"),
  aqiStatus: document.querySelector("#aqi-status"),
  treesNeeded: document.querySelector("#trees-needed"),
  treeSummary: document.querySelector("#tree-summary"),
  pm25Value: document.querySelector("#pm25-value"),
  temperatureValue: document.querySelector("#temperature-value"),
  weatherSummary: document.querySelector("#weather-summary"),
  pm10Value: document.querySelector("#pm10-value"),
  no2Value: document.querySelector("#no2-value"),
  ozoneValue: document.querySelector("#ozone-value"),
  coValue: document.querySelector("#co-value"),
  chartPm25: document.querySelector("#chart-pm25"),
  chartPm10: document.querySelector("#chart-pm10"),
  chartNo2: document.querySelector("#chart-no2"),
  chartOzone: document.querySelector("#chart-ozone"),
  chartCo: document.querySelector("#chart-co"),
  barPm25: document.querySelector("#bar-pm25"),
  barPm10: document.querySelector("#bar-pm10"),
  barNo2: document.querySelector("#bar-no2"),
  barOzone: document.querySelector("#bar-ozone"),
  barCo: document.querySelector("#bar-co"),
  treeName: document.querySelector("#tree-name"),
  treeNotes: document.querySelector("#tree-notes"),
  co2Absorbed: document.querySelector("#co2-absorbed"),
  oxygenProduced: document.querySelector("#oxygen-produced"),
  pm25Removed: document.querySelector("#pm25-removed"),
  locationTitle: document.querySelector("#location-title"),
  estimateNote: document.querySelector("#estimate-note"),
  saplingSummary: document.querySelector("#sapling-summary")
};

let latestAir = null;
let latestWeather = null;
let searchTimer = null;

function init() {
  createLeafField();

  TREE_DATA.forEach((tree) => {
    const option = document.createElement("option");
    option.value = tree.id;
    option.textContent = `${tree.name} (${tree.scientific})`;
    els.treeSelect.append(option);
  });

  updateTreeDetails();
  updateSaplingStage();
  bindEvents();
}

function createLeafField() {
  if (!els.leafField) return;

  const fragmentCount = window.matchMedia("(max-width: 720px)").matches ? 50 : 94;
  const colors = [
    ["#f7c7ce", "#b65262"],
    ["#ffd7df", "#d75f7b"],
    ["#f4dfad", "#ba7a36"],
    ["#b7e98a", "#4f9a46"]
  ];

  els.leafField.innerHTML = "";
  for (let index = 0; index < fragmentCount; index += 1) {
    const leaf = document.createElement("span");
    const [light, dark] = colors[index % colors.length];
    leaf.className = "leaf-fragment";
    leaf.style.setProperty("--x", `${Math.random() * 100}vw`);
    leaf.style.setProperty("--size", `${7 + Math.random() * 22}px`);
    leaf.style.setProperty("--duration", `${16 + Math.random() * 22}s`);
    leaf.style.setProperty("--delay", `${Math.random() * -36}s`);
    leaf.style.setProperty("--drift", `${-46 + Math.random() * 92}vw`);
    leaf.style.setProperty("--rotate", `${Math.random() * 360}deg`);
    leaf.style.setProperty("--opacity", `${0.22 + Math.random() * 0.52}`);
    leaf.style.setProperty("--leaf-light", light);
    leaf.style.setProperty("--leaf-dark", dark);
    els.leafField.append(leaf);
  }
}

function bindEvents() {
  els.search.addEventListener("input", () => {
    window.clearTimeout(searchTimer);
    const query = els.search.value.trim();
    if (query.length < 3) {
      els.results.innerHTML = "";
      return;
    }
    searchTimer = window.setTimeout(() => searchLocations(query), 300);
  });

  els.searchButton.addEventListener("click", () => {
    const firstButton = els.results.querySelector("button");
    if (firstButton) {
      firstButton.click();
      return;
    }
    searchLocations(els.search.value.trim());
  });

  els.treeSelect.addEventListener("change", () => {
    updateTreeDetails();
    updateEstimate();
  });

  els.growthStage.addEventListener("change", () => {
    updateSaplingStage();
    updateTreeDetails();
    updateEstimate();
  });

  [els.targetAqi, els.areaSize, els.mixingHeight].forEach((input) => {
    input.addEventListener("input", updateEstimate);
  });
}

async function searchLocations(query) {
  if (query.length < 2) return;

  els.results.innerHTML = `<p class="note">Searching locations...</p>`;
  try {
    const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
    url.searchParams.set("name", query);
    url.searchParams.set("count", "10");
    url.searchParams.set("language", "en");
    url.searchParams.set("format", "json");

    const response = await fetch(url);
    if (!response.ok) throw new Error("Location search failed.");
    const data = await response.json();
    renderLocationResults(data.results || []);
  } catch (error) {
    els.results.innerHTML = `<p class="note">${error.message}</p>`;
  }
}

function renderLocationResults(results) {
  els.results.innerHTML = "";
  if (!results.length) {
    els.results.innerHTML = `<p class="note">No matching cities were found. Try a larger nearby city.</p>`;
    return;
  }

  results.forEach((place) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "result-button";
    button.innerHTML = `${place.name}<span>${formatPlace(place)}</span>`;
    button.addEventListener("click", () => selectLocation(place));
    els.results.append(button);
  });
}

async function selectLocation(place) {
  els.search.value = `${place.name}, ${place.country}`;
  els.results.innerHTML = "";
  els.locationTitle.textContent = `${place.name}, ${place.country}`;
  els.heroLocation.textContent = `${place.name}, ${place.country}`;
  setLoadingState();

  try {
    const [airData, weatherData] = await Promise.all([
      fetchAirQuality(place),
      fetchWeather(place)
    ]);

    latestAir = airData.current;
    latestWeather = weatherData.current;
    renderAirQuality();
    renderWeather();
    updateEstimate();
    document.body.classList.remove("is-loading");
    document.body.classList.add("has-data");
  } catch (error) {
    document.body.classList.remove("is-loading");
    els.aqiValue.textContent = "0";
    els.aqiStatus.textContent = error.message;
    els.treesNeeded.textContent = "0";
  }
}

async function fetchAirQuality(place) {
  const url = new URL("https://air-quality-api.open-meteo.com/v1/air-quality");
  url.searchParams.set("latitude", place.latitude);
  url.searchParams.set("longitude", place.longitude);
  url.searchParams.set(
    "current",
    "us_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,ozone"
  );
  url.searchParams.set("timezone", "auto");

  const response = await fetch(url);
  if (!response.ok) throw new Error("AQI lookup failed for this location.");
  return response.json();
}

async function fetchWeather(place) {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", place.latitude);
  url.searchParams.set("longitude", place.longitude);
  url.searchParams.set("current", "temperature_2m,relative_humidity_2m,wind_speed_10m");
  url.searchParams.set("timezone", "auto");

  const response = await fetch(url);
  if (!response.ok) throw new Error("Weather lookup failed for this location.");
  return response.json();
}

function setLoadingState() {
  document.body.classList.add("is-loading");
  document.body.classList.remove("has-data");
  els.aqiValue.textContent = "...";
  els.aqiStatus.textContent = "Reading current air quality...";
  els.treesNeeded.textContent = "...";
  els.pm25Value.textContent = "...";
  els.temperatureValue.textContent = "...";
  els.weatherSummary.textContent = "Reading local weather...";
  updateChartValues();
}

function renderAirQuality() {
  const aqi = latestAir.us_aqi;
  const status = getAqiStatus(aqi);

  els.aqiCard.className = `aqi-card stat-tile ${status.className}`;
  els.aqiValue.textContent = Math.round(aqi);
  els.aqiStatus.textContent = status.label;
  els.pm25Value.textContent = formatPollutant(latestAir.pm2_5, "ug/m3");
  els.pm10Value.textContent = formatPollutant(latestAir.pm10, "ug/m3");
  els.no2Value.textContent = formatPollutant(latestAir.nitrogen_dioxide, "ug/m3");
  els.ozoneValue.textContent = formatPollutant(latestAir.ozone, "ug/m3");
  els.coValue.textContent = formatPollutant(latestAir.carbon_monoxide, "ug/m3");
  updateChartValues();
}

function renderWeather() {
  const temperature = latestWeather?.temperature_2m;
  const humidity = latestWeather?.relative_humidity_2m;
  const wind = latestWeather?.wind_speed_10m;

  els.temperatureValue.textContent = Number.isFinite(temperature)
    ? `${formatNumber(temperature)} C`
    : "0 C";
  els.heroTemp.textContent = Number.isFinite(temperature)
    ? `Temp ${formatNumber(temperature)} C`
    : "Temp 0 C";
  els.weatherSummary.textContent =
    Number.isFinite(humidity) && Number.isFinite(wind)
      ? `${formatNumber(humidity)}% humidity with ${formatNumber(wind)} km/h wind.`
      : "Weather data is limited for this city.";
}

function updateTreeDetails() {
  const tree = getSelectedTree();
  const stage = getSelectedStage();

  els.treeName.textContent = `${tree.name} (${tree.scientific})`;
  els.treeNotes.textContent = tree.notes;
  els.co2Absorbed.textContent = `${formatNumber(tree.co2KgYear * stage.multiplier)} kg / year`;
  els.oxygenProduced.textContent = `${formatNumber(tree.oxygenKgYear * stage.multiplier)} kg / year`;
  els.pm25Removed.textContent = `${formatNumber(tree.pm25KgYear * stage.multiplier)} kg / year`;
}

function updateSaplingStage() {
  const stage = getSelectedStage();
  document.body.dataset.growthStage = els.growthStage.value;
  els.saplingSummary.textContent = stage.summary;
}

function updateEstimate() {
  const tree = getSelectedTree();
  const stage = getSelectedStage();
  if (!latestAir || !Number.isFinite(latestAir.pm2_5)) {
    els.treesNeeded.textContent = "0";
    els.treeSummary.textContent = "Results update after an AQI lookup.";
    return;
  }

  const targetAqi = clamp(Number(els.targetAqi.value), 0, 100);
  const targetPm25 = aqiToPm25(targetAqi);
  const currentPm25 = latestAir.pm2_5;
  const excessPm25 = Math.max(0, currentPm25 - targetPm25);

  if (excessPm25 === 0) {
    els.treesNeeded.textContent = "0";
    els.treeSummary.textContent = `PM2.5 is already within the selected target of AQI ${targetAqi}.`;
    els.estimateNote.textContent =
      "Air quality is already within this target for PM2.5. Trees still add shade, cooling, carbon storage, and habitat value.";
    return;
  }

  const areaM2 = Math.max(Number(els.areaSize.value), 0.1) * 1_000_000;
  const mixingHeightM = Math.max(Number(els.mixingHeight.value), 20);
  const excessKg = (excessPm25 * areaM2 * mixingHeightM) / 1_000_000_000;
  const dailyTreeRemovalKg = (tree.pm25KgYear * stage.multiplier) / 365;
  const needed = Math.ceil(excessKg / dailyTreeRemovalKg);

  els.treesNeeded.textContent = new Intl.NumberFormat().format(needed);
  els.treeSummary.textContent = `${stage.label} ${tree.name} planting estimate for ${els.areaSize.value} km2 toward AQI ${targetAqi}.`;
  els.estimateNote.textContent = `This estimate uses a ${mixingHeightM} m mixing height and ${formatNumber(tree.pm25KgYear * stage.multiplier)} kg PM2.5 removal per ${stage.label.toLowerCase()} ${tree.name} per year.`;
}

function updateChartValues() {
  const readings = [
    { value: latestAir?.pm2_5, max: 80, label: els.chartPm25, bar: els.barPm25 },
    { value: latestAir?.pm10, max: 160, label: els.chartPm10, bar: els.barPm10 },
    { value: latestAir?.nitrogen_dioxide, max: 120, label: els.chartNo2, bar: els.barNo2 },
    { value: latestAir?.ozone, max: 180, label: els.chartOzone, bar: els.barOzone },
    { value: latestAir?.carbon_monoxide, max: 1400, label: els.chartCo, bar: els.barCo }
  ];

  readings.forEach(({ value, max, label, bar }) => {
    const hasValue = Number.isFinite(value);
    label.textContent = hasValue ? formatNumber(value) : "0";
    bar.style.setProperty("--bar-width", hasValue ? `${Math.min((value / max) * 100, 100)}%` : "0%");
  });
}

function getSelectedTree() {
  return TREE_DATA.find((tree) => tree.id === els.treeSelect.value) || TREE_DATA[0];
}

function getSelectedStage() {
  return GROWTH_STAGES[els.growthStage.value] || GROWTH_STAGES.mature;
}

function getAqiStatus(aqi) {
  if (aqi <= 50) return { label: "Good", className: "good" };
  if (aqi <= 100) return { label: "Moderate", className: "moderate" };
  if (aqi <= 150) return { label: "Unhealthy for sensitive groups", className: "unhealthy-sensitive" };
  if (aqi <= 200) return { label: "Unhealthy", className: "unhealthy" };
  if (aqi <= 300) return { label: "Very unhealthy", className: "very-unhealthy" };
  return { label: "Hazardous", className: "hazardous" };
}

function aqiToPm25(aqi) {
  const point = clamp(aqi, 0, 500);
  const [cLow, cHigh, iLow, iHigh] =
    PM25_AQI_BREAKPOINTS.find(([, , low, high]) => point >= low && point <= high) ||
    PM25_AQI_BREAKPOINTS[PM25_AQI_BREAKPOINTS.length - 1];

  return ((point - iLow) * (cHigh - cLow)) / (iHigh - iLow) + cLow;
}

function formatPlace(place) {
  return [place.admin1, place.country, place.timezone].filter(Boolean).join(" - ");
}

function formatPollutant(value, unit) {
  if (!Number.isFinite(value)) return "0";
  return `${formatNumber(value)} ${unit}`;
}

function formatNumber(value) {
  return new Intl.NumberFormat(undefined, {
    maximumFractionDigits: value < 10 ? 2 : 1
  }).format(value);
}

function clamp(value, min, max) {
  if (!Number.isFinite(value)) return min;
  return Math.min(Math.max(value, min), max);
}

init();
