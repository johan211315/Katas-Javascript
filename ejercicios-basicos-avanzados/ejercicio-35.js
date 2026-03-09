/*Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
*/

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' },
  { name: 'Sabretooth', power: 'regeneration' } // Añadido para probar múltiples resultados
];

function findMutantByPower(mutantList, powerToSearch) {
  //  Creamos un array para guardar los nombres de los que coincidan
  const foundMutants = [];

  // Recorremos el array de mutantes
  for (const mutant of mutantList) {
    // Si el poder coincide (usamos toLowerCase para que sea más flexible)
    if (mutant.power.toLowerCase() === powerToSearch.toLowerCase()) {
      foundMutants.push(mutant.name);
    }
  }

  // Evaluamos si encontramos a alguien
  if (foundMutants.length > 0) {
 
    return `Mutantes encontrados con el poder ${powerToSearch}: ${foundMutants.join(', ')}.`;
  } else {
    return `No se ha encontrado ningún mutante con el poder: ${powerToSearch}.`;
  }
}


console.log(findMutantByPower(mutants, 'regeneration')); 


console.log(findMutantByPower(mutants, 'fire')); 
