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

const agregar = document.querySelectorAll('.agr');
const caja = document.getElementById('caja')
const panel = document.querySelector('.panel');
const mostrar = document.querySelector('.mostrar');


agregar.forEach(function(recorrido){

  recorrido.addEventListener('click', () => {
    
    panel.classList.remove('panel')
    panel.classList.add('mostrar')
  })

})

  document.addEventListener('click', function(e) {
    if(panel.classList.contains('mostrar') && !panel.contains(e.target) && !caja.contains(e.target)){
      panel.classList.remove('mostrar')
      panel.classList.add('panel')
    }
  })
