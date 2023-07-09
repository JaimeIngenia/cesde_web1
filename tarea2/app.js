var frutas = ["Banano","Ciruela","Lulo","Mandarina","Naranja"]

h3_eje1 = document.getElementById("id_h3_eje1").innerHTML = "El array es: " + frutas;
p_eje1 = document.getElementById("id_p_eje1").innerHTML= "Mostrar las 3 del medio: " + frutas.slice(1,4);



//Ejercicio 2

        //primero
var clasificaciones = ["Ana","Oswaldo","Raul","Celia","María","Antonio"];
p_eje2 = document.getElementById("id_p_eje2").innerHTML= " - Primero : El array clasificaciones es : " + clasificaciones;
        //segundo
const indiceCelia = clasificaciones.indexOf("Celia");
const indiceRaul = clasificaciones.indexOf("Raul");

// console.log(clasificaciones);
clasificaciones.splice(indiceCelia, 1); // Eliminar "Celia" del array
// console.log(clasificaciones);
clasificaciones.splice(indiceRaul, 0, "Celia"); // Insertar "Celia" antes de "Raúl"
// console.log(clasificaciones);

p_2_eje2 = document.getElementById("id_p_2_eje2").innerHTML= " - Segundo : Raul adelanta a Celia : " + clasificaciones;
        //tercero
clasificaciones.pop();

p_3_eje2 = document.getElementById("id_p_3_eje2").innerHTML= "- Tercero : Antonio es descalificado y se elimina del concurso : " + clasificaciones;

        //cuarto
clasificaciones.splice(1,0,"Roberto","Amaya");

p_4_eje2 = document.getElementById("id_p_4_eje2").innerHTML= "- Cuarto : Delante de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden : " + clasificaciones;
        //Quinto
clasificaciones.unshift("Marta");

p_5_eje2 = document.getElementById("id_p_5_eje2").innerHTML= "- Quinto : Hay una nueva participante que pasa a encabezar la clasificación: Marta : " + clasificaciones;





//EJERCICIO 3

var frutas_y_verduras = ["Zanahoria","Banano","Manzana","Pera","Cebolla","papa","Fresas","Ajo","Sandia"];

var frutas = ["Banano","Manzana","Pera","Fresas","Sandia"];
var verduras = ["Zanahoria","Cebolla","papa","Ajo"]

        //primero
p_eje3 = document.getElementById("id_p_eje3").innerHTML= " - Primero : El array Frutas y verduras es : " + frutas_y_verduras;

        //Segundo
function mostrarResultado(titulo, elementos, array) {
    var resultadoElemento = document.createElement("ul");
    //document.body.appendChild(resultadoElemento);
    document.getElementById("id_divJaime").appendChild(resultadoElemento);

    var tituloElemento = document.createElement("h2");
    tituloElemento.textContent = titulo;
    resultadoElemento.appendChild(tituloElemento);

    elementos.forEach(function(elemento) {
    var indice = array.indexOf(elemento);
    var elementoLi = document.createElement("li");
    elementoLi.textContent = elemento + " - Posición: " + indice;
    resultadoElemento.appendChild(elementoLi);
    });
}

p_2_eje3 = document.getElementById("id_p_2_eje3").innerHTML= " - Segundo : Posición Frutas y verduras : "  ;


mostrarResultado("Frutas:", frutas, frutas_y_verduras);
mostrarResultado("Verduras:", verduras, frutas_y_verduras);

        
// function obtenerPosiciones(elementos, array) {
//     var posiciones = [];
    
//     elementos.forEach(function(elemento) {
//         var indice = array.indexOf(elemento);
//         posiciones.push(indice);
//     });
    
//     return posiciones;
// }

// function mostrarResultado(elementos, posiciones) {
//     elementos.forEach(function(elemento, indice) {
//       //console.log(elemento + " - Posición: " + posiciones[indice]);
//       document.getElementById("id_p_3_eje3").innerHTML=elemento + " - Posición: " + posiciones[indice]
// })};
        
// var posicionesFrutas = obtenerPosiciones(frutas, frutas_y_verduras);
// var posicionesVerduras = obtenerPosiciones(verduras, frutas_y_verduras);
        
// console.log("Posición de las frutas:");
// mostrarResultado(frutas, posicionesFrutas);

// console.log("\nPosición de las verduras:");
// mostrarResultado(verduras, posicionesVerduras);


//p_2_eje3 = document.getElementById("id_p_2_eje3").innerHTML= " - Segundo : Posición Frutas : " + mostrarResultado(frutas, posicionesFrutas) ;


//p_3_eje3 = document.getElementById("id_p_3_eje3").innerHTML= " - Segundo : Posición Verduras : " + mostrarResultado(verduras, posicionesVerduras);


//EJERCICIO 4

function mostrarResultado2(titulo, elementos, array) {
        var resultadoElemento = document.createElement("ul");
        //document.body.appendChild(resultadoElemento);
        document.getElementById("id_div_eje4").appendChild(resultadoElemento);
    
        var tituloElemento = document.createElement("h2");
        tituloElemento.textContent = titulo;
        resultadoElemento.appendChild(tituloElemento);
    
        elementos.forEach(function(elemento) {
        var indice = array.indexOf(elemento);
        var elementoLi = document.createElement("li");
        elementoLi.textContent = elemento + " - Posición: " + indice;
        resultadoElemento.appendChild(elementoLi);
        });
    }

p_2_eje3 = document.getElementById("id_p_2_eje3").innerHTML= " - Resultado solo frutas : " + mostrarResultado2("Frutas:", frutas, frutas_y_verduras)   ;






//QUINTO

// Arreglos

var arreglo1 = [3, 5, 9, 10, 35, 42, 12, 22, 25];
var arreglo2 = [9, 5, 33, 12, 7, 20, 22, 3, 8];

// Crear representación en HTML
var resultadoHTML = '<p>resultado:</p>';

// Calcular y mostrar las sumas
for (var i = 0; i < arreglo1.length; i++) {
  var suma = arreglo1[i] + arreglo2[i];
  resultadoHTML += '<p>' + arreglo1[i] + ' + ' + arreglo2[i] + ' = ' + suma + '</p>';
}

// Mostrar resultado en el documento
document.getElementById('resultado').innerHTML = resultadoHTML;
