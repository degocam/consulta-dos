$(document).ready(function(){
    console.log('Listo para cargar');
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
    e.preventDefault();
    $("#qEntradas").slideDown();
    $("#divCard").slideDown();

    // let horaElegida = e.target.value;

    // return horaElegida;
});

// let horaPelis = document.getElementById("horariosPelis");

// $(".btn-horarios").click(function(e){
//   e.preventDefault();

// });

$("#nombreComp").change(function(e){
  e.preventDefault();
  let nombreComp = e.target.value;

  return nombreComp;
});

$("#correoComp").change(function(e){
  e.preventDefault();
  let correoComp = e.target.value;

  return correoComp;
});

$("#telNumber").change(function(e){
  e.preventDefault();
  let telNumber = e.target.value;

  return telNumber;
});

// Esta es la función que calcula el total de las entradas
let numeroEntradas = document.getElementById("numEntradas");

let cantEntradas = $("#comprar").click(function(e){
    e.preventDefault();
    let cantidadEntradas = parseInt(numeroEntradas.value);
    // let horaFuncion = String(horaElegida.value);
    let emailComprador = String(correoComp.value);
    let nombreComprador = String(nombreComp.value);
    let telefonoComprador = String(telNumber.value);
    const total = precioEntradas(cantidadEntradas, 2990);

    $(".modalContenido").append(
        `<h2>${nombreComprador}</h2>
        <p>Haz comprado ${cantidadEntradas} entradas para la función de las </p>
        <p>Tu código para retirar en boletería llegará al correo ${emailComprador}</p>
        <p>y al teléfono ${telefonoComprador}</p>
        <h3>Total:${total}</h3>`
    )
});

function precioEntradas (a,b){
    let totalEntradas = a * b;
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
