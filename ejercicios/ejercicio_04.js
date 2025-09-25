const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');
const boton = document.getElementById('botonCambiar');

boton.addEventListener('click', () => {

  titulo.textContent = 'Título Modificado con textContent';

  descripcion.innerHTML = 'Este <strong>contenido</strong> fue cambiado con <em>innerHTML</em>.';
});
