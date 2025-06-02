// Agregar evento de clic a las imágenes
const imagenes = document.querySelectorAll('.imagen img');
if (imagenes.length > 0) {
  imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () => {
      imagen.classList.toggle('moviendo');
      setTimeout(() => {
        imagen.classList.toggle('moviendo');
      }, 500); // La duración de la animación es de 0.5s
    });
  });
} else {
  console.log('No se encontraron imágenes');
}

// Agregar evento de clic a los botones
const botones = document.querySelectorAll('.button_1');
if (botones.length > 0) {
  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      boton.style.background = boton.style.background === 'green' ? '#b095ff' : 'green';
    });
  });
} else {
  console.log('No se encontraron botones');
}

// Validar formulario de contacto
const formulario = document.querySelector('.quote');
if (formulario) {
  formulario.addEventListener('submit', (e) => {
    const nombre = formulario.querySelector('input[type="text"]');
    const correo = formulario.querySelector('input[type="email"]');
    const mensaje = formulario.querySelector('textarea');

    if (nombre && correo && mensaje) {
      if (nombre.value.trim() === '' || correo.value.trim() === '' || mensaje.value.trim() === '') {
        e.preventDefault();
        alert('Por favor, complete todos los campos');
      }
    } else {
      console.log('No se encontraron campos en el formulario');
    }
  });
} else {
  console.log('No se encontró el formulario');
}

// Agregar efecto de fadeIn a los elementos de la página
const boxes = document.querySelectorAll('.box');
if (boxes.length > 0) {
  boxes.forEach((box) => {
    box.style.opacity = 0;
    box.style.transition = 'opacity 0.5s';
    setTimeout(() => {
      box.style.opacity = 1;
    }, 1000);
  });
} else {
  console.log('No se encontraron elementos con clase box');
}