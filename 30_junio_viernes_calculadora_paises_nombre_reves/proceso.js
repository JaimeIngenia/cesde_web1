//crear varios arreglos que almacenen las ciudades
//array: una variable que almacena mas de un dato

let ciudad_1 = new Array(
    "Buenos Aires",
    "La plata",
    "Mar de la plata",
    "Ciudad de córdoba",
    "Rosario"
  );
  
  let ciudad_2 = new Array(
    "La paz",
    "Santa cruz dela sierra",
    "Sucre",
    "El alto",
    "Tarija"
  );
  
  let ciudad_3 = new Array(
    "Bogotá",
    "Medellín",
    "Cali",
    "Santa Marta",
    "Cartagena"
  );
  
  let ciudad_4 = new Array(
    "Copenhague",
    "Aarhus",
    "Aalborg",
    "Odense",
    "Elsinor"
  );
  
  //crear otro arreglo que almacene las 4 variables anteriores
  
  let ciudades = [[], ciudad_1, ciudad_2, ciudad_3, ciudad_4];
  
  //crear la función
  
  function MostrarCiudad() {
    //crear una variable que almacene la opcion seleccionada de los paises
    let pais = document.getElementById("pais").value;
    //verificar que la opcion seleccionada sea diferente de 0
    if (pais != 0) {
      let misCiudades = ciudades[pais];
      let numeroCiudades = misCiudades.length;
  
      //marcar el numero de ciudades en el select
      document.formulario.ciudades.length = numeroCiudades;
      //para cada ciudad del arreglo le vamos a mostrar en el select de ciudades, 
      //se convierten en las opciones
  
      for(i=0;numeroCiudades;i++){
          document.formulario.ciudades.options[i].value = misCiudades[i];
  
          document.formulario.ciudades.options[i].text = misCiudades[i];
      }
    }
  }