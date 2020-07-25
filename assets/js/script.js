// Se o usuário realizar a rolagem, trocar o menu transparente pelo colorido

  window.onscroll = function() { scrollFunction()};
  window.onload = function() { scrollFunction()};

  function scrollFunction() {

    // Se rolagem maior do que 50px
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      // Definir header black
      document.getElementById("menu").classList.add('header-black');
      document.getElementById("menu").classList.remove('header-transparent');
    // Se não
    } else {
      // Definir header transparente
      document.getElementById("menu").classList.add('header-transparent');
      document.getElementById("menu").classList.remove('header-black');
    }
  }
