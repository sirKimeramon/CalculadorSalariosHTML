

const inputSalario = document.getElementById("salario-mensual")
const btnComparar = document.getElementById("btn-comparar")


btnComparar.addEventListener("click", ()=>{
    alert(inputSalario.value)
})

//objetos para selector

// Objetos
const cardMessi = {
    nombre: "Messi",
    img: "../assets/images/teamomessi.jpg",
    salario: 41000000,
};

const cardIbai = {
    nombre: "Ibai",
    img: "../assets/images/ibai.jpg",
    salario: 2000000,
};

const cardShakira = {
    nombre: "Shakira",
    img: "../assets/images/shakira.jpg",
    salario: 30000000,
};


const contenedorTarjetas = document.getElementById("contenedor-tarjetas");

//*Tarjeta Messi

const divTarjetaMessi = document.createElement("div");
divTarjetaMessi.className = "col card-cover";

const divContenidoMessi = document.createElement("div");
divContenidoMessi.className = "messi card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg";
divContenidoMessi.style.border = "5px solid black";
divContenidoMessi.style.backgroundImage = "url('./assets/images/teamomessi.jpg')";

const divInfoMessi = document.createElement("div");
divInfoMessi.className = "d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 clickA3 messi";
divContenidoMessi.appendChild(divInfoMessi);

const h2Messi = document.createElement("h2");
h2Messi.className = "text-center pt-3";
h2Messi.innerText = "Messi";
divContenidoMessi.appendChild(h2Messi);

divTarjetaMessi.appendChild(divContenidoMessi);
contenedorTarjetas.appendChild(divTarjetaMessi);

//* Tarjeta Shakira

const divTarjetaShakira = document.createElement("div");
divTarjetaShakira.className = "col card-cover";

const divContenidoShakira = document.createElement("div");
divContenidoShakira.className = "shakira card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg";
divContenidoShakira.style.border = "5px solid black";
divContenidoShakira.style.backgroundImage = "url('./assets/images/shakira.jpg')";

const divInfoShakira = document.createElement("div");
divInfoShakira.className = "d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 clickA3 shakira";
divContenidoShakira.appendChild(divInfoShakira);

const h2Shakira = document.createElement("h2");
h2Shakira.className = "text-center pt-3";
h2Shakira.innerText = "Shakira";
divContenidoShakira.appendChild(h2Shakira);

divTarjetaShakira.appendChild(divContenidoShakira);
contenedorTarjetas.appendChild(divTarjetaShakira);

//* Tarjeta Ibai
const divTarjetaIbai = document.createElement("div");
divTarjetaIbai.className = "col card-cover";

const divContenidoIbai = document.createElement("div");
divContenidoIbai.className = "ibai card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg";
divContenidoIbai.style.border = "5px solid black";
divContenidoIbai.style.backgroundImage = "url('./assets/images/Ibai.jpg')";

const divInfoIbai = document.createElement("div");
divInfoIbai.className = "d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 clickA3 ibai";
divContenidoIbai.appendChild(divInfoIbai);

const h2Ibai = document.createElement("h2");
h2Ibai.className = "text-center pt-3";
h2Ibai.innerText = "Ibai";
divContenidoIbai.appendChild(h2Ibai);

divTarjetaIbai.appendChild(divContenidoIbai);
contenedorTarjetas.appendChild(divTarjetaIbai);

const arrayFamosos =[cardMessi,cardIbai,cardShakira]



// Event listener para seleccionar una tarjeta a la vez
const tarjetas = document.querySelectorAll('.card');
tarjetas.forEach(tarjeta => {
tarjeta.addEventListener('click', () => {
// Remover la clase "selected" de todas las tarjetas
tarjetas.forEach(t => t.classList.remove('selected'));
// Agregar la clase "selected" a la tarjeta seleccionada
tarjeta.classList.add('selected');
});
});
