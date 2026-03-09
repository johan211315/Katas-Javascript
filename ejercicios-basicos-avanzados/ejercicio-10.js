/*Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
*/

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
 
  let sumaTotal = 0;

  // Sumamos todos los números del array
  for (let i = 0; i < numberList.length; i++) {
    sumaTotal += numberList[i];
  }

  // Dividimos el total entre la cantidad de elementos del array
  let promedio = sumaTotal / numberList.length;

  
  return promedio;
}


console.log(average(numbers)); 