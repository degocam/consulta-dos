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

//Esta es la sección dónde se elige el horario y se compra la entrada

$(".btn-horarios").click((e)=>{
    $(".cardEntradas").append(
        `<p>Total: </p>
        </div>`
    );
});

$(".btn-horarios").click((e)=>{
    $("#qEntradas").show();
});

let horaElegida = $(".btn-horarios").click((e) =>{
    console.log(e.target.value)
});

let cantEntradas = $(".numEntradas").change(function(e){
    console.log(this.value)
});

function precioEntradas (a,b){
    let totalEntradas = a*b;
    console.log(totalEntradas);  
}

precioEntradas(cantEntradas, 2990);