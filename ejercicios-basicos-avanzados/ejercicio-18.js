/*Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.

Imprime en un console log el array resultante.*/

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

//Recorremos el array con un bucle for clásico
for (let i = 0; i < placesToTravel.length; i++) {
  
  //Guardamos el destino actual en una variable para que sea más fácil de leer
  let destinoActual = placesToTravel[i];

  //Comprobamos si el id es 11 O (||) si el id es 40
  if (destinoActual.id === 11 || destinoActual.id === 40) {
    
    // Si coincide, borramos 1 elemento en la posición actual (i)
    placesToTravel.splice(i, 1);
    
    //Restamos 1 a la i para compensar que el array ahora es más corto
    i--; 
  }
}


console.log(placesToTravel);