

// let button = document.querySelector('.lista-produtos')




button.addEventListener('click' , function(e){
if(e.target.tagName =="BUTTON"){
        for(let i = 0 ; i < data.length; i++){
            if(e.target.id == data[i].id){
                let contador = 0
                for(let j = 0 ; j < arrayCarrinho.length ; j++){
                    if(e.target.id == arrayCarrinho[j].id){
                        arrayCarrinho[j].contador +=1
                        contador++
                    }
                }
                if(contador === 0){
                    arrayCarrinho.push(data[i])
                }                
        }
    }
    limparLista()
    carrinhoProdutos(arrayCarrinho)
}    
})

// function limparLista(){
//     let tagUl = document.querySelector(".produtos-carrinho");
//     tagUl.innerHTML=''
// }

// let button2 = document.querySelector('.produtos-carrinho')

// button2.addEventListener('click',remover)



















// button2.addEventListener('click' , function(e){
//     if(e.target.tagName === "BUTTON"){
//         for(let i = 0 ; i < data.length;i++){
//             if(e.target.id == data[i].id){
//                 let removedor = data[i].id
//                 arrayCarrinho.splice(removedor,1)
//             }
//         }
//     }
//     limparLista()
//     carrinhoProdutos()

//     console.log(limparLista)
// })



// const ulTag = document.querySelector('.produtos-carrinho');
// function carrinhoVazio (){
//     let h2Carrinho = document.createElement('h2');
//     h2Carrinho.innerText='Carrinho de compras'
//     h2Carrinho.setAttribute('class' ,'carrinho');
    
    
//     let tagLi =document.createElement('li');
//     tagLi.classList.add('carrinhoCompras');
    
//     let h2Tag =document.createElement('h2');
//     h2Tag.innerText ='Carrinho Vázio';
    
//     let pTag = document.createElement('p');
//     pTag.innerText ='Adicione um item'
    
//     ulTag.append(tagLi)
//     tagLi.append(h2Tag ,pTag)
    
// }
// carrinhoVazio()



// function carrinhoProdutos(arrayCarrinho){

//     for(let i = 0 ; i < arrayCarrinho.length ; i ++){
//         let tagli     =document.createElement('li');
//         let tagdiv    =document.createElement('div');
//         let img       =document.createElement('img');
//         let h3Tag     =document.createElement('h3');
//         let tagspan   =document.createElement('span');
//         let tagspan2  =document.createElement('span')  
//         let tagbutton =document.createElement('button');
        

//         tagli.classList.add('carrinhoCompras2');
//         tagli.id=i
//         tagspan2.classList.add('contador')
//         tagspan2 .classList.add('quantidade')
//         img.src = arrayCarrinho[i].img
//         img.alt = arrayCarrinho[i].nameItem
        
//         h3Tag.innerText     = arrayCarrinho[i].nameItem
//         tagspan.innerText   = ' R$ :' + arrayCarrinho[i].value.toFixed(2).replace('.','.')
//         tagspan2.innerText  ='Quantidade : '+ arrayCarrinho.length
//         tagbutton.innerText = 'Remover produto'

//         carrinho.append(tagli)
//         tagli.append(img,tagdiv)
//         tagdiv.append( h3Tag,tagspan ,tagspan2,tagbutton)
//     }
// }