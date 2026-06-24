let canvas=document.getElementById("areaJuego")
let ctx=canvas.getContext("2d")

const ALTO_GATO=40;
const ANCHO_GATO=90;
const ALTO_COMIDA=20;
const ANCHO_COMIDA=20;

let gatoX=canvas.width/2-(ALTO_GATO);
let gatoY=canvas.height/2-20;

let comidaX=canvas.width-(ANCHO_COMIDA);
let comidaY=canvas.height-(ALTO_COMIDA);

function graficarGato(){
    ctx.fillStyle="#ecad2e"
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO)
}

function graficarComida(){
    ctx.fillStyle="#825e17b4"
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA)  
}

function iniciarJuego(){
    graficarGato();
    graficarComida();
}