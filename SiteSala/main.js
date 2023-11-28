
verificarComponentes();

function verificarComponentes(){
    var cabecalhos=document.getElementsByClassName('nav');
    
    if(cabecalhos){
        criarCabecalhos(cabecalhos);
    }
}

function criarCabecalhos(cabecalhos){
    for(const c of cabecalhos){
    var nav=document.createElement('nav');
    var divLogo= document.createElement('divLogo');
    divLogo.innerHTML='<a href="index.html">Create.com</a>';
    var ul=document.createElement('ul');
    ul.innerHTML='<li><a href="index.html">Home</a></li> <li><a href="serviços.html">Serviços</a></li> <li><a href="Loguin.html">Login</a></li> <li><a href="sobre.html">Sobre</a></li> <li><a href="contato.html">Contato</a></li>  <li> <a href="Web/Atividade.html">Menu Atividade</a></li> <li><a href="https://proejetorestaurante.netlify.app">Restaurante</a></li>';
    var divMenu=document.createElement('divMenu');
    divMenu.innerHTML='<img src="imagens/menu.png">';
    nav.classList.add('cabecalho');
    divLogo.classList.add('divLogo');
    ul.classList.add('ul');
    divMenu.classList.add('divMenu');
    nav.appendChild(divLogo);
    nav.appendChild(ul);
    nav.appendChild(divMenu);
    c.appendChild(nav)
}
}

var menu = document.querySelector('.ul');
var menuBar = document.querySelector('.divMenu');
var iconMenu = document.querySelector(' .divMenu img');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == 'imagens/menu.png') {
        iconMenu.setAttribute("src","imagens/close.png");
    }else{
        iconMenu.setAttribute("src","imagens/menu.png");
    }

   menu.classList.toggle('active');
});

