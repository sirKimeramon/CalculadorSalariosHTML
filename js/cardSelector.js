const ibai = document.querySelector('.ibai');
const messi = document.querySelector('.messi');
const shakira = document.querySelector('.shakira');

// Agregar evetlisteners
ibai.addEventListener('click', () => selectElement(ibai));
messi.addEventListener('click', () => selectElement(messi));
shakira.addEventListener('click', () => selectElement(shakira));

function selectElement(element) {
  // remueve la clase selected
  ibai.classList.remove('selected');
  messi.classList.remove('selected');
  shakira.classList.remove('selected');
  
  // La agrega al item seleccionado
  element.classList.add('selected');
  
  // Cambia el color a verde
  ibai.style.borderColor = ibai.classList.contains('selected') ? 'green' : '';
  messi.style.borderColor = messi.classList.contains('selected') ? 'green' : '';
  shakira.style.borderColor = shakira.classList.contains('selected') ? 'green' : '';
}

