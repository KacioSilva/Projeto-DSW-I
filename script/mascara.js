function formatCPF(input) {

    let cpf = input.value.replace(/\D/g, '');

    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    input.value = cpf;
}

function formatCelular(input) {

    let phoneNumber = input.value.replace(/\D/g, '');


    if (phoneNumber.length === 11) {
        phoneNumber = phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {

        phoneNumber = phoneNumber.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }

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