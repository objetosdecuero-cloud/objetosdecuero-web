// Año del pie de página
document.getElementById('anio').textContent = new Date().getFullYear();

// Si una foto todavía no está en assets/, se oculta en lugar de mostrar un ícono roto
document.querySelectorAll('img').forEach(function (img) {
  function ocultar() { img.classList.add('sin-foto'); }
  img.addEventListener('error', ocultar);
  if (img.complete && img.naturalWidth === 0) ocultar();
});

// Enlaces de WhatsApp con mensaje prellenado
var WA = 'https://wa.me/5491153287446';
document.querySelectorAll('[data-wa]').forEach(function (a) {
  a.href = WA + '?text=' + encodeURIComponent(a.dataset.wa);
  a.target = '_blank';
  a.rel = 'noopener';
});
