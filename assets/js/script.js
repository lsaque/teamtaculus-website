// Se o usuário realizar a rolagem, trocar o menu transparente pelo colorido

window.onscroll = function () {
  scrollFunction()
};
window.onload = function () {
  scrollFunction()
};

function scrollFunction() {

  const btnMenu = document.querySelector(".js-navbar-toggler");
  const menu = document.getElementById("menu");
  const btnIngressos = document.querySelector('.btnIngresso');
  const btnInvestidor = document.querySelector('.btnInvestidor');

  // Se rolagem maior do que 50px
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // Definir header black
    menu.classList.add('header-black');
    menu.classList.remove('header-transparent');

    // Definir botão ingressos gradient
    btnIngressos.classList.add('gradient-button');
    btnIngressos.classList.remove('ingressos');

    // Definir botão investidor gradient outline
    btnInvestidor.classList.add('outline-gradient-button');
    btnInvestidor.classList.remove('invest');

    // Se não
  } else {
    // Definir header transparente
    menu.classList.add('header-transparent');
    menu.classList.remove('header-black');

    // Definir botão ingressos branco
    btnIngressos.classList.add('ingressos');
    btnIngressos.classList.remove('gradient-button');

    // Definir botão investidor branco outline
    btnInvestidor.classList.add('invest');
    btnInvestidor.classList.remove('outline-gradient-button');

  }

}

// Botão Hamburguer

$(document).ready(function () {
  $('.js-navbar-toggler').on('click', function () {
    $('.animated-icon').toggleClass('open');
  });
});

// BotÃ£o do menu Hamburguer
const navBtn = document.querySelector(".js-navbar-toggler");
navBtn.addEventListener("click", function () {
  this.classList.toggle("is-active");
});
// Fim BotÃ£o do menu Hamburguer

// Fechar navbar mobile
function navAtivar() {
  var element = document.getElementById("menu-toggle");
  element.classList.toggle("is-active");
  $('.animated-icon').toggleClass('open');
}