const imagen = document.getElementById('imagen');
const enlace = document.getElementById('enlace');
const boton = document.getElementById('botonCambiar');

boton.addEventListener('click', () => {
 
  const srcActual = imagen.getAttribute('src');
  const hrefActual = enlace.getAttribute('href');

  console.log('SRC actual:', srcActual);
  console.log('HREF actual:', hrefActual);

  imagen.setAttribute('src', 'https://pngimg.com/uploads/wikipedia/wikipedia_PNG37.png');

  enlace.setAttribute('href', 'https://www.wikipedia.org');
  enlace.textContent = 'Ir a Wikipedia';
});
