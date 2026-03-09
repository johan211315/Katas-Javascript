/*Dado el siguiente código usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.

Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.

Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en JavaScript.
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

//  Creamos un objeto vacío que servirá de contador
const soundsCount = {};

// Recorremos el array de usuarios con for...of
for (const user of users) {
  
  // Recorremos las llaves (nombres de los sonidos) con for...in
  for (const soundKey in user.favoritesSounds) {
    
    // Lógica de conteo:
    // Si el sonido ya existe como propiedad en soundsCount...
    if (soundsCount[soundKey]) {
      // ...le sumamos 1 a su valor actual
      soundsCount[soundKey]++;
    } else {
      // ...si no existe, lo creamos e iniciamos el conteo en 1
      soundsCount[soundKey] = 1;
    }
  }
}

console.log(soundsCount);