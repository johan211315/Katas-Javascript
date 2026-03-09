/*Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

Pista: puedes generar un nuevo array y devolverlo.*/

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
  // Creamos un nuevo array vacío para guardar los valores únicos
  let valoresUnicos = [];

  // Recorremos el array original
  for (let i = 0; i < list.length; i++) {
    let elementoActual = list[i];

    // Comprobamos si el elemento YA ESTÁ en nuestro nuevo array
    if (!valoresUnicos.includes(elementoActual)) {
      
      // Si no está, lo empujamos dentro
      valoresUnicos.push(elementoActual);
    }
  }

  // Devolvemos el nuevo array limpio de duplicados
  return valoresUnicos;
}


console.log(removeDuplicates(duplicates)); 
