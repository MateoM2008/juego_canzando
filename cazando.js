let canvas=document.getElementById("areaJuego")
let ctx=canvas.getContext("2d")

const ALTO_GATO=30;
const ANCHO_GATO=60;

function graficarGato(){
    ctx.fillStyle="#825F17"
    ctx.fillRect(canvas.width/2-(ALTO_GATO),canvas.height/2,ANCHO_GATO,ALTO_GATO)
}