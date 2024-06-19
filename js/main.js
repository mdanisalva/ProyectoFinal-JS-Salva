// Mostrar las reservas al cargar la página
mostrarReservas();

// Ejemplo de uso de fetch para obtener datos de una API
//fetch('https://api.example.com/data')
//fetch('https://api.github.com/users/manishmshiva')
fetch('https://pokeapi.co/api/v2/pokemon/150')
    .then(response => response.json())
    .then(data => {
        console.log('Datos obtenidos:', data);
    })
    .catch(error => {
        console.error('Error al obtener datos:', error);
    });