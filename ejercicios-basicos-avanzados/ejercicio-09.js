/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.

Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.
*/

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let sumaTotal = 0;

  // Recorremos el array desde la primera posición hasta la última
  for (let i = 0; i < numberList.length; i++) {
    
    // Sumamos el número actual al total que ya teníamos
    sumaTotal = sumaTotal + numberList[i]; 
  }

  return sumaTotal;
}

console.log(sumNumbers(numbers));