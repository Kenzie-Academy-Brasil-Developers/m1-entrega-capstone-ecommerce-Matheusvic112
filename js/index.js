let asideCompras = document.createElement('aside')
let lista_produtos = document.querySelector('.lista-produtos')
let listaProdutosCarrinho = document.querySelector(".produtos-carrinho");
listaProdutosCarrinho.addEventListener('click', removerCarrinho)
lista_produtos.addEventListener('click', addCarrinho)

let arrayCards = []
let arrayCarrinho = []
let buscaNavegador = []

function cards(data) {
    for (let i = 0; i < data.length; i++) {
        let lista = document.createElement('li')

        lista.classList.add('produto')
        lista.id = i

        let imagens = document.createElement('img')
        imagens.src = data[i].img
        imagens.alt = data[i].nameItem

        let div = document.createElement('div')
        div.classList.add('class')

        let nomes = document.createElement('span')
        nomes.innerText = data[i].tag

        let h2Name = document.createElement('h2')
        h2Name.innerText = data[i].nameItem

        let description = document.createElement('p')
        description.setAttribute('id', 'descricao')
        description.innerText = data[i].description

        let preco = document.createElement('p')
        preco.setAttribute('id', 'preco')
        preco.innerText = `R$${data[i].value.toFixed(2).replace('.' ,',')}`

        let button = document.createElement('button')
        button.classList.add('addcarrinho')
        button.setAttribute('id', data[i].id)
        button.innerText = data[i].addCart

        lista_produtos.append(lista)
        div.append(nomes, h2Name, description, preco, button)
        lista.append(imagens, div)
    }
}

cards(data)

function addCarrinho(event) {
    let localDoEvento = event.target
    let localDoEventoId = localDoEvento.id
    if (localDoEvento.tagName == "BUTTON" && localDoEvento.classList.contains("addcarrinho")) {
        listaProdutosCarrinho.innerHTML = ""
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == localDoEventoId) {
                arrayCarrinho.push(data[i])
                percorrerArray(arrayCarrinho)
            }
        }
    }
    alterarValor()
}

function percorrerArray(arrayCarrinho) {
    for (let i in arrayCarrinho) {
        const li = document.createElement('li');
        const liImg = arrayCarrinho[i].img
        const liNome = arrayCarrinho[i].nameItem
        const liPreco = arrayCarrinho[i].value

        li.classList.add('carrinhoCompras2')
        li.id = i
        li.innerHTML = `
            <img src="${liImg}"  alt="${liNome}">
            <div class ="produtos_li">
            <h3>${liNome}</h3>
            <span>R$ ${liPreco.toFixed(2).replace('.' ,',')}</span>
            <button id =${i} class="remover">Remover produto</button>
            </div>
            `
            listaProdutosCarrinho.append(li)
        }
    }
    
    
    
    const navegacao = document.querySelector('.getUlNavBar')

function removerCarrinho(event) {
    // let carrinhoVazio = document.querySelector('.carrinhoCompras')
    let localDoEvento = event.target
    let localId = event.target.id
    console.log(localId)
    if (localDoEvento.tagName == "BUTTON") {

        arrayCarrinho.splice(localId, 1)
        listaProdutosCarrinho.innerHTML = ''
        console.log(arrayCarrinho)

        percorrerArray(arrayCarrinho)
    }
    alterarValor()
}


let inputBusca = document.querySelector(".campoBusca input")
let btnBusca = document.querySelector(".campoBusca button")

let resultadoBusca = []
btnBusca.addEventListener("click", function () {
    for (let i = 0; i < data.length; i++) {
        if (data[i].nameItem.toLowerCase().includes(inputBusca.value.toLowerCase())) {
            resultadoBusca.push(data[i])
        }
    }
    if (inputBusca.value == '') {
        resultadoBusca.push(data[i])
    }
    lista_produtos.innerHTML = ''

    cards(resultadoBusca)
    resultadoBusca.splice(0, resultadoBusca.length)

})

navegacao.addEventListener('click', nav)

function nav(event) {
    const id = event.target
    if (id.tagName == 'BUTTON') {
        for (let i = 0; i < data.length; i++) {
            if (data[i].tag == id.id) {
                buscaNavegador.push(data[i])
            } else if (id.id == 'Todos') {
                buscaNavegador.push(data[i])
            }

        }

    }

    lista_produtos.innerHTML = ''
    cards(buscaNavegador)
    buscaNavegador.splice(0, buscaNavegador.length)

}



function alterarValor() {
    const quantidade = document.getElementById('quantidade')
    const valor = document.getElementById('total')
    quantidade.innerText = arrayCarrinho.length
    valor.innerText = 'R$ ' + soma(arrayCarrinho).toFixed(2)

}

function soma(arr) {
    let somaTotal = 0
    for (let i = 0; i < arr.length; i++) {
        somaTotal = somaTotal + arr[i].value
    }
    return somaTotal
}