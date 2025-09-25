const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeDiv = document.getElementById('mensaje');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();

  if (nombre === '' || email === '') {
    mensajeDiv.textContent = 'Por favor, completa todos los campos.';
    mensajeDiv.className = 'error';
  } else {
    mensajeDiv.textContent = '¡Formulario enviado con éxito!';
    mensajeDiv.className = 'exito';

  }
});
