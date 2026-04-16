const API_KEY = "088283f4bf3c4ea2a3de75b9fe04fd65";

async function obtenerGeolocalizacion() {
    const loader = document.getElementById('loader');
    const infoContainer = document.getElementById('info-container');
    
    loader.classList.remove('hidden');
    infoContainer.classList.add('hidden');

    try {
        // 1. Obtener la IP pública del cliente primero
        const ipRes = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipRes.json();
        const userIp = ipData.ip;

        // 2. Obtener datos de geolocalización usando la IP obtenida
        const geoRes = await fetch(`https://api.ipgeolocation.io/v3/ipgeo?apiKey=${API_KEY}&ip=${userIp}`);
        const geoData = await geoRes.json();

        // 3. Mostrar en Consola como solicitaste
        console.log("--- Datos de Geolocalización ---");
        console.log("Objeto completo:", geoData);
        console.log("Ciudad:", geoData.location.city);
        console.log("Continente:", geoData.location.continent_name);
        console.log("--------------------------------");

        // 4. Pintar los datos en el HTML
        document.getElementById('ip-addr').textContent = geoData.ip;
        document.getElementById('city-name').textContent = geoData.location.city;
        document.getElementById('continent-name').textContent = geoData.location.continent_name;
        document.getElementById('isp').textContent = geoData.asn.organization;
        
        const flagImg = document.getElementById('flag');
        flagImg.src = geoData.location.country_flag;
        flagImg.style.display = 'inline-block';

        loader.classList.add('hidden');
        infoContainer.classList.remove('hidden');

    } catch (error) {
        console.error("Error obteniendo datos:", error);
        loader.textContent = "Error al cargar los datos.";
    }
}

// Eventos
document.getElementById('btn-reload').addEventListener('click', obtenerGeolocalizacion);

// Carga inicial
window.onload = obtenerGeolocalizacion;