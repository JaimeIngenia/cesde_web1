


function area ()
{
    
    let punto__uno__ancho__JS = document.getElementById('id__input__ancho').value;
    let punto__uno__alto__JS = document.getElementById("id__input__alto").value;

    
    
    let superficie = parseFloat(punto__uno__ancho__JS) * parseFloat(punto__uno__alto__JS) ;
    
    let punto__uno__response__JS = document.getElementById('id__input__response').innerHTML = "La superficie del rectángulo es: " + superficie;
    
}


function velocidad ()
{
    
    let punto__dos__velKM__JS = document.getElementById('id__input__velocidad_km').value;
    
    
    let vel_metros = parseFloat(punto__dos__velKM__JS) * 1000 ;
    let vel_millas = parseFloat(punto__dos__velKM__JS) * 0.621371 ;


    let punto__dos__velMetros__JS = document.getElementById("id__puntoDos__input__response1").innerHTML = vel_metros + " metros/hora";

    let punto__dos__velMillas__JS = document.getElementById("id__puntoDos__input__response2").innerHTML = vel_millas + "millas/hora";
    

    
}


// Obtener referencias a los inputs
var inputOriginal = document.getElementById('inputOriginal');
var inputReflejo = document.getElementById('inputReflejo');

// Agregar el evento 'input' al inputOriginal
inputOriginal.addEventListener('input', function() {
    // Copiar el valor del inputOriginal al inputReflejo en tiempo real
    var nuevoValor = parseFloat ((inputOriginal.value *(9/5))+32)
    inputReflejo.value = nuevoValor;

    if(inputOriginal.value<=0)
    {
        let punto__dos__velMillas__JS = document.getElementById("id__puntoTres__input__response").innerHTML = "Nos congelamos";
    }
    else if(inputOriginal.value>=5 && inputOriginal.value<=15) 
    {
        let punto__dos__velMillas__JS = document.getElementById("id__puntoTres__input__response").innerHTML = "Esta haciendo frio";
    }
    else if(inputOriginal.value>=16 && inputOriginal.value<=25) 
    {
        let punto__dos__velMillas__JS = document.getElementById("id__puntoTres__input__response").innerHTML = "Está templado el día";
    }
    else if(inputOriginal.value>=38) 
    {
        let punto__dos__velMillas__JS = document.getElementById("id__puntoTres__input__response").innerHTML = "Tiene fiebre o es el apocalipsis.";
    }



});

inputReflejo.addEventListener('input',function(){
    var nuevoValor = parseFloat (((inputReflejo.value -32) * (5/9) ))
    inputOriginal.value = nuevoValor;


    if(inputReflejo.value<=32)
    {
        let punto__dos__velMillas__JS = document.getElementById("id__puntoTres__input__response").innerHTML = "Nos congelamos";
    }
    else if(inputReflejo.value>=41 && inputOriginal.value<=59) 
    {
        let punto__dos__velMillas__JS = document.getElementById("id__puntoTres__input__response").innerHTML = "Esta haciendo frio";
    }
    // else if(inputOriginal.value>=16 && inputOriginal.value<=25) 
    // {
    //     let punto__dos__velMillas__JS = document.getElementById("id__puntoTres__input__response").innerHTML = "Está templado el día";
    // }
    // else if(inputOriginal.value>=38) 
    // {
    //     let punto__dos__velMillas__JS = document.getElementById("id__puntoTres__input__response").innerHTML = "Tiene fiebre o es el apocalipsis.";
    // }


});
