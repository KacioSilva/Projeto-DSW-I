produtoJson.map((item, index) => {
    
    //VARIÁVEIS PARA FACILITAR A LINHA DE CÓDIGO
    const seleciona = (elemento) => document.querySelector(elemento)
    const selecionaTodos = (elemento) => document.querySelectorAll(elemento)
    
    //ADICIONANDO A QUANTIDADE DE PRODUTOS DA PÁGINA PRODUTOS.JS NO MAIN DO HTML
    let produtoItem = document.querySelector('.models .produto-item').cloneNode(true)
    seleciona('.produto-area').append(produtoItem)

    //PARA FORMATAR O VALOR DOS PRODUTOS
    const formatoReal = (valor) => {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }
    const formatoMonetario = (valor) => {
        if(valor) {
            return valor.toFixed(2)
        }
    }
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
        seleciona('.produtoInfo--actualPrice').innerHTML = formatoReal(item.price[2])
    }
    const botoesFechar = () => {
        //para fazer com que tanto o voltar e o fechar funcionem com a mesma funcionalidade
        selecionaTodos('.produtoInfo--cancelButton, .produtoInfo--cancelMobileButton').forEach((item) => {
            item.addEventListener('click', fecharModal)
        })
    }
    const preencherDadosProdutos = (produtoItem, item, index) => {
        produtoItem.querySelector('.produto-item--img img').src = item.img
        produtoItem.querySelector('.produto-item--name').innerHTML = item.name
        produtoItem.querySelector('.produto-item--price').innerHTML = formatoReal(item.price[2])
        produtoItem.querySelector('.produto-item--desc').innerHTML = item.description
        produtoItem.setAttribute('data-key', index)
    }

    let modalKey = 0 // para saber qual produto eu estou alterando 
    let quantProdutos = 1 // preciso ter um controle da quantidade de produtos (no minimo 1)
    let cart = [] //representação do carrinho 

    const pegarKey = (e) =>{
        let key = e.target.closest('.produto-item').getAttribute('data-key')
        console.log('Produto clicado' + key)
        console.log(produtoJson[key])

        //eu vou garantir que a quantidade inicial de produtos sempre será 1
        quantProdutos = 1

        //para manter a informação de qual produto foi selecionado
        modalKey = key

        return key
    }

    const preencherTamanhos = (key) => {
        // tirar a selecao de tamanho atual e selecionar o tamanho grande
        seleciona('.produtoInfo--size.selected').classList.remove('selected')
    
        // selecionar todos os tamanhos
        selecionaTodos('.produtoInfo--size').forEach((size, sizeIndex) => {
            // selecionar o tamanho grande
            (sizeIndex == 2) ? size.classList.add('selected') : ''
            size.querySelector('span').innerHTML = produtoJson[key].sizes[sizeIndex]
        })
    }
    const escolherTamanhoPreco = (key) => {
        selecionaTodos('.produtoInfo--size').forEach((size, sizeIndex) => {
            size.addEventListener('click', (e) => {
                // clicou em um item, tirar a selecao dos outros e marca o q vc clicou
                // tirar a selecao de tamanho atual e selecionar o tamanho grande
                seleciona('.produtoInfo--size.selected').classList.remove('selected')
                // marcar o que vc clicou, ao inves de usar e.target use size, pois ele é nosso item dentro do loop
                size.classList.add('selected')
    
                // mudar o preço de acordo com o tamanho
                seleciona('.produtoInfo--actualPrice').innerHTML = formatoReal(produtoJson[key].price[sizeIndex])
            })
        })
    }
    const mudarQuantidade = () => {
        // Ações nos botões + e - da janela modal
        seleciona('.produtoInfo--qtmais').addEventListener('click', () => {
            quantProdutos++
            seleciona('.produtoInfo--qt').innerHTML = quantProdutos
        })
        seleciona('.produtoInfo--qtmenos').addEventListener('click', () =>{
            if(quantProdutos > 1){
                quantProdutos--
                seleciona('.produtoInfo--qt').innerHTML = quantProdutos
            }
        })
    }


    //preenchendo os dados de cada celular
    preencherDadosProdutos(produtoItem, item, index)

    //Evento do clique no produdo
    produtoItem.querySelector('.produto-item a').addEventListener('click', (e) => {
        e.preventDefault()
        //console.log('clicou no produto')
        abrirModal()
        let chave = pegarKey(e)
        preencherModal()     
        preencherTamanhos(chave)
        escolherTamanhoPreco(chave)
        mudarQuantidade()

    })
    
    //fechar o modal ao selecionar o botão de VOLTAR ou CANCELAR
    document.querySelector('.produtoInfo--cancelButton').addEventListener('click', (e) => {
        e.preventDefault()
        //console.log('clicou no produto')
        botoesFechar()
    })
})
