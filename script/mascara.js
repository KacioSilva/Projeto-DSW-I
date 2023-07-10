function formatNome(input) {
    let nomeUsuario = input.value.replace(/[^\p{L}\s]+/gu, '');
    input.value = nomeUsuario.toUpperCase();
}

function formatCPF(input) {
    
    let cpf = input.value.replace(/\D/g, '');

    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    input.value = cpf;
}

function formatCelular(input) {

    let phoneNumber = input.value.replace(/\D/g, '');

    phoneNumber = phoneNumber.replace(/(\d{2})(\d)/, '($1) $2');
    phoneNumber = phoneNumber.replace(/(\d{5})(\d)/, '$1-$2');

    input.value = phoneNumber;
}

function formatTelefone(input) {

    let phoneNumber = input.value.replace(/\D/g, '');

    phoneNumber = phoneNumber.replace(/(\d{2})(\d)/, '($1) $2');
    phoneNumber = phoneNumber.replace(/(\d{4})(\d)/, '$1-$2');

    input.value = phoneNumber;
}

function formatEmail(input) {
    let email = input.value.trim();
    let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
        input.style.borderColor = "red";
    } else {
        input.style.borderColor = "";
    }
}
function formatCvv(input){
    let cvv = input.value.replace(/\D/g, '')
    input.value = cvv;
}
function formatDataValidade(input){
    let validade = input.value.replace(/\D/g, '');

    validade = validade.replace(/(\d{2})(\d)/, '$1/$2');
   
    input.value = validade;
}
function formatCartao(input){
    let cartao = input.value.replace(/\D/g, '');

    cartao = cartao.replace(/(\d{4})(\d)/, '$1 $2');
    cartao = cartao.replace(/(\d{4})(\d)/, '$1 $2');
    cartao = cartao.replace(/(\d{4})(\d)/, '$1 $2');
    
    input.value = cartao;
}

function formatCep(input){
    let cep = input.value.replace(/\D/g, '');

    cep = cep.replace(/(\d{5})(\d)/, '$1-$2');
  
    input.value = cep;
}
function formatNumero(input){
    let numero = input.value.replace(/\D/g, '');
  
    input.value = numero;
}

