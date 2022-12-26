
const guardarreserva = (clave, valor) => (localStorage.setItem(clave, valor))


agregar.addEventListener('click', () => {
const nuevareserva = [
    {
        nombre: document.querySelector('#nombre').value,
        apellido: document.querySelector('#apellido').value,
        mail: document.querySelector('#mail').value,
        telefono: document.querySelector('#telefono').value
    }
]


guardarreserva('cargaReserva', JSON.stringify(nuevareserva))
}
)
































