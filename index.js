let noche = JSON.stringify('.noche')


let mostrarreserva = (() => {

    let listadoreserva = JSON.parse(localStorage.getItem('reserva'))

    for (let index = 0; index < listadoreserva
    .length; index++) {
        let div = document.createElement('div')
        div.className = 'col s4'
        div.innerHTML = `
        <div class="card text-center">
        <div class="card-header">
            ${listadoreserva
        [index].mail}
        </div>
        <div class="card-body">
            <h5 class="card-title">${listadoreserva
        [index].nombre}</h5>
            <p class="card-text">${listadoreserva
        [index].apellido}</p>
            <a href="#" class="btn btn-danger">Ver reserva</a>
        </div>
        <div class="card-footer text-muted">
        ${listadoreserva
    [index].telefono} - ${listadoreserva}
        </div>
    </div>
         `
    noche.appendChild(div)

    }
}
)


let mostrarNoche = (()=>{
let menu = JSON.parse(localStorage.getItem ('Noche'))

for (let index = 0; index < listadoreserva
    .length; index++) {
        let div = document.createElement('div')
        div.className = 'col s4'
        div.innerHTML = `
        <div class="card text-center">
        <div class="card-header">
            ${listadoreserva
        [index].mail}
        </div>
        <div class="card-body">
            <h5 class="card-title">${listadoreserva
        [index].nombre}</h5>
            <p class="card-text">${listadoreserva
        [index].apellido}</p>
            <a href="#" class="btn btn-danger">Ver reserva</a>
        </div>
        <div class="card-footer text-muted">
        ${listadoreserva
    [index].telefono} - ${listadoreserva}
        </div>
    </div>
         `

    noche.appendChild(div)

}

})






























