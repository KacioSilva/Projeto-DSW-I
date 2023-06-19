produtoJson.map((item, index) => {
    
    //VARIÁVEIS PARA FACILITAR A LINHA DE CÓDIGO
    const seleciona = (elemento) => document.querySelector(elemento)
    const selecionaTodos = (elemento) => document.querySelectorAll(elemento)
    
    //ADICIONANDO A QUANTIDADE DE PRODUTOS DA PÁGINA PRODUTOS.JS NO MAIN DO HTML
    let produtoItem = document.querySelector('.models .produto-item').cloneNode(true)
    seleciona('.produto-area').append(produtoItem)
    
    const abrirModal = () =>{
        seleciona('.produtoWindowArea').style.opacity= 1
        seleciona('.produtoWindowArea').style.display = 'flex'
        setTimeout(() => {
           seleciona('.produtoWindowArea').opacity = 0
        }, 150)
       
    }
    const fecharModal = () =>{
        seleciona('.produtoWindowArea').style.opacity = 0
        setTimeout(() =>{
            seleciona('.produtoWindowArea').style.display = 'none'
        }, 500)
    }
    const preencherModal = () =>{
        seleciona('.produtoInfo h1').innerHTML = item.name
        seleciona('.produtoBig img').src = item.img
        seleciona('.produtoInfo--desc').innerHTML = item.description
        seleciona('.produtoInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`
    }
    const botoesFechar = () => {
        //para fazer com que tanto o voltar e o fechar funcionem com a mesma funcionalidade
        selecionaTodos('.produtoInfo--cancelButton, .produtoInfo--cancelMobileButton').forEach((item) => {
            item.addEventListener('click', fecharModal)
        })
    }
    const preencherDadosProdutos = (produtoItem, item) => {
        produtoItem.querySelector('.produto-item--img img').src = item.img
        produtoItem.querySelector('.produto-item--name').innerHTML = item.name
        produtoItem.querySelector('.produto-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
        produtoItem.querySelector('.produto-item--desc').innerHTML = item.description
    }


    //preenchendo os dados de cada celular
    preencherDadosProdutos(produtoItem, item)

    //abrindo o modal ao clilcar em algum produto
    produtoItem.querySelector('.produto-item a').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('clicou no produto')
        //ABRINDO O MODAL E PREENCHENDO
        abrirModal()
        preencherModal()
        
    })
    //fechando o modal ao selecionar o botão de VOLTAR ou CANCELAR
        document.querySelector('.produtoInfo--cancelButton').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('clicou no produto')
        botoesFechar()
    })
})