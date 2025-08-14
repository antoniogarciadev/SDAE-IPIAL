//Animação do Menu Hamburguer

function menuocu(){

    let hamb = document.getElementsByClassName('hamburguer')[0]

    const navmenu = document.querySelector(".nav-menu");

    hamb.classList.toggle('active');
    navmenu.classList.toggle('active');
}

//Primeira div
function desocultar(){
    let div01 = window.document.getElementsByClassName('box-t-info')[0].style.visibility = 'hidden';
    console.log(div01)
    let div2 = window.document.getElementsByClassName('mais')[0].style.visibility = 'visible'
 }
 
 function ocultar(){
     let div1 = window.document.getElementsByClassName('box-t-info')[0].style.visibility = 'visible';

     let div2 = window.document.getElementsByClassName('mais')[0].style.visibility = 'hidden';
 }
 
//Segunda div
 function desocultar2(){
    let div1 = window.document.getElementsByClassName('box-t-info')[1].style.visibility = 'hidden'

    let div2 = window.document.getElementsByClassName('mais')[1].style.visibility = 'visible'
 }
 
 function ocultar2(){
    let div1 = window.document.getElementsByClassName('box-t-info')[1].style.visibility = 'visible'

    let div2 = window.document.getElementsByClassName('mais')[1].style.visibility = 'hidden';
 }

//Terceira div
function desocultar3(){
    let div1 = window.document.getElementsByClassName('box-t-info')[2].style.visibility = 'hidden'

    let div2 = window.document.getElementsByClassName('mais')[2].style.visibility = 'visible'
 }
 
function ocultar3(){
    let div1 = window.document.getElementsByClassName('box-t-info')[2].style.visibility = 'visible'

    let div2 = window.document.getElementsByClassName('mais')[2].style.visibility = 'hidden';
}

//Quarta div
function desocultar4(){
    let div1 = window.document.getElementsByClassName('box-t-info')[3].style.visibility = 'hidden'

    let div2 = window.document.getElementsByClassName('mais')[3].style.visibility = 'visible'
 }
 
function ocultar4(){
    let div1 = window.document.getElementsByClassName('box-t-info')[3].style.visibility = 'visible'

    let div2 = window.document.getElementsByClassName('mais')[3].style.visibility = 'hidden';
}

//scripit

