/*Desarrolla una función que reciba un país por parámetro y devuelva su capital. Utiliza un objeto para almacenar los países y sus capitales.
*/

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  // Buscamos el valor asociado a la clave 'country'
  const capital = capitals[country];

  // Comprobamos si el resultado existe
  if (capital) {
    return `La capital de ${country} es ${capital}.`;
  } else {
    //  Manejo de error si el país no está en el objeto
    return `Lo siento, no tenemos información sobre la capital de ${country}.`;
  }
}


console.log(getCapital('Spain'));   
console.log(getCapital('Japan'));   