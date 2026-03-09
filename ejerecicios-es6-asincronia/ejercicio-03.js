/* 
3.1 Dado el siguiente array, devuelve un array con sus nombres
utilizando .map().
*/

const users = [
	{id: 1, name: 'Abel'},
	{id: 2, name: 'Julia'},
	{id: 3, name: 'Pedro'},
	{id: 4, name: 'Amanda'}
];

const userNames = users.map(user => user.name);

console.log(userNames);



/* 
3.2 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
empiece por 'A'.
*/
const users1 = [
	{id: 1, name: 'Abel'},
	{id: 2, name: 'Julia'},
	{id: 3, name: 'Pedro'},
	{id: 4, name: 'Amanda'}
];

const anacletoUsers = users.map(user1 => {
    if (user1.name[0] === 'A') {
        return 'Anacleto';
    }
    return user1.name;
});

console.log(anacletoUsers); 



/* 
3.3 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y añade al valor de .name el string ' (Visitado)'
cuando el valor de la propiedad isVisited = true.
*/

const cities = [
	{isVisited: true, name: 'Tokyo'},
	{isVisited: false, name: 'Madagascar'},
	{isVisited: true, name: 'Amsterdam'},
	{isVisited: false, name: 'Seul'}
];

const cityStatus = cities.map(city => {
    if (city.isVisited) {
        return city.name + ' (Visitado)';
    }
    return city.name;
});

console.log(cityStatus); 




