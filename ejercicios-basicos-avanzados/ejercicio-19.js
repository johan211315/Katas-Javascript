/*Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa palabra).

Recuerda usar la función .includes() para comprobar la palabra.
*/

const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

// Creamos un nuevo array vacío para guardar los juguetes permitidos
let juguetesSinGato = [];

// Recorremos el array original con for...of
for (let juguete of toys) {
    
    // Comprobamos si el nombre NO incluye la palabra 'gato'
    if (!juguete.name.includes('gato')) {
        
        //  Si está limpio de gatos, lo añadimos al nuevo array
        juguetesSinGato.push(juguete);
    }
}

console.log(juguetesSinGato);