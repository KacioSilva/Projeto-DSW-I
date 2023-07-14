let statusPagamento = true;
//------------abrir e fechar modal
const abrirModal = () => {
  document.querySelector('.pagamentoWindowArea').style.opacity = 0 // transparente
  document.querySelector('.pagamentoWindowArea').style.display = 'flex'
  setTimeout(() => document.querySelector('.pagamentoWindowArea').style.opacity = 1, 150)
  statusPagamento = true;
}


const fecharModal = () => {
  document.querySelector('#chaveAleatoria').innerHTML = '';
  chave = '';
  document.querySelector('.pagamentoWindowArea').style.opacity = 0 // transparente
  setTimeout(() => document.querySelector('.pagamentoWindowArea').style.display = 'none', 500)
  statusPagamento = false;
}

function finalizarCompra() {
  setTimeout(function() {
    if(statusPagamento == true){
      alert('Pagamento Realizado com sucesso! Obrigado pela preferência!')
      window.location.href = "home.html";
    }else if(statusPagamento == false){
    }
   
  }, 18000); // 10000 milissegundos = 10 segundos
}

//--------------GERAR CHAVE ALEATÓRIA
let chave = '';
function gerarChaveAleatoria() {
  const possibilidadeLetras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const tamanhoChave = 20;
 
  for (let i = 0; i < tamanhoChave; i++) {
    const randomIndex = Math.floor(Math.random() * possibilidadeLetras.length);
    chave += possibilidadeLetras.charAt(randomIndex);
  }
  return console.log(chave);
}

//--------------GERAR QRCODE
function gerarQrCode(){
  var inputUsuario = chave;
  var googleChartApi = 'https://chart.googleapis.com/chart?cht=qr&chs=250x200&chl=';
  var conteudoQrCode = googleChartApi + inputUsuario;
  document.querySelector('#QRCodeImage').src = conteudoQrCode;
}



//pegando os dados da compra

var valorTotalItem = localStorage.getItem("valorTotalItem"); //PEGANDO O VALOR TOTAL DE ITENS
let valorTotalItemFloat = parseFloat(valorTotalItem); // VALOR TOTAL DE ITENS EM VALOR FLOAT

var valorDescontoCompra = localStorage.getItem("valorDescontoCompra"); //PEGANDO O VALOR TOTAL DE DESCONTO
const valorDescontoFloat = parseFloat(valorDescontoCompra); //VALOR DESCONTO EM VALOR FLOAT 

const valorFrete = 10.00;
const totalCompra = (valorTotalItemFloat + valorFrete);


//FORMATANDO O VALOR TOTAL DOS PRODUTOS

let opcoes = {
  maximumFractionDigits: 2,
  useGrouping: true
};
let valorProdutoFormatado = valorTotalItemFloat.toLocaleString('pt-BR', opcoes);
let valorTotalFormatado = totalCompra.toLocaleString('pt-BR', opcoes);


//PEGANDO O ID DOS SPANS E COLOCANDO EM VARIÁVEIS
const infoTotalItens = document.getElementById('valorTotalItem');
const infoDesconto = document.getElementById('valorDesconto');
const infoFrete = document.getElementById('valorFrete');
const infoTotal = document.getElementById('valorTotal');



//SETANDO OS VALORES DO SPAN
infoTotalItens.textContent = ('R$: ' + valorProdutoFormatado + ',00');
infoFrete.textContent = ('R$: ' + valorFrete + ',00');
infoDesconto.textContent = ('R$: - ' + valorDescontoFloat + ',00');
infoTotal.textContent = ('R$: ' + valorTotalFormatado + ',00');


// Trocar os inputs de cartão pra pix e vice-versa

