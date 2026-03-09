const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// 1. Capturamos el input desde el DOM usando su atributo data-function
const filterInput$ = document.querySelector('[data-function="toFilterStreamers"]');

// 2. Añadimos el "escuchador" de eventos para cuando el usuario escriba
filterInput$.addEventListener('input', (event) => {
    // 3. Obtenemos el valor actual del input y lo pasamos a minúsculas para comparar mejor
    const searchValue = event.target.value.toLowerCase();

    // 4. Filtramos el array de streamers
    const filteredStreamers = streamers.filter((streamer) => {
        // Pasamos también el nombre del streamer a minúsculas
        return streamer.name.toLowerCase().includes(searchValue);
    });

   
    console.log(filteredStreamers);
});