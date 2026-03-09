/*Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
*/

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  // 1. Guardamos la primera palabra como referencia inicial
  let longestWord = stringList[0];

  // 2. Empezamos el bucle en 1 
  for (let i = 1; i < stringList.length; i++) {
    
    // 3. Comparamos la longitud de la palabra actual con la más larga guardada
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord(avengers)); 