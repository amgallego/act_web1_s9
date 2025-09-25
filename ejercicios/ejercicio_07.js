const boton = document.getElementById('btnAgregar');
const lista = document.getElementById('lista');

let contador = 1;

boton.addEventListener('click', () => {

  const nuevoItem = document.createElement('li');

  nuevoItem.textContent = `Elemento ${contador}`;

  lista.appendChild(nuevoItem);

  contador++;
});
