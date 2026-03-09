// 1.1 Lista de países
const countries1 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');

for (const country of countries1) {
    const li = document.createElement('li');
    li.textContent = country;
    ulCountries.appendChild(li);
}
document.body.appendChild(ulCountries);


// 1.2 Eliminar .fn-remove-me
const toRemove = document.querySelector('.fn-remove-me');
if (toRemove) toRemove.remove();


// 1.3 Lista de coches en el div específico
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');

for (const car of cars) {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li);
}
printHereDiv.appendChild(ulCars);


// 1.4 Divs con h4 e img 
const countriesObjects = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const item of countriesObjects) {
    const div = document.createElement('div');
    // Añadimos una clase para poder identificarlos fácilmente en el punto 1.5
    div.classList.add('country-card'); 
    
    div.innerHTML = `
        <h4>${item.title}</h4>
        <img src="${item.imgUrl}" alt="${item.title}">
    `;

    // 1.6 Botón individual para eliminar este div específico
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar este elemento';
    deleteBtn.addEventListener('click', () => {
        div.remove();
    });

    div.appendChild(deleteBtn);
    document.body.appendChild(div);
}


// 1.5 Botón que elimine el ÚLTIMO elemento
const deleteLastBtn = document.createElement('button');
deleteLastBtn.textContent = 'Eliminar el último de la lista';

deleteLastBtn.addEventListener('click', () => {
    const allCards = document.querySelectorAll('.country-card');
    if (allCards.length > 0) {
        allCards[allCards.length - 1].remove();
    }
});

document.body.appendChild(deleteLastBtn);