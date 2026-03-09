/* 
Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página, algo así:

*/

// 1. Guardamos las referencias de los elementos del DOM que vamos a usar
const select$ = document.querySelector('#character-list');
const image$ = document.querySelector('.character-image');
const url = 'https://thronesapi.com/api/v2/Characters';

// 2. Creamos una función asíncrona para obtener los datos
const getCharacters = async () => {
    try {
        const response = await fetch(url);
        const characters = await response.json();
        
        fillSelect(characters);
        setupEvents(characters);
        
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
    }
};

// 3. Función para rellenar el SELECT con los nombres
const fillSelect = (characters) => {
    // Añadimos una opción inicial por defecto
    const defaultOption = document.createElement('option');
    defaultOption.textContent = "Selecciona un personaje...";
    select$.appendChild(defaultOption);

    for (const character of characters) {
        const option = document.createElement('option');
        option.value = character.imageUrl; 
        option.textContent = character.fullName;
        select$.appendChild(option);
    }
};

// 4. Función para detectar el cambio en el SELECT y actualizar la imagen
const setupEvents = (characters) => {
    select$.addEventListener('change', (event) => {
       
        const selectedImageUrl = event.target.value;
        
        if (selectedImageUrl) {
            image$.src = selectedImageUrl;
            image$.alt = "Imagen del personaje";
            image$.style.display = "block"; 
            image$.style.margin = "20px auto"; 
            image$.style.maxWidth = "300px";
        }
    });
};


getCharacters();