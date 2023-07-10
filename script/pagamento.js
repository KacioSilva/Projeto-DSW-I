//pegando os dados da compra

var valorTotalItem = localStorage.getItem("valorTotalItem"); //PEGANDO O VALOR TOTAL DE ITENS
const valorTotalItemFloat = parseFloat(valorTotalItem); // VALOR TOTAL DE ITENS EM VALOR FLOAT


var valorDescontoCompra = localStorage.getItem("valorDescontoCompra"); //PEGANDO O VALOR TOTAL DE DESCONTO
const valorDescontoFloat = parseFloat(valorDescontoCompra); //VALOR DESCONTO EM VALOR FLOAT 


//PEGANDO O ID DOS SPANS E COLOCANDO EM VARIÁVEIS
const infoTotalItens = document.getElementById('valorTotalItem');
const infoDesconto = document.getElementById('valorDesconto');
const infoFrete = document.getElementById('valorFrete');
const valorFrete = 10;
const infoTotal = document.getElementById('valorTotal');

//SETANDO OS VALORES DO SPAN
infoTotalItens.textContent = ('R$: ' + valorTotalItemFloat + ',00');
infoFrete.textContent = ('R$: ' + valorFrete + ',00');
infoDesconto.textContent = ('R$: ' + valorDescontoFloat + ',00');
infoTotal.textContent = ('R$: ' + (valorFrete + valorTotalItemFloat + valorDescontoFloat) + ',00');


// Trocar os inputs de cartão pra pix e vice-versa

let metodoPagamento = 'cartao';
document.querySelectorAll('input[name="paymentOption"]').forEach(function (option) {
  option.addEventListener('change', function () {
    var cartaoCreditoFields = document.getElementById('cartaoCreditoFields');
    var pixFields = document.getElementById('pixFields');

    if (this.value === 'cartaoCredito') {
      cartaoCreditoFields.style.display = 'block';
      pixFields.style.display = 'none';
      metodoPagamento = 'cartao';
      console.log('método de pagamento: ', metodoPagamento)

     
    } else if (this.value === 'pix') {
      cartaoCreditoFields.style.display = 'none';
      pixFields.style.display = 'block';
      metodoPagamento = 'pix';
      console.log('método de pagamento: ', metodoPagamento)
      
    }
    if(this.value === 'qrCode'){
      alert('OPÇÃO QRCODE');
    }else if(this.value === 'chavePix'){
      alert('OPÇÃO CHAVE');
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
    }

    //VERIFICAÇÃO DE QUAL OPÇÃO FOI SELECIONADA (PIX OU CARTÃO)
    
  });
});