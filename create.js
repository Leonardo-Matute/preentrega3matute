
let guardarreserva = (clave, valor) => (localStorage.setItem(clave, valor));

agregar.addEventListener('click', () => {
  
  let listadoreserva = JSON.parse(localStorage.getItem('reserva')) || [];

  
  const nuevareserva = {
    nombre: document.querySelector('#nombre').value,
    apellido: document.querySelector('#apellido').value,
    mail: document.querySelector('#mail').value,
    telefono: document.querySelector('#telefono').value
  };

  
  listadoreserva.push(nuevareserva);

  
  guardarreserva('reserva', JSON.stringify(listadoreserva));
});
































