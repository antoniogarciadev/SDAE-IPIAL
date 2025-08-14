var icone= document.querySelector('.icone');

var navbar=document.querySelector('#list_menu');

// const closebutton=document.querySelector('div.menu-icon').children[0];

icone.addEventListener('click',()=>{

    if( navbar.classList.contains('active')){
        navbar.classList.remove('active');
        document.querySelector('.icone img').src='assent/Icones/Menu1.jpg';

    }else{
        navbar.classList.add('active');
        document.querySelector('.icone img').src='assent/Icones/close1.jpg';
    }
});
