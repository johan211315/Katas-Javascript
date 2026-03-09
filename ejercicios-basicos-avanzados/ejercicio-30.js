/*Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género. 
*/

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

// Creamos el objeto donde clasificaremos las canciones
const playlistByGenre = {};

// Recorremos el array de canciones con un bucle for...of
for (const track of tracks) {
  
  // Extraemos el género para que el código sea más legible
  const genre = track.genre;

  // ¿Existe ya este género en nuestro objeto?
  if (!playlistByGenre[genre]) {
    
    // Si no existe, inicializamos un array vacío para ese género
    playlistByGenre[genre] = [];
  }
  
  // Añadimos la canción actual al array de su género correspondiente
  playlistByGenre[genre].push(track);
}

console.log(playlistByGenre);