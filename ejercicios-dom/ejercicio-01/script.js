// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const btnShowMe = document.querySelector('.showme');
console.log(btnShowMe);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1Pillado = document.querySelector('#pillado');
console.log(h1Pillado);

// 1.3 Usa querySelector para mostrar por consola todos los p
const allPars = document.querySelectorAll('p');
console.log(allPars);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
const allPokemons = document.querySelectorAll('.pokemon');
console.log(allPokemons);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe"
const allTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log(allTestMe);

// 1.6 Usa querySelector para mostrar por consola el 3er personaje con el atributo data-function="testMe"
const thirdChar = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(thirdChar);