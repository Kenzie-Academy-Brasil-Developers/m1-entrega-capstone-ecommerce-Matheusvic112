//criador de cards

let asideCompras = document.createElement('aside');
let carrinho = document.querySelector('.produtos-carrinho')
const lista_produtos= document.querySelector('.lista-produtos');

let arrayCards = []

function cards(data){
    for(let i = 0 ; i < data.length ; i++){
        let lista = document.createElement('li');
        lista.classList.add('produto');
        
        let imagens = document.createElement('img');
    imagens.src= data[i].img
    imagens.alt= data[i].nameItem    
    
    let div = document.createElement('div');
    div.classList.add('class')
    
    let nomes = document.createElement('span');
    nomes.innerText =data[i].tag

    let h2Name =document.createElement('h2')
    h2Name .innerText = data[i].nameItem
    
    let  description =document.createElement('p');
    description.setAttribute('id' ,'descricao')
    description.innerText =data[i].description

    let preco =document.createElement('p');
    preco.setAttribute('id' , 'preco')
    preco.innerText = `R$${data[i].value.toFixed(2).replace('.' ,',')}`

    let button=document.createElement('button');
    button.classList.add('addcarrinho')
    button.setAttribute('id', data[i].id)
    button.innerText = data[i].addCart
    
    lista_produtos.append(lista)
    div.append(nomes , h2Name , description ,preco ,button)
    lista.append(imagens ,div)
    
    
    
}
}

cards(data)



        let inputBusca =document.querySelector(".campoBusca input");
        let btnBusca   =document.querySelector(".campoBusca button");
        
        let resultadoBusca= []
        btnBusca.addEventListener("click" ,function(){
            lista_produtos.innerHTML =""
            for(let i = 0; i < data.length ; i++){
                if(inputBusca.value == data[i].nameItem ){
                    resultadoBusca.push(data[i])
                }
            }
            if( inputBusca.value == ''){
                cards(data)
                
            }
            cards(resultadoBusca)
        })
        



        function soma(arr){    
            let somaTotal = 0
            for(let i=0; i< arr.length; i++){
                somaTotal = somaTotal + arr[i].value
            } 
            return somaTotal;
        }
