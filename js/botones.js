
const submenu = document.querySelector('.menu');
const btn = document.querySelector('#barra_desplegable');
const aparece = document.querySelector('.aparece');


btn.addEventListener('click', () => { 
    submenu.classList.add('aparece');
    
});

document.addEventListener('click', function(e) {
  if (submenu.classList.contains('aparece') && !submenu.contains(e.target) && !btn.contains(e.target)){
        submenu.classList.remove('aparece');
  }
});

const cerrar = document.querySelector('#barra_cerrar');
cerrar.addEventListener('click', () => {
    submenu.classList.remove('aparece');
})

  





document.addEventListener('DOMContentLoaded', () => {
  const botonF = document.querySelectorAll('.lista_prod');
  const prod = document.querySelectorAll('.tarjeta');
  

  botonF.forEach(button => {
    button.addEventListener('click', () => {
      const categoria = button.dataset.categoria;

      prod.forEach(prod => {
        prod.classList.remove('mostrar');
        if (categoria === 'todo' || prod.dataset.categoria === categoria) {
          prod.classList.add('mostrar');
        }
      });
    });
  });
});