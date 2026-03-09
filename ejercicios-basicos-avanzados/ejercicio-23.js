/*Usa un bucle para crear 3 arrays de películas filtrados por categorías.
Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.
*/

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

// Creamos los 3 arrays vacíos para filtrar
const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];

// Recorremos el array original con un bucle for...of
for (let movie of movies) {
  
  // Aplicamos las condiciones de filtrado
  if (movie.durationInMinutes < 100) {
    // Película pequeña
    smallMovies.push(movie);
  } 
  else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    // Película mediana (entre 100 y 200)
    mediumMovies.push(movie);
  } 
  else {
    // Película grande (más de 200)
    largeMovies.push(movie);
  }
}

// Imprimimos los resultados por consola
console.log("Películas pequeñas (menos de 100 min):", smallMovies);
console.log("Películas medianas (entre 100 y 200 min):", mediumMovies);
console.log("Películas grandes (más de 200 min):", largeMovies);