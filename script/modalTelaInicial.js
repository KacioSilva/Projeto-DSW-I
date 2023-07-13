const abrirModal = (conteudo, tipo) => {
  document.querySelector('.modalWindowArea').style.opacity = 0; // transparente
  document.querySelector('.modalWindowArea').style.display = 'flex';
  setTimeout(() => document.querySelector('.modalWindowArea').style.opacity = 1, 150);

  var divTipo = document.getElementById('tipo');
  var divText = document.getElementById('text');
  divText.textContent = json[conteudo][0].conteudo;
  divTipo.textContent = json[conteudo][1].tipo;
}

const fecharModal = () => {
  document.querySelector('.modalWindowArea').style.opacity = 0 // transparente
  setTimeout(() => document.querySelector('.modalWindowArea').style.display = 'none', 500)

}