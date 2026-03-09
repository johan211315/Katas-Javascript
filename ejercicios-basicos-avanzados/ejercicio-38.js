/*Dado el siguiente código usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
*/

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

//Inicializamos los acumuladores
let totalVolume = 0;
let totalSounds = 0;

// Usamos for...of para recorrer el array de usuarios
for (const user of users) {
  
  // Usamos for...in para recorrer las propiedades del objeto favoritesSounds
  for (const soundKey in user.favoritesSounds) {
    
    // Accedemos al objeto del sonido usando la llave 
    const soundData = user.favoritesSounds[soundKey];
    
    // Sumamos el volumen y aumentamos el contador de sonidos
    totalVolume += soundData.volume;
    totalSounds++;
  }
}

// Calculamos la media final
const averageVolume = totalVolume / totalSounds;

console.log("Volumen total acumulado:", totalVolume);
console.log("Número total de sonidos:", totalSounds);
console.log("La media de volumen es:", averageVolume);



