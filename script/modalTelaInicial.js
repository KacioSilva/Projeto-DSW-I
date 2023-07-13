const abrirModal = (conteudo) => {
  document.querySelector('.modalWindowArea').style.opacity = 0; // transparente
  document.querySelector('.modalWindowArea').style.display = 'flex';
  setTimeout(() => document.querySelector('.modalWindowArea').style.opacity = 1, 150);

  var divText = document.getElementById('text');
  divText.textContent = json[conteudo][0].conteudo;
}

const fecharModal = () => {
  document.querySelector('.modalWindowArea').style.opacity = 0 // transparente
  setTimeout(() => document.querySelector('.modalWindowArea').style.display = 'none', 500)

}