//Buscar un numero aleatorio entre el 1 y el 100, los guardamos en una variable

var numeroAdivinar= Math.floor((Math.random()*100)+1) // Generando un numero aleatorio en una variable entre 1 y 100 que sea un numero entoero

//Math.floor es un metodo estandar que redondea un numero dado
//Math.random es un metodo para producir numeros aleatorios

var contadorRespuestas = 0;

function adivinar()
{

    //Obtener el numero de respuestas posibles
    var numeroRespuestas = document.getElementById("numeroRespuestas").value;

//disabled es una propiedad para asignar a un elemento como desabilitado

//isNumber es un metodo predefinido de JavaScript que se utiliza para veridicar si el argumento especificado es un numero o no

    if(document.getElementById("numeroRespuestas").disabled=false)
    {
        if(isNumber(numeroRespuestas) && numeroRespuestas>0 )
        {
            document.getElementById("numeroRespuestas").disabled=true;
            document.getElementById("numero").disabled=false;
            document.getElementById("numero").focus(); // parar el cursor en el elemento
        }

    }

    else
    {
        //Obtener el contenido del div que contiene las respuestas
        var respuestas = document.getElementById("respuestas").innerHTML;

        if(contadorRespuestas<numeroRespuestas)
        {
            //Obtener el numero ingresado por el usuario
            var numero = document.getElementById("numero").value;
            //no sea decimal que sea mayor a cero, y menor a 100
            if(isNumber(numero)  && numero>0 && numero<100)
            {
                //Aumentar el numero de respuestas dadas
                contadorRespuestas += 1;

                //Opcion de respuesta 1, el numero ingresado sea mayor a la respuesta correcta

                if(numero>numeroAdivinar)
                {
                    //El numero superior y añadimos un texto a las respuestas 
                    respuestas += "<br>" + numero + " - El numero que buscas es inferior";
                    document.getElementById("numero").focus();
                }

                //Opcion de respuesta 2, el numero ingresado sea menor
                else if( numero<numeroAdivinar)
                {
                    respuestas+= "<br>" + numero + " - El numero que buscas es superior";
                    document.getElementById("numero").focus();
                }
                else
                {
                    respuestas+= "<br><span class='acertado' >"+numero+  " - HAS ACERTADO!!!" + "</span>"

                    fin()
                }
                //Borramos el valor del numero
                document.getElementById("numero").value="";


            }

            else
            {
                respuestas+= "<br><span  class='error' >" + numero + " - Tiene que ser un valor numerico entre 1 y 100 </span>";
            }
            
        }
        else
        {
            respuestas+= "<br> <span class='error' >  NO HAS ACERTADO, EL NUMERO CORRECTO ERA: " + numeroAdivinar + "</span>"
            fin();
        }
        //Traemos todas las respuestas
        document.getElementById("respuestas").innerHTML=respuestas;
    }
//Devolvemos false para que el formulario no envie los valores

return false

}



function fin(){
    //DESABILITAR LA CASILLA por superar el numero de intentos o porque acerto el nupero 
    document.getElementById("numero").disabled=true;
    document.getElementById("btnEnviar").disabled=true;
}

function isNumber(n)
{
    return !isNaN(parseFloat(n) && isFinite(n));
}