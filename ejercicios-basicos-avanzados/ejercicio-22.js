/*Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas.
*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

// Creamos un contador para saber qué fruta toca usar
let fruitIndex = 0;

// Recorremos el horario de comidas
for (let i = 0; i < foodSchedule.length; i++) {
  
  // Comprobamos si la comida NO es vegana
  if (foodSchedule[i].isVegan === false) {
    
    // Reemplazamos el nombre por la fruta que toque
    foodSchedule[i].name = fruits[fruitIndex];
    
    // Cambiamos su estado a vegano 
    foodSchedule[i].isVegan = true;
    
    //  Sumamos 1 al índice de frutas para la próxima sustitución
    fruitIndex++;
  }
}

console.log(foodSchedule);