// Obtener la lista de reservas desde localStorage (si existe)
const listaGuardada = localStorage.getItem('listaReservas');
const listaReservas = listaGuardada ? JSON.parse(listaGuardada) : [];
let reservasGuardadas = [];


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



function reservaExitosa() {
            Swal.fire({
                title: "Su reserva fue exitosa!!",
                icon: "success",
                timer: 1500,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("b");
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            });
}

// Mostrar las reservas en el DOM
function mostrarReservas() {
    const lista = document.getElementById('listaReservas');
    lista.innerHTML = ''; // Limpiar la lista antes de volver a mostrar
    
    reservasGuardadas.forEach((reservasJSON) => {
        const li = document.createElement('li');
        li.textContent = `${reservasJSON.nombrePasajero} viajará a ${reservasJSON.destino} el ${reservasJSON.fechaVuelo} en el asiento ${reservasJSON.asiento}`;
        lista.appendChild(li);
    });



    listaReservas.forEach((reserva) => {
        const li = document.createElement('li');
        li.textContent = `${reserva.nombre} viajará a ${reserva.destino} el ${reserva.fecha} en el asiento ${reserva.asiento}`;
        lista.appendChild(li);
    });
}

// Reservar pasaje al hacer clic en el botón
const btnReservar = document.getElementById('reservarPasaje');
btnReservar.addEventListener('click', () => {
    const nombrePasajero = document.getElementById('nombrePasajero').value;
    const destino = document.getElementById('destino').value;
    const fechaVuelo = document.getElementById('fechaVuelo').value;
    const asiento = document.getElementById('asiento').value;
    if (nombrePasajero.trim() !== '' && destino.trim() !== '' && fechaVuelo.trim() !== '' && asiento.trim() !== '') {
        const nuevaReserva = new Pasaje(nombrePasajero, destino, fechaVuelo, asiento);
        listaReservas.push(nuevaReserva); // Agregar la reserva a la lista
        localStorage.setItem('listaReservas', JSON.stringify(listaReservas));
        reservaExitosa();
        mostrarReservas();
        limpiarCampos();
    }
});

// Función para limpiar los campos de entrada
function limpiarCampos() {
    document.getElementById('nombrePasajero').value = '';
    document.getElementById('destino').value = '';
    document.getElementById('fechaVuelo').value = '';
    document.getElementById('asiento').value = '';
}