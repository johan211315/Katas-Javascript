/*Escribe una función que calcule el promedio de duración de una lista de películas. Recibe un array de películas, cada una con su duración en minutos.
*/

const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
];

function averageMovieDuration(movieList) {
  // Si el array está vacío, devolvemos 0 para evitar errores matemáticos
  if (movieList.length === 0) return 0;

  let totalMinutes = 0;

  // Sumamos la duración de cada película
  for (const movie of movieList) {
    totalMinutes += movie.duration;
  }

  // Calculamos el promedio
  const average = totalMinutes / movieList.length;

  //  Devolvemos el resultado
  return average;
}

console.log(`El promedio de duración es: ${averageMovieDuration(movies)} minutos.`);
