/*Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()
*/

function rollDice(faces) {
  const result = Math.floor(Math.random() * faces) + 1;

  return result;
}


// Tirando un dado clásico de 6 caras
console.log("Tirada de 6 caras:", rollDice(6));

// Tirando un dado de rol de 20 caras
console.log("Tirada de 20 caras:", rollDice(20));

// Tirando una moneda (dado de 2 caras)
const coin = rollDice(2);
console.log("Resultado moneda:", coin === 1 ? "Cara" : "Cruz");