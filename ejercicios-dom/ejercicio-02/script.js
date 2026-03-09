// 2.1 Inserta dinamicamente un div vacio.
const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);

// 2.2 Inserta dinamicamente un div que contenga una p.
const divWithP = document.createElement('div');
const pInside = document.createElement('p');
pInside.textContent = "Soy una p dentro de un div"; // Opcional para ver algo
divWithP.appendChild(pInside);
document.body.appendChild(divWithP);

// 2.3 Inserta un div con 6 p utilizando un loop.
const divWithSixP = document.createElement('div');
for (let i = 0; i < 6; i++) {
    const p = document.createElement('p');
    p.textContent = `Párrafo número ${i + 1}`;
    divWithSixP.appendChild(p);
}
document.body.appendChild(divWithSixP);

// 2.4 Inserta una p con el texto 'Soy dinámico!'.
const dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP);

// 2.5 Inserta en el h2 .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2Ref = document.querySelector('h2.fn-insert-here');
h2Ref.textContent = 'Wubba Lubba dub dub';

// 2.6 Basándote en el array, crea una lista ul > li.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
for (const app of apps) {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
}
document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll('.fn-remove-me');
for (const el of elementsToRemove) {
    el.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos primeros div.
// Buscamos todos los divs y usamos insertBefore sobre el segundo
const allDivs = document.querySelectorAll('div');
const midP = document.createElement('p');
midP.textContent = 'Voy en medio!';
// Insertamos antes del segundo div (índice 1)
document.body.insertBefore(midP, allDivs[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los .fn-insert-here
const insertHereDivs = document.querySelectorAll('div.fn-insert-here');
for (const div of insertHereDivs) {
    const p = document.createElement('p');
    p.textContent = 'Voy dentro!';
    div.appendChild(p);
}