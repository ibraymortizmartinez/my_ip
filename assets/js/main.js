import { GeoService } from './GeoService.js';

const API_KEY = "088283f4bf3c4ea2a3de75b9fe04fd65";
const service = new GeoService(API_KEY);

const loader = document.getElementById('loader');
const infoList = document.getElementById('infoList');
const btnRefresh = document.getElementById('btnRefresh');

async function initializeApp() {
    // UI Feedback
    loader.classList.remove('d-none');
    infoList.classList.add('d-none');
    infoList.innerHTML = '';

    try {
        const items = await service.getFormattedData();

        items.forEach((item, index) => {
            const col = document.createElement('div');
            col.className = 'col-sm-6';
            
            // Animación de entrada escalonada
            col.style.animation = `fadeInUp 0.4s ease forwards ${index * 0.1}s`;
            col.style.opacity = '0';

            col.innerHTML = `
                <div class="info-item h-100">
                    <div class="info-label">> ${item.label}::SYSTEM_LOG</div>
                    <div class="info-value">${item.value}</div>
                </div>
            `;
            infoList.appendChild(col);
        });

        loader.classList.add('d-none');
        infoList.classList.remove('d-none');

    } catch (error) {
        console.error("FATAL_ERROR::STREAMS_INTERRUPTED", error);
        loader.innerHTML = `<p class="text-pink orbitron">CRITICAL_ERROR: DATA_FETCH_FAILED</p>`;
    }
}

// Listeners
btnRefresh.addEventListener('click', initializeApp);
window.addEventListener('load', initializeApp);