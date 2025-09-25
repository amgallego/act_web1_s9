const item2 = document.getElementById('item2');
const btnMostrar = document.getElementById('mostrarInfo');
const info = document.getElementById('info');

btnMostrar.addEventListener('click', () => {

  const padre = item2.parentElement;
  const hijos = padre.children;
  const siguienteHermano = item2.nextElementSibling;

  let contenido = `
    <p><strong>Elemento actual:</strong> ${item2.textContent}</p>
    <p><strong>Padre:</strong> ${padre.id}</p>
    <p><strong>Hijos del padre:</strong></p>
    <ul>
  `;

  for (let i = 0; i < hijos.length; i++) {
    contenido += `<li>${hijos[i].textContent}</li>`;
  }

  contenido += '</ul>';

  if (siguienteHermano) {
    contenido += `<p><strong>Siguiente hermano:</strong> ${siguienteHermano.textContent}</p>`;
  } else {
    contenido += `<p><strong>Siguiente hermano:</strong> No hay siguiente hermano</p>`;
  }

  info.innerHTML = contenido;
});
