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
    $("#qEntradas").slideDown();
    $("#divCard").slideDown();
});

let horaElegida = $(".btn-horarios").click(function(e){
    let eleccion = toString(horaElegida.value);
    return eleccion;
});

let nombreComprador = $("#name").change((e) =>{
    console.log(e.target.value)
});

// Esta es la función que calcula el total de las entradas
let numeroEntradas = document.getElementById("numEntradas");

let cantEntradas = $("#comprar").click(function(e){
    e.preventDefault();
    let cantidadEntradas = parseInt(numeroEntradas.value);
    localStorage.setItem('cantEntradas', cantidadEntradas);

    console.log(cantidadEntradas);
    
    const total = precioEntradas(cantidadEntradas, 2990);

    $(".modalContenido").append(
        `<p>Horario:${horaElegida}</p>
        <p>${numeroEntradas.value} entradas</p>
        <p>Total:${total}</p>`
    )
});

function precioEntradas (a,b){
    let totalEntradas = a * b;
    localStorage.setItem('totalCompra', totalEntradas);
    console.log(totalEntradas);
    return totalEntradas;
};

//Esta es la función que despliega el modal
var modal = document.getElementById("modalTotal");

var btn = document.getElementById("comprar");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
