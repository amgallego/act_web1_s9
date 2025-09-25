const titulo = document.title;
const url = document.URL;

const contenido = `
  <p><strong>Título de la página:</strong> ${titulo}</p>
  <p><strong>URL actual:</strong> ${url}</p>
`;

document.getElementById('info').innerHTML = contenido;
