import { GeoService } from './GeoService.js';

const API_KEY = "088283f4bf3c4ea2a3de75b9fe04fd65";
const service = new GeoService(API_KEY);

const loader = document.getElementById('loader');
const infoList = document.getElementById('infoList');
const btnRefresh = document.getElementById('btnRefresh');
let map = null; // Guardamos la referencia para no duplicar el mapa

async function initializeApp() {
    loader.classList.remove('d-none');
    infoList.classList.add('d-none');
    const mapContainer = document.getElementById('map');
    if(mapContainer) mapContainer.style.opacity = '0';
    infoList.innerHTML = '';

    try {
        const items = await service.getFormattedData();

        items.forEach((item, index) => {
            const col = document.createElement('div');
            col.className = 'col-sm-6';
            col.style.animation = `fadeInUp 0.4s ease forwards ${index * 0.1}s`;
            col.style.opacity = '0';

            col.innerHTML = `
                <div class="info-item h-100">
                    <div class="info-label">> ${item.label}</div>
                    <div class="info-value">${item.value}</div>
                </div>
            `;
            infoList.appendChild(col);
        });

        // Lógica del Mapa
        const lat = items.find(i => i.id === "LAT").value;
        const lon = items.find(i => i.id === "LON").value;

        renderMap(lat, lon);

        loader.classList.add('d-none');
        infoList.classList.remove('d-none');
        if(mapContainer) mapContainer.style.opacity = '1';

    } catch (error) {
        console.error("FATAL_ERROR::STREAMS_INTERRUPTED", error);
        loader.innerHTML = `<p class="text-pink orbitron">CRITICAL_ERROR: DATA_FETCH_FAILED</p>`;
    }
}

function renderMap(lat, lon) {
    if (map) {
        map.setView([lat, lon], 13);
    } else {
        map = L.map('map', { zoomControl: false }).setView([lat, lon], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    }
    
    // Marcador estilo neón
    L.circleMarker([lat, lon], {
        radius: 10,
        color: '#00f2ff',
        fillColor: '#00f2ff',
        fillOpacity: 0.5
    }).addTo(map);
}

btnRefresh.addEventListener('click', initializeApp);
window.addEventListener('load', initializeApp);