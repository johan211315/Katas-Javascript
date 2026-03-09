/*For...in: Usa un for...in para imprimir por consola los datos del alienígena.

Debería tener este formato cada uno de los console.log: "La propiedad ____ tiene cómo valor: ____"*/

const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (let propiedad in alien) {
    
    // Guardamos el valor en una variable para que quede más claro
    let valor = alien[propiedad];

    // Imprimimos el mensaje usando Template Literals (comillas invertidas)
    console.log(`La propiedad ${propiedad} tiene cómo valor: ${valor}`);
  
}