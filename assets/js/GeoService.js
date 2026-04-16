export class GeoService {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async fetchRawData() {
        // 1. Obtener IP
        const ipRes = await fetch('https://api.ipify.org?format=json');
        const { ip } = await ipRes.json();

        // 2. Obtener Geo con la IP obtenida
        const geoRes = await fetch(`https://api.ipgeolocation.io/v3/ipgeo?apiKey=${this.apiKey}&ip=${ip}`);
        return await geoRes.json();
    }

    async getFormattedData() {
    const data = await this.fetchRawData();
    console.log("LOG::INCOMING_DATA_STREAM", data);

    return [
        // Fila 1: Identidad básica
        { id: "IP", label: "ACCESS_IP::SYSTEM_LOG", value: data.ip },
        { id: "CITY", label: "NODE_CITY::SYSTEM_LOG", value: data.location.city },

        // Fila 2: Ubicación geográfica
        { id: "CONT", label: "SECTOR_CONTINENT::SYSTEM_LOG", value: data.location.continent_name },
        { id: "REGION", label: "REGION_DATA::SYSTEM_LOG", value: `${data.location.country_name} (${data.location.country_code2})` },

        // Fila 3: Red y Tiempo
        { id: "ISP", label: "NET_PROVIDER::SYSTEM_LOG", value: data.asn.organization },
        { id: "TIME", label: "CHRONO_ZONE::SYSTEM_LOG", value: data.time_zone.name },

        // Fila 4: Economía y Posicionamiento (Latitud)
        { id: "MONEY", label: "CREDITS_UNIT::SYSTEM_LOG", value: `${data.currency.name} (${data.currency.symbol})` },
        { id: "LAT", label: "COORD_LAT::SYSTEM_LOG", value: data.location.latitude },

        // Fila 5: Posicionamiento (Longitud) e Identificador Visual
        { id: "LON", label: "COORD_LON::SYSTEM_LOG", value: data.location.longitude },
        { 
            id: "FLAG", 
            label: "NATIONAL_IDENTIFIER::SYSTEM_LOG", 
            value: `<img src="${data.location.country_flag}" class="img-fluid border border-info shadow" style="width: 45px; filter: contrast(1.2) brightness(1.1);">` 
        }
    ];
}
}