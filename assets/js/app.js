document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos las referencias a los elementos HTML
    const ipDisplay = document.getElementById('ip-display');
    const refreshBtn = document.getElementById('refresh-btn');

    // Función asíncrona para consultar la API de IPify
    const fetchIP = async () => {
        ipDisplay.textContent = "Cargando...";
        
        try {
            // Hacemos la petición a la API pidiendo formato JSON
            const response = await fetch('https://api.ipify.org?format=json');
            
            // Verificamos que la respuesta sea correcta (Status 200)
            if (!response.ok) {
                throw new Error('Error en la red al intentar conectar con la API');
            }
            
            // Convertimos la respuesta a un objeto JavaScript
            const data = await response.json();
            
            // Insertamos la propiedad "ip" que nos devuelve la API en nuestro HTML
            ipDisplay.textContent = data.ip;
            ipDisplay.style.color = "#ff6b6b"; // Aseguramos el color original
            
        } catch (error) {
            // Si hay un error (ej. sin internet), lo mostramos
            console.error("Hubo un problema obteniendo la IP:", error);
            ipDisplay.textContent = "Error al cargar IP";
            ipDisplay.style.color = "red";
        }
    };

    // 1. Ejecutamos la función inmediatamente cuando carga la página
    fetchIP();

    // 2. Ejecutamos la función también cuando el usuario haga clic en el botón
    refreshBtn.addEventListener('click', fetchIP);
});