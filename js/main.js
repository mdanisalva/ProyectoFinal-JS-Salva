
// Mostrar las reservas al cargar la página
// Ejemplo de uso de fetch para obtener datos de un archivo JSON
fetch('js/datos.json')
    .then(response => response.json())
    .then(data => {
        console.log('Datos obtenidos:', data);
        reservasGuardadas=data;
        mostrarReservas();
    })
    .catch(error => {
        console.error('Error al obtener datos:', error);
    });



