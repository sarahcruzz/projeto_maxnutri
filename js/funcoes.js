// Esta funcao recebe 2 paramentos: uma lista de produtos, e o local aonde iremos inserir nossos produtos, que e o gridProdutos. Utilizamos o metodo de array forEach para fazer um loop na lista de produtos e renderizar na tela cada um dos produtos da lista de produtos recebida

export function carregaCard(listaProdutos,gridProduto){

    listaProdutos.forEach(produto => {
        const html = ` <div class="produto" id="${produto.cod_produto}">
             <div class="img-produto">
                 <img src="${produto.imagem_produto}" id="${produto.cod_produto}" alt="produto-7">
             </div>
        
             <h1> ${produto.nome_produto}</h1>
             <p>R$ ${produto.preco_produto} à vista</p>
             <p> ${produto.opcoes_compra}</p>
            
        
             <div id="btn-compraa">
                <a href="produto.html" ><button id="${produto.cod_produto}" class="button-compra"> Comprar </button></a>
             </div>
        </div> `
        gridProduto.innerHTML += html
        
    });
}

export function pegarCodProduto(){
    let itens = document.querySelectorAll("div.produto")
    console.log(itens)
    itens.forEach(item => item.addEventListener('click',(evento)=>{
        let prodID = evento.target.id
        localStorage.setItem('prodId',prodID)
        
    }))
}

export function findProduto(listaProdutos, id){
    let produto = listaProdutos.find(produto => produto.cod_produto == id)
    return produto
}

export function carregaProduto(produto,selecaoProduto){
// html que carrega o produto na pagina do produto
let html = `<div class="container-prod">
<div class="imagem-prod">
    <img src="${produto.imagem_produto}" >
</div>


</div>

<div class="container-info">
<div class="texto-prod">
    <p> ${produto.nome_produto}</p>
</div>

<div class="avaliacao">
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
</div>

<div class="preco-prod">
    <h3> R$ ${produto.preco_produto} reais à vista </h3>
    <p>${produto.opcoes_compra}</p>
</div>

<div class="info-produto">
    <p id="info-prod"> + DESCRIÇÃO </p>
    <p style="text-indent: 1.5rem; font-size: 18px" > ${produto.descricao_produto}</p>
</div>

<div class="botos-prod">
    <div class="fav-prod">
        <button class="comprar"> Comprar </button>
    </div> 
    
    <div class="quantidade-prod">
        <input type="number" name="quantidade" id="quant-prod" min="1" value="1" required>
    </div>
</div>`
selecaoProduto.innerHTML = html // carrega o HTML no local selecionado
}






















// const gridProduto = document.querySelector("#home_product_grid")

// for (let i = 0; i <catalogoProdutos.length; i++){
//     const produto = `<div class="product_card" id="card">
//     <a href="produto2.html">
//         <img class="product_image" src="${catalogoProdutos[i].imagemProduto}">
//     </a>
//     </div>`
//     gridProduto.innerHTML += produto
// }