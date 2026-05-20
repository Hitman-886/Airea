const TREE_DATA = [
  {
    id: "neem",
    name: "Neem",
    scientific: "Azadirachta indica",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Azadirachta_indica_tree.jpg",
    co2KgYear: 22,
    oxygenKgYear: 118,
    pm25KgYear: 0.09,
    notes: "Hardy evergreen shade tree, common in South Asia and useful for hot, dry urban streets."
  },
  {
    id: "peepal",
    name: "Peepal / Sacred fig",
    scientific: "Ficus religiosa",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ficus_religiosa_Bo.jpg",
    co2KgYear: 32,
    oxygenKgYear: 170,
    pm25KgYear: 0.16,
    notes: "Large-canopy fig with strong shade value; best where roots and canopy have generous space."
  },
  {
    id: "banyan",
    name: "Banyan",
    scientific: "Ficus benghalensis",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ficus_benghalensis_in_Maui.jpg",
    co2KgYear: 45,
    oxygenKgYear: 240,
    pm25KgYear: 0.22,
    notes: "Very large long-lived canopy tree; powerful air-benefit potential but needs park-scale space."
  },
  {
    id: "mango",
    name: "Mango",
    scientific: "Mangifera indica",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mango_tree.jpg",
    co2KgYear: 24,
    oxygenKgYear: 128,
    pm25KgYear: 0.1,
    notes: "Broad-leaved fruit tree that performs well in tropical and subtropical climates."
  },
  {
    id: "rain-tree",
    name: "Rain tree",
    scientific: "Samanea saman",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Samanea_saman_tree.jpg",
    co2KgYear: 38,
    oxygenKgYear: 203,
    pm25KgYear: 0.19,
    notes: "Wide umbrella canopy, excellent for shade corridors where enough horizontal room exists."
  },
  {
    id: "ashoka",
    name: "Indian mast tree",
    scientific: "Monoon longifolium",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Polyalthia_longifolia_tree.jpg",
    co2KgYear: 13,
    oxygenKgYear: 69,
    pm25KgYear: 0.05,
    notes: "Narrow ornamental evergreen often used where streets are tight and vertical form matters."
  },
  {
    id: "oak",
    name: "Oak",
    scientific: "Quercus species",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Quercus_robur.jpg",
    co2KgYear: 28,
    oxygenKgYear: 149,
    pm25KgYear: 0.14,
    notes: "High-canopy temperate tree with strong carbon storage and wildlife value."
  },
  {
    id: "maple",
    name: "Maple",
    scientific: "Acer species",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Acer_saccharum.jpg",
    co2KgYear: 23,
    oxygenKgYear: 122,
    pm25KgYear: 0.11,
    notes: "Reliable temperate street tree group with dense seasonal canopy."
  },
  {
    id: "pine",
    name: "Pine",
    scientific: "Pinus species",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pinus_sylvestris_tree.jpg",
    co2KgYear: 21,
    oxygenKgYear: 112,
    pm25KgYear: 0.08,
    notes: "Evergreen conifer; useful where year-round cover is suitable and fire risk is managed."
  },
  {
    id: "eucalyptus",
    name: "Eucalyptus",
    scientific: "Eucalyptus species",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Eucalyptus_tree.jpg",
    co2KgYear: 30,
    oxygenKgYear: 160,
    pm25KgYear: 0.1,
    notes: "Fast-growing tree with high biomass gain; choose carefully because water use and fire behavior vary by species."
  },
  {
    id: "teak",
    name: "Teak",
    scientific: "Tectona grandis",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tectona_grandis_tree.jpg",
    co2KgYear: 26,
    oxygenKgYear: 139,
    pm25KgYear: 0.1,
    notes: "Large tropical deciduous tree suited to warm regions and open planting sites."
  },
  {
    id: "gulmohar",
    name: "Gulmohar / Flame tree",
    scientific: "Delonix regia",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Delonix_regia_tree.jpg",
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

const fallbackTreeImage =
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80";

const els = {
  leafField: document.querySelector("#leaf-field"),
  search: document.querySelector("#city-search"),
  searchButton: document.querySelector("#search-button"),
  results: document.querySelector("#location-results"),
  treeSelect: document.querySelector("#tree-select"),
  targetAqi: document.querySelector("#target-aqi"),
  areaSize: document.querySelector("#area-size"),
  mixingHeight: document.querySelector("#mixing-height"),
  aqiCard: document.querySelector(".aqi-card"),
  aqiValue: document.querySelector("#aqi-value"),
  aqiStatus: document.querySelector("#aqi-status"),
  treesNeeded: document.querySelector("#trees-needed"),
  treeSummary: document.querySelector("#tree-summary"),
  pm25Value: document.querySelector("#pm25-value"),
  pm10Value: document.querySelector("#pm10-value"),
  no2Value: document.querySelector("#no2-value"),
  ozoneValue: document.querySelector("#ozone-value"),
  coValue: document.querySelector("#co-value"),
  treeImage: document.querySelector("#tree-image"),
  treeName: document.querySelector("#tree-name"),
  treeNotes: document.querySelector("#tree-notes"),
  co2Absorbed: document.querySelector("#co2-absorbed"),
  oxygenProduced: document.querySelector("#oxygen-produced"),
  pm25Removed: document.querySelector("#pm25-removed"),
  locationTitle: document.querySelector("#location-title"),
  estimateNote: document.querySelector("#estimate-note")
};

let selectedLocation = null;
let latestAir = null;
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
  bindEvents();
}

function createLeafField() {
  if (!els.leafField) return;

  const fragmentCount = window.matchMedia("(max-width: 720px)").matches ? 34 : 62;
  const colors = [
    ["#b7d879", "#2f7d4f"],
    ["#8fbd62", "#245f3b"],
    ["#d7a65f", "#7c8f39"],
    ["#e1c16e", "#4f8a4b"]
  ];

  els.leafField.innerHTML = "";
  for (let index = 0; index < fragmentCount; index += 1) {
    const leaf = document.createElement("span");
    const [light, dark] = colors[index % colors.length];
    leaf.className = "leaf-fragment";
    leaf.style.setProperty("--x", `${Math.random() * 100}vw`);
    leaf.style.setProperty("--size", `${10 + Math.random() * 28}px`);
    leaf.style.setProperty("--duration", `${13 + Math.random() * 18}s`);
    leaf.style.setProperty("--delay", `${Math.random() * -28}s`);
    leaf.style.setProperty("--drift", `${-38 + Math.random() * 76}vw`);
    leaf.style.setProperty("--rotate", `${Math.random() * 360}deg`);
    leaf.style.setProperty("--opacity", `${0.24 + Math.random() * 0.5}`);
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
    searchTimer = window.setTimeout(() => searchLocations(query), 320);
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
    url.searchParams.set("count", "12");
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
  selectedLocation = place;
  els.search.value = `${place.name}, ${place.country}`;
  els.results.innerHTML = "";
  els.locationTitle.textContent = `${place.name}, ${place.country}`;
  setLoadingState();

  try {
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
    const data = await response.json();
    latestAir = data.current;
    renderAirQuality();
    updateEstimate();
    document.body.classList.remove("is-loading");
    document.body.classList.add("has-data");
  } catch (error) {
    document.body.classList.remove("is-loading");
    els.aqiValue.textContent = "--";
    els.aqiStatus.textContent = error.message;
    els.treesNeeded.textContent = "--";
  }
}

function setLoadingState() {
  document.body.classList.add("is-loading");
  document.body.classList.remove("has-data");
  els.aqiValue.textContent = "...";
  els.aqiStatus.textContent = "Reading current air quality...";
  els.treesNeeded.textContent = "...";
  els.pm25Value.textContent = "...";
}

function renderAirQuality() {
  const aqi = latestAir.us_aqi;
  const status = getAqiStatus(aqi);

  els.aqiCard.className = `aqi-card ${status.className}`;
  els.aqiValue.textContent = Math.round(aqi);
  els.aqiStatus.textContent = status.label;
  els.pm25Value.textContent = formatPollutant(latestAir.pm2_5, "µg/m³");
  els.pm10Value.textContent = formatPollutant(latestAir.pm10, "µg/m³");
  els.no2Value.textContent = formatPollutant(latestAir.nitrogen_dioxide, "µg/m³");
  els.ozoneValue.textContent = formatPollutant(latestAir.ozone, "µg/m³");
  els.coValue.textContent = formatPollutant(latestAir.carbon_monoxide, "µg/m³");
}

function updateTreeDetails() {
  const tree = getSelectedTree();
  els.treeImage.src = tree.image;
  els.treeImage.alt = `${tree.name} tree`;
  els.treeName.textContent = `${tree.name} (${tree.scientific})`;
  els.treeNotes.textContent = tree.notes;
  els.co2Absorbed.textContent = `${tree.co2KgYear} kg / year`;
  els.oxygenProduced.textContent = `${tree.oxygenKgYear} kg / year`;
  els.pm25Removed.textContent = `${tree.pm25KgYear} kg / year`;
}

function updateEstimate() {
  const tree = getSelectedTree();
  if (!latestAir || !Number.isFinite(latestAir.pm2_5)) {
    els.treesNeeded.textContent = "--";
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
  const dailyTreeRemovalKg = tree.pm25KgYear / 365;
  const needed = Math.ceil(excessKg / dailyTreeRemovalKg);

  els.treesNeeded.textContent = new Intl.NumberFormat().format(needed);
  els.treeSummary.textContent = `${tree.name} trees estimated for ${els.areaSize.value} km² to offset about ${formatNumber(excessKg)} kg of excess PM2.5 toward AQI ${targetAqi}.`;
  els.estimateNote.textContent = `This estimate uses a ${mixingHeightM} m mixing height and ${tree.pm25KgYear} kg PM2.5 removal per mature ${tree.name} per year. It is best used for comparison and planning, not as a compliance claim.`;
}

function getSelectedTree() {
  return TREE_DATA.find((tree) => tree.id === els.treeSelect.value) || TREE_DATA[0];
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
  return [place.admin1, place.country, place.timezone].filter(Boolean).join(" · ");
}

function formatPollutant(value, unit) {
  if (!Number.isFinite(value)) return "--";
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

els.treeImage.addEventListener("error", () => {
  if (els.treeImage.src !== fallbackTreeImage) {
    els.treeImage.src = fallbackTreeImage;
  }
});

init();
