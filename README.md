# 📡 NET_INSIGHTS_PRO :: GEO-LOCALIZATION_TERMINAL

[![Status: Active](https://img.shields.io/badge/STATUS-ENCRYPTED_LINK-00f2ff?style=for-the-badge&logo=opsgenie)](https://github.com/)
[![License: MIT](https://img.shields.io/badge/LICENSE-MIT-ff0055?style=for-the-badge)](https://opensource.org/licenses/MIT)

**NET_INSIGHTS_PRO** es una interfaz de terminal avanzada diseñada para la recuperación y visualización de metadatos de red en tiempo real. Utiliza una estética **Cyber-FUI** (Future User Interface) para presentar datos críticos de geolocalización, infraestructura de red y posicionamiento táctico global.

---

## 🛠️ ESPECIFICACIONES_TÉCNICAS

El sistema opera bajo una arquitectura modular de JavaScript Vanilla, integrando flujos de datos externos mediante APIs de alta precisión.

* **CORE_ENGINE:** JavaScript (ES6+) con arquitectura de servicios asíncronos.
* **VISUAL_INTERFACE:** HTML5/CSS3 con filtros CRT, escaneo de líneas y efectos de resplandor neón.
* **GEOMAPPING:** Integración de Leaflet.js con filtros de post-procesamiento para visión táctica nocturna.
* **DATA_SOURCE:** IPGeolocation API para la extracción de registros `SYSTEM_LOG`.

---

## 🖥️ VISTA_DE_INTERFAZ

El panel central despliega 10 módulos de información organizados por jerarquía de red y ubicación:

1.  **ACCESS_IP:** Identificador de protocolo de internet del nodo de origen.
2.  **NODE_CITY:** Centro urbano detectado.
3.  **SECTOR_CONTINENT:** Región continental de operación.
4.  **REGION_DATA:** Identificación nacional y código de territorio.
5.  **NET_PROVIDER:** Organización proveedora de servicios (ISP/ASN).
6.  **CHRONO_ZONE:** Sincronización horaria local.
7.  **CREDITS_UNIT:** Moneda y sistema financiero local.
8.  **COORD_LAT / LON:** Coordenadas de geoposicionamiento decimal.
9.  **NATIONAL_IDENTIFIER:** Representación visual de la bandera del sector.

---

## 🚀 DESPLIEGUE_DEL_SISTEMA

Para inicializar la terminal en un entorno local:

1.  Clonar el repositorio:
    ```bash
    git clone [https://github.com/tu-usuario/net-insights-pro.git](https://github.com/tu-usuario/net-insights-pro.git)
    ```
2.  Configurar la `API_KEY` en `assets/js/main.js`:
    ```javascript
    const API_KEY = "TU_TOKEN_AQUÍ";
    ```
3.  Ejecutar mediante un servidor local (Live Server recomendado).

---

## 🔒 REGISTRO_DE_SEGURIDAD (LOGS)

* **v1.0:** Estructura básica de visualización.
* **v2.0:** Implementación de estética Cyberpunk y animaciones de entrada escalonadas.
* **v3.0:** Integración de Radar Táctico (Leaflet Maps) y optimización de visualización de banderas.

---

**Desarrollado por:** [Angel Ibraym Ortiz Martínez]  
*© 2026 - SISTEMA_DE_MONITOREO_ACTIVO*