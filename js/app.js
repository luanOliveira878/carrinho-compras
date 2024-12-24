
limpar();

let totalGeral = 0;


function adicionar(){

    // capturar os elementos da interface do usuário e separar strings e valores

    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = parseInt(produto.split('R$')[1]);
    let preco = quantidade * valorProduto;


    // inserindo itens no carrinho

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;


    // manipulando valor total

    totalGeral = totalGeral + preco;

    // capturar campo de valor total

    let valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML = `R$ ${totalGeral}`;

    // zerando quantidade no campo ao adicionar item

    quantidade = document.getElementById('quantidade').value = '';
    
}



function limpar(){

   carrinho = document.getElementById('lista-produtos');
   carrinho.innerHTML = '';
   campoTotal = document.getElementById('valor-total');
   campoTotal.innerHTML = '';
   
}