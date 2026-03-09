/*Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante.
*/

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  // Guardamos el valor de la primera posición en una variable temporal
  const temp = array[index1];

  // Copiamos el valor de la segunda posición en la primera
  array[index1] = array[index2];

  //  Ponemos el valor que guardamos en 'temp' en la segunda posición
  array[index2] = temp;

  //  Retornamos el array con los cambios hechos
  return array;
}



console.log("Intercambio 0 y 3:", swap(fantasticFour, 0, 3));

console.log("Intercambio 1 y 2:", swap(fantasticFour, 1, 2));
