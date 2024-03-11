
function mostrarDiv() {
    document.getElementById("resultado").style.display = "block";
}

// function ocultarDiv() {
//     document.getElementById("resultado").style.display = "none";
// }

class Rectangulo{
    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
    }
};

let area;

function calcular(){
    const ancho = parseFloat(document.getElementById("anchoInput").value);
    const alto = parseFloat(document.getElementById("altoInput").value);

    const rectangulo1 = new Rectangulo(ancho, alto);
    area = areaRectangulo(rectangulo1);
}; 

function areaRectangulo(objRectangulo){
    let alto = objRectangulo.alto;
    let ancho = objRectangulo.ancho;
    
    return alto * ancho;
    
};

function resultado(){
    mostrarDiv();
    calcular();
}; 



window.addEventListener("load", function(){
    document.getElementById("btnCalcular").addEventListener("click", resultado);

});