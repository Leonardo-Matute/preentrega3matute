let opcionesnoches = document.querySelector('.opcionesnoches')


let mostrarreserva = (() => {

    let listadoreserva = JSON.parse(localStorage.getItem('reserva'))

    for (let index = 0; index < listadoreserva.length; index++) {
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

        opcionesnoches.appendChild(div)

    }
}
)

if (localStorage.getItem('reserva')) {
    console.log('está guardado')
    mostrarreserva()
} else {
    console.log('no está guardado')
    localStorage.setItem('reserva', JSON.stringify(reserva
))
    mostrarreserva()
}

let mostrarNoches = (()=>{
let menu = JSON.parse(localStorage.getItem ('Noches'))

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

    opcionesnoches.appendChild(div)

}

})

let mostrarRestauranteCargado = (() => {

    let listadoreserva = JSON.parse(localStorage.getItem('cargareserva'))

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

        opcionesnoches.appendChild(div)

    }
}
)

if (localStorage.getItem('reserva')) {
    console.log('está guardado')
    mostrarRestauranteCargado()
} else {
    console.log('no está guardado')
    localStorage.setItem('reserva', JSON.stringify(reserva
))
    mostrarRestauranteCargado()
}

































