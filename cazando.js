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

let puntos=0;
let tiempo=10;

function graficarGato(){
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"#ecad2e");
}

function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"#825e17b4");
}

function iniciarJuego(){
    graficarGato();
    aparecerComida();
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto)
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function moverIzquierda(){
    gatoX=gatoX-10;
    actualizarPantalla();
}
function moverDerecha(){
    gatoX=gatoX+10;
    actualizarPantalla();
}
function moverArriba(){
    gatoY=gatoY-10;
    actualizarPantalla();
}
function moverAbajo(){
    gatoY=gatoY+10;
    actualizarPantalla();
}

function actualizarPantalla(){
    limpiarCanva();
    graficarGato();
    graficarComida();
    detertarColission();
}

function detertarColission(){
   if(comidaX + ANCHO_COMIDA > gatoX && comidaX < gatoX + ANCHO_GATO && comidaY + ALTO_COMIDA > gatoY && comidaY < gatoY + ALTO_GATO){
        //alert("Atrapado")
        puntos=puntos+1;
        mostrarEnSpam("puntos",puntos);
        aparecerComida();   
    }
}

function aparecerComida(){
    comidaX=generarAleatoria(0,canvas.width-ANCHO_COMIDA);
    comidaY=generarAleatoria(0,canvas.height-ALTO_COMIDA);
    actualizarPantalla();
}