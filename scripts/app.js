//criando variável para o menu-hamburguer
const menu = document.querySelector('#mobile-menu');

//criando variável para o nav, para poder alterar o posicionamento dele
const nav = document.querySelector('.nav-container');

/*adicionar eventListener para fazer com que a classa .active seja adiciona ao nav-container, fazendo com que seu posicionamento seja alterado (via css)*/

menu.addEventListener('click', () => {
  nav.classList.toggle('active');
  menu.classList.toggle('is-active');
});

//código para redirecionar o usuário à pagina de curso ao clicar no primeiro curso

const cursoPrimeiro = document.querySelector('.card.primeiro');
console.log(cursoPrimeiro);

cursoPrimeiro.addEventListener('click', () => {
  window.location.href = './curso.html';
});
