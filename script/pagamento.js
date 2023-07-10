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


// Trocar os inputs de cartão pra pix e vice-versa
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
  
  document.addEventListener('DOMContentLoaded', function() {
    const botaoPagar = document.querySelector('button[type="submit"]');
    const opcaoChavePix = document.getElementById('chavePixOption');
    const opcaoQrCode = document.getElementById('qrCodeOption');
    const opcaoCartao = document.getElementById('cartaoCredito');
    const radiosPix = document.querySelectorAll('input[name="pixPaymentOption"]');

    
  
    botaoPagar.addEventListener('click', function(event) {
      event.preventDefault();

      
      if (opcaoCartao.checked) {
        // Desativar os radio buttons de PIX
        radiosPix.forEach(function(radio) {
          radio.disabled = true;
        });
  
        alert('Pagamento por Cartão selecionado.');
      } else {
        if (opcaoChavePix.checked) {
          alert('Pagamento com Chave PIX selecionado.');
        } else if (opcaoQrCode.checked) {
          alert('Pagamento com QR Code selecionado.');
        } else {
          alert('Por favor, selecione uma opção de pagamento.');
        }
      }
    });
  });