let metodoPagamento = 'cartao';
document.querySelectorAll('input[name="paymentOption"]').forEach(function (option) {
  option.addEventListener('change', function () {
    var cartaoCreditoFields = document.getElementById('cartaoCreditoFields');
    var pixFields = document.getElementById('pixFields');

    var bandeirasCartao = document.getElementById('bandeiraCartao');
    var bandeiraPix = document.getElementById('bandeiraPix');

    if (this.value === 'cartaoCredito') {  //-------------se a opção selecionada for CARTÃO
      cartaoCreditoFields.style.display = 'block';
      pixFields.style.display = 'none';
      metodoPagamento = 'cartao';
      erro.innerHTML = ""

      bandeiraPix.style.display = 'none';
      bandeirasCartao.style.display = 'block'

      nomeTitular.required = true;
      cvv.required = true;
      dataValidade.required = true;
      numCartao.required = true;
      console.log('método de pagamento: ', metodoPagamento)

    } else if (this.value === 'pix') { //-------------se a opção selecionada for PIX
      cartaoCreditoFields.style.display = 'none';
      pixFields.style.display = 'block';
      metodoPagamento = 'pix';
      erro.innerHTML = ""

      bandeiraPix.style.display = 'flex';
      bandeirasCartao.style.display = 'none'

      nomeTitular.required = false;
      cvv.required = false;
      dataValidade.required = false;
      numCartao.required = false;
      console.log('método de pagamento: ', metodoPagamento)
      
    }
  });
});

let statusOpcao = 1;
document.querySelectorAll('input[name="pixPaymentOption"]').forEach(function (option) {
  option.addEventListener('change', function () {
    if(this.value === 'chavePix'){
      statusOpcao = 1;
      console.log('opção de pix: ', statusOpcao);
    }else if(this.value === 'qrCode'){
      statusOpcao = 2;
      console.log('opção de pix: ', statusOpcao);
    }
  });
})

document.addEventListener('DOMContentLoaded', function () {
  const botaoPagar = document.querySelector('button[type="submit"]');
  const opcaoChavePix = document.getElementById('chavePixOption');
  const opcaoQrCode = document.getElementById('qrCodeOption');
  const opcaoCartao = document.getElementById('cartaoCredito');
  const radiosPix = document.querySelectorAll('input[name="pixPaymentOption"]');


  
  //------------------EVENTO DE CLIQUE PARA CONTINUAR
  form = document.getElementById('formulario');
  erro = document.getElementById('error');

  form.addEventListener('submit', evento => {
    evento.preventDefault();

    //pegando informação dos inputs do cartão
    const numCartao = document.getElementById('numCartao').value;
    const nomeTitular = document.getElementById('nomeTitular').value;
    const cvv = document.getElementById('cvv').value;
    const dataValidade = document.getElementById('dataValidade').value;
  
    let statusNumCartao = numCartao.length === 19;
    let statusCvv = cvv.length === 3;
    let statusDataValidade = dataValidade.length === 5;

    //pegando informação dos inputs do endereço
    const cep = document.getElementById('cep').value;
    const rua = document.getElementById('rua').value;
    const complemento = document.getElementById('complemento').value;
    const numero = document.getElementById('numero').value;

    let statusCep = cep.length === 9;

    //VERIFICAÇÃO DOS INPUTS

    if(metodoPagamento === 'cartao'){
      if (!statusNumCartao) {
        erro.innerHTML = " cartao invalido";
      } else if (!statusCvv) {
        erro.innerHTML = "cvv inválido";
      } else if (!statusDataValidade) {
        erro.innerHTML = "Data inválida";
      } else if (nomeTitular.length < 2) {
        erro.innerHTML = "Nome de titular inválido";
      } else if (!statusCep) {
        erro.innerHTML = "Cep inválido";
      } else if (rua.length < 3) {
        erro.innerHTML = "Rua inválida";
      } else if (numero.length === 0) {
        erro.innerHTML = "Número inválido";
      }else{
        alert('Pagamento realizado com sucesso. Obrigado pela preferência!');
        window.location.href = 'home.html';
      }
    }

    else if(metodoPagamento === 'pix'){
      if (!statusCep) {
        erro.innerHTML = "Cep inválido";
      } else if (rua.length < 3) {
        erro.innerHTML = "Rua inválida";
      } else if (numero.length === 0) {
        erro.innerHTML = "Número inválido";
      }else{
        if(statusOpcao === 2){
          document.querySelector('#QRCodeImage').style.display = 'block';
          abrirModal();
          gerarChaveAleatoria();
          gerarQrCode();

        }else if(statusOpcao === 1){
          document.querySelector('#QRCodeImage').style.display = 'none';
          abrirModal();
          gerarChaveAleatoria();
          document.querySelector('#chaveAleatoria').innerHTML = 'Faça o pagamento utilizando a Chave Pix: ' + chave;
        }
        if(statusPagamento == true){
          finalizarCompra();
        }
      }
    }
  });
});