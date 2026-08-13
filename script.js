// Menú mobile: abre y cierra el panel de navegación
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
 
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
 
// Al tocar un link del menú, se cierra automáticamente
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});
 
// Cartas de servicios: se dan vuelta al tocarlas (útil en mobile, donde no hay hover)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('flipped'));
});
 
// Formulario de contacto: arma el mensaje y abre WhatsApp con el texto ya cargado
const form = document.getElementById('contactForm');
 
form.addEventListener('submit', (e) => {
  e.preventDefault(); // evita que la página se recargue
 
  const nombre = document.getElementById('nombre').value.trim();
  const servicio = document.getElementById('servicio').value;
 
  // Arma el mensaje: "Hola, soy [nombre] y busco [servicio]"
  const mensaje = `Hola, soy ${nombre} y busco ${servicio}`;
  const texto = encodeURIComponent(mensaje);
 
  const url = `https://wa.me/5491165301017?text=${texto}`;
  window.open(url, '_blank');
});
 