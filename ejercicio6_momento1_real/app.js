function sumar()
{
    //Inicializar variables
    let contador = 0;

    //Conectarme con el mundo de HTML

    let tipoPizza = parseInt( document.getElementById('idEtiqueta1').value);
    let cantidadPizza = parseInt( document.getElementById('idEtiqueta2').value);
    let ingredienteExtraPizza = parseInt(document.getElementById('idEtiqueta3').value);


    let total = (tipoPizza*cantidadPizza) + ingredienteExtraPizza

    if ( tipoPizza == 14000 )
    {
        tipoPizza = "Queso"
    }
    else if(tipoPizza == 16000)
    {
        tipoPizza = "Jamon y Queso"
    }
    else {
        tipoPizza = "Especial"
    }

    if(ingredienteExtraPizza==2000){
        ingredienteExtraPizza = "Maíz"
    }
    else if(ingredienteExtraPizza==10000){
        ingredienteExtraPizza = "Queso"
    }
    else if(ingredienteExtraPizza==15000){
        ingredienteExtraPizza = "Pollo"
    }
    else if(ingredienteExtraPizza==0){
        ingredienteExtraPizza = "No eligio ingrediente extra"
    }

    //Mostrar elementos

    let punto__dos__velMetros__JS = document.getElementById("id__puntoUno").innerHTML = "La pizza escogida es :" + tipoPizza + ", con una cantidad de :" + cantidadPizza + "pizzas" + ", el ingrediente escogido es: " + ingredienteExtraPizza + ", su precio total es:" + total


    
}


function calcularFactorial() {
    var numero = parseInt(document.getElementById("numero").value);
    var factorial = 1;

    for ( var iteracion = 1 ; iteracion <= numero; iteracion++) {
        
        console.log(factorial *= iteracion);

    }

    document.getElementById("resultado").innerHTML = "El factorial de " + numero + " es: " + factorial;
}
