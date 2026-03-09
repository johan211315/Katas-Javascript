/* 
Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.

Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste.
*/

//  Referencia a la imagen en el DOM
const pokemonImg$ = document.querySelector('.random-image');

// Función para obtener un Pokémon aleatorio
const getRandomPokemon = async () => {
    // Generamos un número aleatorio entre 1 y 151
    // Math.random() * 151 da un decimal entre 0 y 150.99
    // Math.floor lo redondea hacia abajo y sumamos 1 para llegar al rango 1-151
    const randomId = Math.floor(Math.random() * 151) + 1;
    
    // Construimos la URL dinámica
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

    try {
        const response = await fetch(url);
        const pokemonData = await response.json();

        //  Buscamos la imagen.
        const imageUrl = pokemonData.sprites.other['official-artwork'].front_default;

 
        pokemonImg$.src = imageUrl;
        pokemonImg$.alt = pokemonData.name;
        
        
        pokemonImg$.style.display = "block";
        pokemonImg$.style.margin = "0 auto";
        pokemonImg$.style.width = "300px";

        console.log(`¡Ha aparecido un ${pokemonData.name.toUpperCase()} salvaje!`);

    } catch (error) {
        console.error("Error al capturar al Pokémon:", error);
    }
};


getRandomPokemon();