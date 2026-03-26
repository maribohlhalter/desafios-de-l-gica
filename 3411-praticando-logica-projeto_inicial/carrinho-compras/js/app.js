let totalGeral;
limpar();


function adicionar() {
//recuperar valores: nome do produto e quantidade
let nomeProduto = document.getElementById('produto').value;
let produto = nomeProduto.split(' - ')[0];
let valorUnitario = nomeProduto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
//calcular o preço
let preco = valorUnitario * quantidade;
//adicionar no carrinho
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${preco}</span>
        </section>`;
//atualizar o valor total
totalGeral = totalGeral + preco;
let totalCampo = document.getElementById('valor-total');
totalCampo.innerHTML = `Valor total: R$${totalGeral}`;
document.getElementById('quantidade').value = '';
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0,00';
}