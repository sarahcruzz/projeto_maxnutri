const catalogo = [{
cod_produto: "1",
imagem_produto: "img/Imagens_produto/proteina/isolado.png",
nome_produto: "Whey Protein Isolado",
preco_produto: "R$ 144,00 reais à vista",
opcoes_compra: "ou em 6x sem juros"
},

{
cod_produto: "2",
imagem_produto: "img/Imagens_produto/proteina/concentrado.png",
nome_produto: "Whey Protein Concentrado",
preco_produto: "R$ 99,00 reais à vista",
opcoes_compra: "ou em 6x sem juros"
},

{
cod_produto: "3",
imagem_produto: "img/Imagens_produto/proteina/3w.png",
nome_produto: "Whey Protein 3W",
preco_produto: "R$ 144,90 reais à vista",
opcoes_compra: "ou em 6x sem juros"
},

{
cod_produto: "4",
imagem_produto: "img/Imagens_produto/vitaminas/vitamina.png",
nome_produto: "Multivitamínico",
preco_produto: "R$ 36,90 reais à vista",
opcoes_compra: "ou em 6x sem juros"
},

{
cod_produto: "5",
imagem_produto: "img/Imagens_produto/vitaminas/vitamina_d.png",
nome_produto: "Vitamina D Ultra",
preco_produto: "R$ 45,90 reais à vista",
opcoes_compra: "ou em 6x sem juros"
},

{
cod_produto: "6",
imagem_produto: "img/Imagens_produto/vitaminas/vitamina_b12.png",
nome_produto: "Vitamina B12",
preco_produto: "R$ 18,90 reais à vista",
opcoes_compra: "ou em 6x sem juros"
},

{
cod_produto: "7",
imagem_produto: "img/Imagens_produto/aminoacidos/aminoacido.png",
nome_produto: "Creatina CreaPure",
preco_produto: "R$ 115,90 reais à vista",
opcoes_compra: "ou em 6x sem juros"
},

{
cod_produto: "8",
imagem_produto: "img/Imagens_produto/aminoacidos/bcaa.png",
nome_produto: "BCAA (2:1:1)",
preco_produto: "R$ 47,90 reais à vista",
opcoes_compra: "ou em 6x sem juros"
},

{
cod_produto: "9",
imagem_produto: "img/Imagens_produto/aminoacidos/glutamina.png",
nome_produto: "L-Glutamina",
preco_produto: "R$ 48,60 reais à vista",
opcoes_compra: "ou em 6x sem juros"
}
]

// criação da constante grid_produto para armazenar as informações
const grid_produto = document.querySelector(".lista-produtos")

// for para mostrar os produtos na página de produtos
for(let i = 0; i < 3; i++){
    let prod = catalogo[i]
    let produto = ` <div class="produto">
    <div class="img-produto">
        <img src="${prod.imagem_produto}" alt="produto-7">
    </div>

    <h1> ${prod.nome_produto}</h1>
    <p>R$ ${prod.preco_produto}</p>
    <p>${prod.opcoes_compra}</p>

    <div id="btn-compraa">
        <button class="button-compra"> Comprar </button>
        <button class="button-compra"> Adicionar ao Carrinho </button>
    </div>
</div> `
grid_produto.innerHTML += produto
}

const grid_produto2 = document.querySelector(".lista-produtos2")

// for para mostrar os produtos na página de produtos
for(let i = 3; i < 6; i++){
    let prod = catalogo[i]
    let produto = ` <div class="produto">
    <div class="img-produto">
        <img src="${prod.imagem_produto}" alt="produto-7">
    </div>

    <h1> ${prod.nome_produto}</h1>
    <p>R$ ${prod.preco_produto}</p>
    <p>${prod.opcoes_compra}</p>

    <div id="btn-compraa">
        <button class="button-compra"> Comprar </button>
        <button class="button-compra"> Adicionar ao Carrinho </button>
    </div>
</div> `
grid_produto2.innerHTML += produto
}

const grid_produto3 = document.querySelector(".lista-produtos3")

// for para mostrar os produtos na página de produtos
for(let i = 6; i < 10; i++){
    let prod = catalogo[i]
    let produto = ` <div class="produto">
    <div class="img-produto">
        <img src="${prod.imagem_produto}" alt="produto-7">
    </div>

    <h1> ${prod.nome_produto}</h1>
    <p>R$ ${prod.preco_produto}</p>
    <p>${prod.opcoes_compra}</p>

    <div id="btn-compraa">
        <button class="button-compra"> Comprar </button>
        <button class="button-compra"> Adicionar ao Carrinho </button>
    </div>
</div> `
grid_produto3.innerHTML += produto
}


