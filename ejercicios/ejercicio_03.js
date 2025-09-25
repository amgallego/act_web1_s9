const elementos = document.getElementsByClassName('destacado');

for (let i = 0; i < elementos.length; i++) {
  elementos[i].style.color = 'white';
  elementos[i].style.backgroundColor = '#007BFF'; // Azul
  elementos[i].style.padding = '10px';
  elementos[i].style.marginBottom = '5px';
}

const contador = document.getElementById('contador');
contador.textContent = `Hay ${elementos.length} elementos con la clase "destacado".`;
