const form = document.getElementById('login');

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
                return window.location.href = 'home.html';
                
            }
        })
        console.log("conta inválida")
    })

})



