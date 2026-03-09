/*Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".

Usa la función .includes de javascript.*/

const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

// Recorremos el array de productos
for (let i = 0; i < products.length; i++) {
  let productoActual = products[i];

  // Comprobamos si el texto del producto incluye la palabra exacta "Camiseta"
  if (productoActual.includes("Camiseta")) {
    
    // Si la incluye, lo mostramos por consola
    console.log(productoActual);
  }
}
