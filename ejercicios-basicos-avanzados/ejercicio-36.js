/*Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array con los nombres de los actores y sus edades.
*/

const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

function calculateActorsAges(actorList) {
  //  Obtenemos el año actual dinámicamente
  const currentYear = new Date().getFullYear();
  
  //  Creamos el array donde guardaremos los resultados
  const actorsWithAges = [];

  //  Recorremos la lista original
  for (const actor of actorList) {
    //  Calculamos la edad
    const age = currentYear - actor.born;

    // Creamos un nuevo objeto con la información solicitada y lo añadimos al array
    actorsWithAges.push({
      name: actor.name,
      age: age
    });
  }

  // Retornamos el array final
  return actorsWithAges;
}


console.log(calculateActorsAges(actors));