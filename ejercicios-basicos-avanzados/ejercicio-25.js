/*Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.
*/

const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

// Inicializamos los contadores en 0
let antesDel2000 = 0;
let despuesDel2000 = 0;

// Recorremos el array de películas
for (const movie of movies) {
  
  // Comprobamos el año de lanzamiento
  if (movie.releaseYear < 2000) {
    // Si es menor a 2000, sumamos 1 al primer contador
    antesDel2000++;
  } else {
    // Si es 2000 o posterior, sumamos 1 al segundo contador
    despuesDel2000++;
  }
}

// Imprimimos los resultados finales
console.log("Películas de antes del 2000:", antesDel2000);
console.log("Películas del 2000 o posteriores:", despuesDel2000);

