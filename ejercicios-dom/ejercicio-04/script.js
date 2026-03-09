// 1.1 Añade un botón con id "btnToClick" y escucha el evento click
const btn = document.createElement('button');
btn.id = 'btnToClick';
btn.textContent = '¡Haz clic aquí!';
document.body.appendChild(btn);

btn.addEventListener('click', (event) => {
    // El objeto 'event' contiene muchísima información: 
    // coordenadas del ratón, el elemento pulsado, teclas especiales...
    console.log("Información del evento click:", event);
});


// 1.2 Evento 'focus' en el input con la clase .focus
const inputFocus = document.querySelector('.focus');

inputFocus.addEventListener('focus', (event) => {
    // Accedemos al valor actual del input (lo que haya escrito el usuario)
    console.log("Valor en focus:", event.target.value);
});


// 1.3 Evento 'input' en el input con la clase .value
// Se ejecuta cada vez que el usuario escribe o borra una sola letra
const inputValue = document.querySelector('.value');

inputValue.addEventListener('input', (event) => {
    console.log("Valor actual mientras escribes:", event.target.value);
});