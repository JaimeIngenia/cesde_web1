function Calcular() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let operacion = document.getElementById("operaciones").value;
    let resultado;
  
    if (operacion == 0) {
      resultado = numero1 + numero2;
    } else if (operacion == 1) {
      resultado = numero1 - numero2;
    } else if (operacion == 2) {
      resultado = numero1 * numero2;
    } else if (operacion == 3) {
      resultado = numero1 / numero2;
    }
  
    document.getElementById("resultado").innerHTML =
      "El resultado de la operación seleccionada es: " + resultado;
  }