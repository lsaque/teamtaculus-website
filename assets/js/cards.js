  // Otimizando Cards

  // Declaração de Variável
  var cardContainer = document.querySelector('div.slick-carousel');
  var integrante1 = {
    img: "./assets/img/equipe/icon-slider-1.png",
    alt: "Lorem ipsum",
    title: "Lorem ipsum",
    nome: "André Borges",
    titulo: "Head of Sales",
    descricao: "Apaixonado por números, sou o princípal responsável pela parte de vendas da equipe."
  };
  var integrante2 = {
    img: "./assets/img/equipe/icon-slider-2.png",
    alt: "Lorem ipsum",
    title: "Lorem ipsum",
    nome: "Gustavo Gomes",
    titulo: "Head of Marketing",
    descricao: "Focado em técnicas comerciais para a maior visibilidade do projeto, sou responsável pela parte de marketing da TeamTaculus."
  };
  var integrante3 = {
    img: "./assets/img/equipe/icon-slider-3.png",
    alt: "Lorem ipsum",
    title: "Lorem ipsum",
    nome: "Igor Pereira",
    titulo: "Software Engineer",
    descricao: "Trabalhando como a construção, desenvolvimento e manutenção dos projetos, sou responsável pela parte de development da equipe."
  };
  var integrante4 = {
    img: "./assets/img/equipe/icon-slider-4.png",
    alt: "Lorem ipsum",
    title: "Lorem ipsum",
    nome: "Isaque José",
    titulo: "Web Designer",
    descricao: "Atuando na elaboração, desenvolvimento e prototipação de aplicações web, sou responsável pela parte estética e funcional da TeamTaculus."
  };
  var integrante5 = {
    img: "./assets/img/equipe/icon-slider-5.png",
    alt: "Lorem ipsum",
    title: "Lorem ipsum",
    nome: "Leonardo Duarte",
    titulo: "CEO",
    descricao: "Um verdadeiro líder nato, me destaco pela minha organização e controle, sempre extraindo o máximo de rendimento da equipe."
  };

  // Função para otimizar exibição de conteúdo
  function exibirDados(img, alt, title, nome, titulo, descricao) {
    cardContainer.innerHTML +=
      "<div class='slick-card-item'> <div class='slick-card-body'> <div class='slick-card-image'> <img src='" + img + "' alt='" + alt + "' title='" + title + "'> </div> <div class='row'> <div class='col-sm-12 col-md-12 col-lg-12 slick-card-title'> <h3> " + nome + " </h3> <p> " + titulo + " </p> <hr> </div> <div class='col-sm-12 col-md-12 col-lg-12 slick-card-description'> <p> " + descricao + " </p> </div> <div class='col-sm-12 col-md-12 col-lg-12 slick-card-social'> <a href='https://twitter.com/' target='_blank'> <img src='./assets/img/equipe/icon-twitter.svg'> </a> <a href='https://www.linkedin.com/' target='_blank'> <img src='./assets/img/equipe/icon-linkedin.svg'> </a> <a href='https://www.facebook.com/' target='_blank'> <img src='./assets/img/equipe/icon-facebook.svg'> </a> </div> </div> </div> </div>";
  }

  // Dados: André
  exibirDados(integrante1.img, integrante1.alt, integrante1.title, integrante1.nome, integrante1.titulo, integrante1.descricao);

  // Dados: Gustavo
  exibirDados(integrante2.img, integrante2.alt, integrante2.title, integrante2.nome, integrante2.titulo, integrante2.descricao);

  // Dados: Igor
  exibirDados(integrante3.img, integrante3.alt, integrante3.title, integrante3.nome, integrante3.titulo, integrante3.descricao);

  // Dados: Isaque
  exibirDados(integrante4.img, integrante4.alt, integrante4.title, integrante4.nome, integrante4.titulo, integrante4.descricao);

  // Dados: Leonardo
  exibirDados(integrante5.img, integrante5.alt, integrante5.title, integrante5.nome, integrante5.titulo, integrante5.descricao);