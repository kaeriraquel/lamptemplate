'use strict'
window.addEventListener('load',()=>{
    let light = document.querySelector('.image-light');
    let boton = document.querySelector('.slider');
    boton.addEventListener('click',function(){
        
        mostrarImagen = light.classList.toggle('image-light-block');
        light.style.opacity='1';
    });
    

    // para mostrar el otro contenido
    let contenidoVacio = document.querySelector('.contenedor-vacio');
    let contenedorAll = document.querySelector('.contenedorAll');
    let checkAllCollections = document.querySelector('.boton');
    let body = document.querySelector('body');

    checkAllCollections.addEventListener('click',function () {
        contenedorAll.style.display = 'none';
        contenidoVacio.style.display = 'block';
        body.classList.toggle('fondoBody');
      });

    let imagenBoton = document.querySelector('.imagenBoton');
    imagenBoton.addEventListener('click',function () {
        contenedorAll.style.display = 'block';
        contenidoVacio.style.display = 'none';
        body.classList.remove('fondoBody');
      });
});