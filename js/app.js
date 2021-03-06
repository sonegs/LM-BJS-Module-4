 // Detecta el valor de los inputs

 function getNumber(primerNumero, segundoNumero) {
     primerNumero = document.getElementById("number1").value;
     segundoNumero = document.getElementById("number2").value;
     return [parseInt(primerNumero), parseInt(segundoNumero)]; //los paso a int para que pueda realizar la suma
 }

 // Controla el error del campo vacío y devuelve el resultado

 function result(primerNumero, segundoNumero, operation) {
     if (!primerNumero || !segundoNumero) {
         return "¡ERROR!";
     } else {
         if (operation == "suma") {
             return primerNumero + segundoNumero;
         } else if (operation == "resta") {
             return primerNumero - segundoNumero;
         } else if (operation == "multiplicacion") {
             return primerNumero * segundoNumero;
         } else if (operation == "division") {
             return primerNumero / segundoNumero;
         }
     }
 }

 // Calculadora

 function sumar() {
     let operation = "suma";
     calculate(operation);
 }

 function restar() {
     let operation = "resta";
     calculate(operation);
 }

 function multiplicar() {
     let operation = "multiplicacion";
     calculate(operation);
 }

 function dividir() {
     let operation = "division";
     calculate(operation);
 }

 function calculate(operation, num1, num2) {
     let number = getNumber(num1, num2); // recoge los valores introducidos
     return document.getElementById("resultado").innerText = result(number[0], number[1], operation);
 }

 // Escucha los botones de la calculadora

 document.getElementById("sumar").addEventListener("click", sumar);
 document.getElementById("restar").addEventListener("click", restar);
 document.getElementById("multiplicar").addEventListener("click", multiplicar);
 document.getElementById("dividir").addEventListener("click", dividir);