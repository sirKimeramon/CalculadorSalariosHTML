const ibai = document.querySelector('.ibai');
const messi = document.querySelector('.messi');
const shakira = document.querySelector('.shakira');

// Add event listeners to all elements
ibai.addEventListener('click', () => selectElement(ibai));
messi.addEventListener('click', () => selectElement(messi));
shakira.addEventListener('click', () => selectElement(shakira));

function selectElement(element) {
  // Remove the 'selected' class from all elements
  ibai.classList.remove('selected');
  messi.classList.remove('selected');
  shakira.classList.remove('selected');
  
  // Add the 'selected' class to the clicked element
  element.classList.add('selected');
  
  // Set the border color of the selected element to green
  ibai.style.borderColor = ibai.classList.contains('selected') ? 'green' : '';
  messi.style.borderColor = messi.classList.contains('selected') ? 'green' : '';
  shakira.style.borderColor = shakira.classList.contains('selected') ? 'green' : '';
}
