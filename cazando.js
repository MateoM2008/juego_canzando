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
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"#ecad2e");
}

function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"#825e17b4");
}

function iniciarJuego(){
    graficarGato();
    graficarComida();
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto)
}