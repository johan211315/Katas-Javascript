/*Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".
*/

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

//Recorremos el array de usuarios
for (let user of users) {
  
  //Primera condición: Si el usuario tiene menos de 18 años
  if (user.years < 18) {
    console.log("Usuarios menores de edad: " + user.name);
  }

  //Segunda condición: Si el usuario tiene 18 años o más
  if (user.years >= 18) {
    console.log("Usuarios mayores de edad: " + user.name);
  }
}