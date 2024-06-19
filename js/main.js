// Mostrar las reservas al cargar la página
mostrarReservas();

// Ejemplo de uso de fetch para obtener datos de una API
fetch('js/datos.json')
    .then(response => response.json())
    .then(data => {
        console.log('Datos obtenidos:', data);
    })
    .catch(error => {
        console.error('Error al obtener datos:', error);
    });