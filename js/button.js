
let listaProdutosCarrinho = document.querySelector(".produtos-carrinho");
let listaProdutos = document.querySelector('.lista-produtos')

listaProdutosCarrinho.addEventListener('click' , removerCarrinho)
listaProdutos.addEventListener('click', addCarrinho )

let arrayCarrinho = []

idAdd = document.querySelector('id','Unidade');
function percorrerArray(arrayCarrinho){
    
    for(let i  in arrayCarrinho){
        const li = document.createElement('li');
        idAdd = arrayCarrinho[i]
        const liImg = arrayCarrinho[i].img
        const liNome = arrayCarrinho[i].nameItem
        const liPreco = arrayCarrinho[i].value
        const id2 =arrayCarrinho[i].id
        
        li.id=arrayCarrinho[i].id
        li.classList.add('carrinhoCompras2')
        li.innerHTML = `
        <img src="${liImg}"  alt="${liNome}">
        <div class ="produtos_li">
        <h3 id="Unidade">${liNome}</h3>
        <span>R$ ${liPreco.toFixed(2)}</span>
        <button class="remover">Remover produto</button>
        </div>
        `
        listaProdutosCarrinho.append(li)
    }
}


function removerCarrinho(event){
    let carrinhoVazio = document.querySelector('.carrinhoCompras')
    let localDoEvento = event.target
    let localId = event.target.closest('li').id
    console.log(localId)
    listaProdutosCarrinho.innerHTML=''
    if(localDoEvento.tagName =="BUTTON"){
        arrayCarrinho.splice(localId,1)
        percorrerArray(arrayCarrinho)
    }
}

function addCarrinho(event){
    let localDoEvento   = event.target
    listaProdutosCarrinho.innerHTML=''
    if(localDoEvento.tagName =="BUTTON"){
        let localDoEventoId = localDoEvento.id
        for(let i =0 ; i < data.length ; i ++){
            if(data[i].id == localDoEventoId){
                arrayCarrinho.push(data[i])
                percorrerArray(arrayCarrinho)
            }
        }  
    }
}

function quantidadeValor(vendas){
    let quantidadeItensEvalor= document.querySelector('.vendas')
    for(let i in vendas ){
        
        const tagDiv= document.createElement('div');
        tagDiv.classList.add('compras2');
        
        tag2H2.setAttribute('id', 'quantidade')
        
        tag2H2.innerText = "R$"+ soma(arrayCarrinho)
        tagDiv.innerHTML=`
        <div class="compras2">
        <h2 >Quantidade:</h2>
        <h2 id="quantidade">4</h2>
        </div>
        <div class="compras2">
                <h2 >Total :</h2>
                <h2 id="total">R$ ${soma(arrayCarrinho)}</h2>
            </div> 
            `
            quantidadeItensEvalor.append(tagDiv)
        }
    }
{/* <div class="compras2">
            <h2 >Quantidade:</h2>
            <h2 id="quantidade">4</h2>
        </div>
        <div class="compras2">
            <h2 >Total :</h2>
            <h2 id="total">R$ 400.00</h2>
        </div> */}











