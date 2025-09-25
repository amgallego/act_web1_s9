const caja = document.getElementById('caja');
const boton = document.getElementById('btnCambiar');

boton.addEventListener('click', () => {
  caja.textContent = '¡Texto cambiado por click!';
  caja.style.backgroundColor = '#4CAF50';
  caja.style.color = 'white';
});

caja.addEventListener('mouseover', () => {
  caja.textContent = '¡Estás encima!';
  caja.style.backgroundColor = '#2196F3';
  caja.style.color = 'white';
});

caja.addEventListener('mouseout', () => {
  caja.textContent = 'Pasa el mouse aquí';
  caja.style.backgroundColor = 'lightgray';
  caja.style.color = 'black';
});
