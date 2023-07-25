function indiceMasaCorporal()
{
    let punto__cuatro__estatura__JS = document.getElementById('id__input__estatura').value;
    let punto__cuatro__peso__JS = document.getElementById("id__input__peso").value;

    let IMC = parseFloat(punto__cuatro__peso__JS) / ( parseFloat(punto__cuatro__estatura__JS) * parseFloat(punto__cuatro__estatura__JS) ) ;

    if(IMC<18.5)
    {
        let punto__uno__response__JS = document.getElementById('id__puntoCuatro__input__response').innerHTML = "Bajo peso debe ir al nutricionista ";
    }
    else if(IMC>18.5 && IMC<24.9) 
    {
        let punto__uno__response__JS = document.getElementById('id__puntoCuatro__input__response').innerHTML = "Normal ";
    }
    else if(IMC>25.0 && IMC<29.9) 
    {
        let punto__uno__response__JS = document.getElementById('id__puntoCuatro__input__response').innerHTML = "Sobrepeso ";
    }
    else if(IMC>30) 
    {
        let punto__uno__response__JS = document.getElementById('id__puntoCuatro__input__response').innerHTML = "Obeso debe ir al nutricionista";
    }



    // let punto__uno__response__JS = document.getElementById('id__puntoCuatro__input__response').innerHTML = "La superficie del rectángulo es: " + superficie;
    

}

// QUINTO PUNTO

function calcularDiasYSemanasHastaFinDeAnio() {
    // Obtener la fecha actual ingresada por el usuario
    var fechaInput = document.getElementById("fechaInput").value;
    var fechaActual = new Date(fechaInput);
  
    // Obtener el año actual
    var añoActual = fechaActual.getFullYear();
  



    // Obtener la fecha de fin de año
    var fechaFinDeAnio = new Date(añoActual, 11, 31); // 11 representa diciembre (los meses se indexan desde 0)
  
    // Calcular la diferencia en milisegundos entre la fecha actual y la fecha de fin de año
    var diferenciaMilisegundos = fechaFinDeAnio - fechaActual;
  
    // Calcular el número de días y de semanas
    var diasFaltantes = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
    var semanasFaltantes = Math.floor(diasFaltantes / 7);
  
    // Mostrar los resultados
    var resultado = "Faltan " + diasFaltantes + " días y " + semanasFaltantes + " semanas para terminar el año.";


    document.getElementById("resultado").innerHTML = resultado;
  }