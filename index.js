const btnMenu = document.getElementById('btn--menu');
const navegacion = document.getElementById('navegacion');

btnMenu.addEventListener('click',()=>{

    if(btnMenu.src.split('/')[4] ==='abrir-menu.svg'){
        btnMenu.src = 'imagenes/cerrar-menu.svg';
    }else{
        btnMenu.src = 'imagenes/abrir-menu.svg';
    }
    navegacion.classList.toggle('navegacion--dinamico');
});

// SELECCION
const imagenes = document.querySelectorAll('.personaje--seleccionar');
const imagenActual = document.getElementById('imagen--actual');

imagenes.forEach(selector=>{
    selector.addEventListener('click',()=>{
        imagenActual.src = selector.src.replace('png','webp');
    });
});