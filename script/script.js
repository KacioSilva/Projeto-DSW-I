produtoJson.map((item, index) => {
    let produtoItem = document.querySelector('.models .produto-item').cloneNode(true)
    //console.log(pizzaItem)

    
    document.querySelector('.produto-area').append(produtoItem)

    //preenchendo os dados de cada celular
    produtoItem.querySelector('.produto-item--img img').src = item.img
    produtoItem.querySelector('.produto-item--name').innerHTML = item.name
    produtoItem.querySelector('.produto-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    produtoItem.querySelector('.produto-item--desc').innerHTML = item.description

    //produto clicado
    produtoItem.querySelector('.produto-item a').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('clicou no produto')
        //abrir a janela
        document.querySelector('.produtoWindowArea').style.display = 'flex'
        //colocando os dados na janela
        document.querySelector('.produtoInfo h1').innerHTML = item.name
        document.querySelector('.produtoBig img').src = item.img
        document.querySelector('.produtoInfo--desc').innerHTML = item.description
        document.querySelector('.produtoInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`
        
    })
    //fechar produto    
    document.querySelector('.produtoInfo--cancelButton').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('clicou no produto')
        //abrir a janela
        document.querySelector('.produtoWindowArea').style.display = 'none'
    })
    //voltar   
    document.querySelector('.produtoInfo--cancelMobileButton').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('clicou no produto')
        //abrir a janela
        document.querySelector('.produtoWindowArea').style.display = 'none'
    })
})