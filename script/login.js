const form = document.getElementById('login');
const error = document.getElementById('error');

form.addEventListener('submit', evento => {
    evento.preventDefault();

    const cpf = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    fetch('/script/usuarios.json')
    .then(e=>e.json())
    .then(e=>{
        e.usuario.map((item)=>{
            if(item.CPF == cpf && item.Senha == senha){
                console.log('login')
                alert('Login Realizado com Sucesso! Aproveite nossas Promoções!')
                return window.location.href = 'home.html';
            }else{
                error.innerHTML = "Senha ou usuário inválidos";
            }
        })
        console.log("conta inválida")
    })

})