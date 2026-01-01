//Animação do Menu Hamburguer

function menuocu(){

    let hamb = document.getElementsByClassName('hamburguer')[0]

    const navmenu = document.querySelector(".nav-menu");

    hamb.classList.toggle('active');
    navmenu.classList.toggle('active');
}