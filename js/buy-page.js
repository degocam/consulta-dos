$(document).ready(function(){
    $("body").slideDown(4000);
});

//Esta es la sección que brinda información de la película

$(".infoPeli").append(
    `<img src="resources/unavailable.svg" alt="">
    <h2>Nombre Película</h2>
    <p>Duis ullamco irure ex fugiat enim incididunt esse magna officia aliquip ipsum occaecat. 
    Do tempor exercitation irure sint sint laboris minim nulla. Culpa minim nostrud mollit labore aliqua 
    qui incididunt qui Lorem duis pariatur ipsum consequat tempor. Anim cillum dolore minim fugiat in velit cupidatat. 
    Ex in ullamco aliqua laboris ex dolor ut duis dolor ipsum aliqua laboris fugiat.</p>
    <h3>Duración: 115 minutos</h3>
    <h3>Director: Fulano Mengano</h3>`);


$(".btn-horarios").click((e)=>{
    $("#qEntradas").show();
});

let horaElegida = $(".btn-horarios").click((e) =>{
    console.log(e.target.value)
});

// Esta es la función que calcula el total de las entradas
let numeroEntradas = document.getElementById("numEntradas");

let cantEntradas = $("#comprar").click(function(e){
    e.preventDefault();
    let cantidadEntradas = parseInt(numeroEntradas.value);
    localStorage.setItem('cantEntradas', cantidadEntradas);

    console.log(cantidadEntradas);
    
    console.log(precioEntradas(cantidadEntradas, 2990));
});

function precioEntradas (a,b){
    let totalEntradas = a * b;
    localStorage.setItem('totalCompra', totalEntradas);
    console.log(totalEntradas);
};

//Este es un array que recibe el total y lo envía en forma de párrafo al DOM
let totalCompra = localStorage.getItem('totalCompra');

$("#comprar").click((e)=>{
    e.preventDefault();
    $(".cardEntradas").append(
        `<p>Total:${totalCompra}</p>
        </div>`
    );
});
