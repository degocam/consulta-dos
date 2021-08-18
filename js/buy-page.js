// Acá se obtienen los elementos HTML hechos en buy-page-html (formulario y divs)
const form = document.getElementById('buyTicket');
const divCard = document.getElementById('divCard')
const inputNombre = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputCantEntradas = document.getElementById('cantidad');
const botonComprar = document.getElementById('btn-comprar');

//En esta parte se guardan los precios de las entradas según la cantidad que se compra
localStorage.setItem('precio1', '3490');
localStorage.setItem('precio2', '2490');
localStorage.setItem('precio3', '1990');

// Evento que crea una card con la información de la película mostrada (Sin el nombre ni la hora)
botonComprar.addEventListener('click', cardCompra);

// Esta función es que recibe y envía los valores de cada input a sus respectivas funciones creadoras
function cardCompra(event){
    event.preventDefault();
    const valorNombre = inputNombre.value;

    const valorEmail = inputEmail.value;

    const valorQEntradas = (inputCantEntradas.value);

    crearEntrada(valorNombre, valorEmail, valorQEntradas);

    precioUnitario(valorQEntradas);

    precioEntradas(valorQEntradas, precioUnitario);

}

//precio con descuento
function precioUnitario (valorQEntradas){
for (let i = 1; i <=5; i++){
    if (valorQEntradas <= 2){
        precio = parseInt(localStorage.getItem('precio1'));
        break;
    }
    if (valorQEntradas <= 4){
        precio = parseInt(localStorage.getItem('precio2'));
        break;
    }
    else if (valorQEntradas >= 5){
        precio = parseInt(localStorage.getItem('precio3'));
        break;
    }
}

    precioEntradas(precio);
}

function precioEntradas (a,b){
    let totalEntradas = a*b;
    return (totalEntradas);
}

totalEntradas();
//Esta es la función que muestra los detalles de la compra
function crearEntrada(valorNombre, valorEmail, valorQEntradas){
    const cardEntrada = document.createElement('div');

    cardEntrada.className ="card-entrada";
    cardEntrada.innerHTML = `<h3>Nombre: ${valorNombre}</h3>
    <h3>email: ${valorEmail} </h3>
    <h3>Cantidad de Entradas :${valorQEntradas}</h3>
    <h2>Total: ${totalEntradas}</h2>`;

    
    divCard.appendChild(cardEntrada)
}
