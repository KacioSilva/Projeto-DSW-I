const formEl = document.getElementById('formulario');
let erro = document.getElementById('erro');

formEl.addEventListener('submit', evento => {
  evento.preventDefault();

  const primeiroNome = document.getElementById('nome').value;
  const sobreNome = document.getElementById('sobrenome').value;
  const senha = document.getElementById('senha').value;
  const confSenha = document.getElementById('confSenha').value;
  const cpf = document.getElementById('cpf').value;
  const email = document.getElementById('email').value;
  const celular = document.getElementById('celular').value;
  const telefone = document.getElementById('telefone').value;
  const dataNasc = document.getElementById('dataNasc').value;

  let statusCpf = cpf.length === 14;
  let statusCelular = celular.length === 15;
  let statusTelefone = telefone.length === 0 || telefone.length === 14;
  let statusSenha = senha === confSenha;

  if (!statusCpf) {
    erro.innerHTML = "CPF inválido";
  } else if (!statusCelular) {
    erro.innerHTML = "Número de celular inválido";
  } else if (!statusTelefone) {
    erro.innerHTML = "Número de telefone inválido";
  } else if (!statusSenha) {
    erro.innerHTML = "Senhas diferentes";
  } else {
    alert("Cadastro realizado com sucesso. Redirecionaremos você para a tela de login!");
    window.location.href = "login.html";
  }
});