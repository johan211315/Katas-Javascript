/*Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
*/

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i; // Devolvemos la posición actual
    }
  }
  return -1; // Si salimos del bucle sin retornar, es que no existe
}


const mainCharacters = ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"];

console.log(findArrayIndex(mainCharacters, "Han Solo")); 
console.log(findArrayIndex(mainCharacters, "Rey"));      
console.log(findArrayIndex(mainCharacters, "Yoda"));     



/*Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
*/

function removeItem(array, text) {
  // Buscamos el índice usando nuestra función anterior
  const index = findArrayIndex(array, text);

  // Si el índice es distinto de -1, significa que el texto existe
  if (index !== -1) {
    // Borramos 1 elemento en la posición 'index'
    array.splice(index, 1);
  } else {
    console.log(`El elemento "${text}" no se encontró, no se borró nada.`);
  }

  // Retornamos el array modificado
  return array;
}


console.log("Borrando a Leia:", removeItem(mainCharacters, "Leia"));


console.log("Borrando a Anakin:", removeItem(mainCharacters, "Anakin"));


console.log("Intentando borrar a Darth Maul:", removeItem(mainCharacters, "Darth Maul"));
