// JSON Data

const camas = [];
let list;

const camaOpciones = (list, camas) => {
	if (list) {
		camas.map((cama) => {
			let li = `		
			<li>
			<a class="dropdown-item">
			<div class="form-check">
			<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
			<label class="form-check-label" for="flexRadioDefault1">
			${cama.nombre} $${cama.precio}
			</label>
			</div>
			</a>
			</li>
			`;
			let element = document.createElement('div');
			element.innerHTML = li;
			list.appendChild(element.firstChild);
		});
	} else {
		console.error("list not found");
	}
};

window.onload = () => {	
	fetch('./datos.json')
	.then(res => res.json())
	.then(data => {
		data.forEach((cama) => {
			camas.push(cama);
		})
	})
	.then(() => {
		list = document.getElementById("seleccion-de-camas");
		camaOpciones(list, camas);
	})
	.catch(error => console.error(error));
}

console.log(list);

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
	
	
	guardarreserva('reserva', JSON.stringify(nuevareserva))
}
)
































