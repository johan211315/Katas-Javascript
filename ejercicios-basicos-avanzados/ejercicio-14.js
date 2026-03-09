/*Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.*/


const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  //Creamos un objeto vacío que servirá como nuestro diccionario/contador
  let contador = {};

  // Recorremos el array de palabras
  for (let i = 0; i < list.length; i++) {
    let palabraActual = list[i];

    // Comprobamos si la palabra ya existe como propiedad en el objeto
    if (contador[palabraActual]) {
      // Si ya existe, le sumamos 1 a su valor
      contador[palabraActual]++;
    } else {
      contador[palabraActual] = 1;
    }
  }

  //Devolvemos el objeto completo con todos los recuentos
  return contador;
}


console.log(repeatCounter(words)); 
