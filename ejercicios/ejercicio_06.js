const elemento = document.getElementById('elemento');
const btnAgregar = document.getElementById('btnAgregar');
const btnQuitar = document.getElementById('btnQuitar');
const btnAlternar = document.getElementById('btnAlternar');

btnAgregar.addEventListener('click', () => {
  elemento.classList.add('resaltado');
});

btnQuitar.addEventListener('click', () => {
  elemento.classList.remove('resaltado');
});

btnAlternar.addEventListener('click', () => {
  elemento.classList.toggle('oculto');
});
