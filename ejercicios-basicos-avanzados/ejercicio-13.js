/*Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.*/

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, nameToSearch) {
  // Recorremos la lista completa
  for (let i = 0; i < nameList.length; i++) {
    
    // Comprobamos si el nombre actual coincide con el que buscamos
    if (nameList[i] === nameToSearch) {
      
      // Si coincide, devolvemos un objeto con el true y la posición (la i)
      return { encontrado: true, posicion: i };
    }
  }

  // Si el bucle termina y nunca entró al "if", significa que no existe
  return false;
}

console.log(nameFinder(names, 'Logan')); 
console.log(nameFinder(names, 'Thanos')); 