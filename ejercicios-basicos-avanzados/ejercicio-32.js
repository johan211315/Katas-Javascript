/*Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.
*/

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(list) {
  //  Tomamos el primer mutante como referencia inicial
  let oldest = list[0];

  // Recorremos el array empezando desde la segunda posición
  for (let i = 1; i < list.length; i++) {
    
    //  Si el año del mutante actual es MENOR al que tenemos guardado...
    if (list[i].year < oldest.year) {
      
      //  ...actualizamos nuestra referencia
      oldest = list[i];
    }
  }

  // Retornamos el objeto completo del mutante más antiguo
  return oldest;
}


const result = findOldestXMen(xMen);
console.log(`El X-Men más antiguo es ${result.name}, que apareció en ${result.year}.`);

