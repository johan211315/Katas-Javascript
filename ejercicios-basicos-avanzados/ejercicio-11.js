/*Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.*/

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  
  let sumaTotal = 0;

  // Recorremos el array
  for (let i = 0; i < list.length; i++) {
    let elementoActual = list[i];

    // Comprobamos si el elemento es un número
    if (typeof elementoActual === "number") {
      sumaTotal += elementoActual;
    } 
    // Si no es número, comprobamos si es un string 
    else if (typeof elementoActual === "string") {
      sumaTotal += elementoActual.length; // Sumamos su cantidad de letras
    }
  }

  // dividimos la suma total entre la cantidad de elementos
  return sumaTotal / list.length;
}

console.log(averageWord(mixedElements));