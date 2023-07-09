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
infoFrete.textContent = ('R$: ' + valorFrete +',00');
infoDesconto.textContent = ('R$: ' + valorDescontoFloat + ',00');
infoTotal.textContent = ('R$: ' + (valorFrete + valorTotalItemFloat + valorDescontoFloat) + ',00');



// Manipulador de evento para a seleção da opção de pagamento
document.querySelectorAll('input[name="paymentOption"]').forEach(function(option) {
    option.addEventListener('change', function() {
      var cartaoCreditoFields = document.getElementById('cartaoCreditoFields');
      var pixFields = document.getElementById('pixFields');
  

      
      if (this.value === 'cartaoCredito') {
        cartaoCreditoFields.style.display = 'block';
        pixFields.style.display = 'none';

      } else if (this.value === 'pix') {
        cartaoCreditoFields.style.display = 'none';
        pixFields.style.display = 'block';
      }
    });
  });
  
  // Manipulador de evento para a seleção da opção de pagamento Pix
  document.querySelectorAll('input[name="pixPaymentOption"]').forEach(function(option) {
    option.addEventListener('change', function() {
      // Adicione aqui a lógica para processar o pagamento com Pix
      if (this.value === 'chavePix') {
        alert('Pagamento com Chave Pix selecionado');
      } else if (this.value === 'qrCode') {
        alert('Pagamento com QR Code selecionado');
      }
    });
  });