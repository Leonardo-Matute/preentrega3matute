let agregar = document.querySelector('#agregar');

let noche = document.querySelector('.noche');

fetch('./datos.json')
  .then(response => response.json())
  .then(data => {
  });

let mostrarreserva = (() => {
  
  let listadoreserva = JSON.parse(localStorage.getItem('reserva'));


  for (let index = 0; index < listadoreserva.length; index++) {
   
    let div = document.createElement('div');
    div.className = 'col s4';

  
    div.innerHTML = `
      <div class="card text-center">
        <div class="card-header">
          ${listadoreserva[index].email}
        </div>
        <div class="card-body">
          <h5 class="card-title">${listadoreserva[index].nombre}</h5>
          <p class="card-text">${listadoreserva[index].apellido}</p>
          <a href="#" class="btn btn-danger">Ver reserva</a>
        </div>
        <div class="card-footer text-muted">
          ${listadoreserva[index].telefono}
        </div>
      </div>
    `;

   
    noche.appendChild(div);
  }
});

let mostrarNoche = (() => {
  
  let menu = JSON.parse(localStorage.getItem('Noche'));

  
  for (let index = 0; index < menu.length; index++) {
  
    let div = document.createElement('div');
    div.className = 'col s4';

    div.innerHTML = `
      <div class="card text-center">
        <div class="card-header">
          ${menu[index].email}
        </div>
        <div class="card-body">
          <h5 class="card-title">${menu[index].nombre}</h5>
          <p class="card-text">${menu[index].apellido}</p>
          <a href="#" class="btn btn-danger">Ver reserva</a>
        </div>
        <div class="card-footer text-muted">
          ${menu[index].telefono}
        </div>
      </div>
    `;
  }
}
)

