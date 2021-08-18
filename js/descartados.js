//Forma enseñada por el tutor para generar elementos desde el JS
let grilla = document.getElementsByID("grillaPelis")


const card = (peliculas) =>`
    <img src="${peliculas.img}">
    <div>${peliculas.nombre}</div>
    <div>${peliculas.horarios}</div>
`

fullBody[0].innerHTML = peliculas.map(pelicula => card(pelicula) ).join("<br>")


//Estas son las líneas que generan la info de cada película en la página buy-page
const pelisActuales = document.body.getElementsByClass('infoPeli');

cardPeli.addEventListener('click', gotoBuy);

function gotoBuy(event){
    event.preventDefault();

    for (let i = 1; i <12; i++){
        if (event.click.grillaPelis[0]){
            infoPeli(pelicula.img, pelicula.nombre, pelicula.horario);
            break;}
        if (event.onmouseup.grillaPelis[1]){
            infoPeli(pelicula.img, pelicula.nombre, pelicula.horario);
            break;}
        if (event.onmouseup.grillaPelis[2]){
            infoPeli(pelicula.img, pelicula.nombre, pelicula.horario);
            break;}
        if (event.onmouseup.grillaPelis[3]){
            infoPeli(pelicula.img, pelicula.nombre, pelicula.horario);
            break;}
        if (event.onmouseup.grillaPelis[4]){
            infoPeli(pelicula.img, pelicula.nombre, pelicula.horario);
            break;}
        if (event.onmouseup.grillaPelis[5]){
            infoPeli(pelicula.img, pelicula.nombre, pelicula.horario);
            break;}
        if (event.onmouseup.grillaPelis[6]){
            infoPeli(pelicula.img, pelicula.nombre, pelicula.horario);
            break;}
        if (event.onmouseup.grillaPelis[7]){
            infoPeli(pelicula.img, pelicula.nombre, pelicula.horario);
            break;}
        if (event.onmouseup.grillaPelis[8]){
            infoPeli(pelicula.img, pelicula.nombre, pelicula.horario);
            break;}
        if (event.onmouseup.grillaPelis[9]){
            infoPeli(pelicula.img, pelicula.nombre, pelicula.horario);
            break;}
        if (event.onmouseup.grillaPelis[10]){
            infoPeli(pelicula.img, pelicula.nombre, pelicula.horario);
            break;}
        if (event.onmouseup.grillaPelis[11]){
            infoPeli(pelicula.img, pelicula.nombre, pelicula.horario);
            break;}
    } 
}

function infoPeli(img, nombre, horario){
    const card = document.createElement('div')

    card.innerHTML = `<img src="${pelicula.img}" alt="${pelicula.nombre}">
    <h3> ${pelicula.nombre} </h3>
    <h3>horarios: ${pelicula.horario} </h3>`;
    
    infoPelicula.appendChild(card)
}

//precio con descuento
let precioUnitario= parseInt(valorQEntradas);
for (let i = 1; i <=5; i++){
    if (valorQEntradas <= 2){
        precio = 3490;
        break;
    }
    if (valorQEntradas <= 4){
        precio = 2490;
        break;
    }
    else if (valorQEntradas >= 5){
        precio = 1990;
        break;
    }
}

function precioEntradas (a,b){
    let totalEntradas = a*b;
    return (totalEntradas);
}


precioUnitario(valorQEntradas);

precioEntradas(valorQEntradas, precioUnitario);

// //Esta es la funcion que determina el precio
function valorTotal(a,b){
    let totalEntradas = a*b;
    return(totalEntradas);
}