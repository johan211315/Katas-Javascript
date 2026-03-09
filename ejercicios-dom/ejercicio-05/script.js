const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// 1. Creamos un contenedor principal (Main) para que todo esté centrado
const mainContainer = document.createElement('main');
mainContainer.style.fontFamily = 'Arial, sans-serif';
mainContainer.style.maxWidth = '600px';
mainContainer.style.margin = '40px auto';
mainContainer.style.padding = '20px';
mainContainer.style.backgroundColor = '#121212'; 
mainContainer.style.borderRadius = '12px';
mainContainer.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';

// 2. Título de la sección
const title = document.createElement('h1');
title.textContent = 'Mi Biblioteca Musical';
title.style.color = '#1DB954'; // Verde Spotify
title.style.textAlign = 'center';
mainContainer.appendChild(title);

// 3. Creamos la lista UL
const ul = document.createElement('ul');
ul.style.listStyle = 'none';
ul.style.padding = '0';

// 4. Bucle para crear los LI (los álbumes)
for (const album of albums) {
    const li = document.createElement('li');
    li.textContent = album;
    
    // Estilos para que cada li parezca una "fila" interactiva
    li.style.backgroundColor = '#1e1e1e';
    li.style.color = 'white';
    li.style.margin = '10px 0';
    li.style.padding = '15px';
    li.style.borderRadius = '8px';
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    li.style.cursor = 'pointer';
    li.style.transition = 'background 0.3s';

    // Añadimos un pequeño icono de "Play" antes del texto
    const playIcon = document.createElement('span');
    playIcon.textContent = '▶';
    playIcon.style.marginRight = '15px';
    playIcon.style.color = '#1DB954';
    
    li.prepend(playIcon); // Lo pone al principio del li

    // Efecto visual al pasar el ratón (Hover)
    li.onmouseover = () => li.style.backgroundColor = '#282828';
    li.onmouseout = () => li.style.backgroundColor = '#1e1e1e';

    ul.appendChild(li);
}

// 5. Lo inyectamos todo en el body
mainContainer.appendChild(ul);
document.body.appendChild(mainContainer);

// Extra: Un pequeño footer
const footer = document.createElement('p');
footer.textContent = `Total de álbumes: ${albums.length}`;
footer.style.color = '#b3b3b3';
footer.style.fontSize = '0.8rem';
footer.style.textAlign = 'center';
mainContainer.appendChild(footer);