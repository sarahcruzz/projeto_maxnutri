export const catalogo = [{
cod_produto: "1",
imagem_produto: "img/Imagens_produto/proteina/isolado.png",
nome_produto: "Whey Protein Isolado",
preco_produto: "R$ 144,00 reais à vista",
opcoes_compra: "ou em 6x sem juros",
descricao_produto: "O diferencial da proteína isolada é que o produto oferece a maior concentração de proteínas possível do mercado e baixíssima quantidade de carboidratos. A composição de proteínas do whey protein isolado da Growth Supplements é de 90%. No Whey Isolado, há pouquíssima (ou nenhuma) quantidade de carboidratos e quantidades insignificantes de gordura."
},

{
cod_produto: "2",
imagem_produto: "img/Imagens_produto/proteina/concentrado.png",
nome_produto: "Whey Protein Concentrado",
preco_produto: "R$ 99,00 reais à vista",
opcoes_compra: "ou em 6x sem juros",
descricao_produto: "Whey Protein Growth é a proteína ideal para quem treina hipertrofia e quer ganhar massa muscular. Ideal porque é um suplemento de alto valor biológico com grande concentração de proteínas e aminoácidos essenciais é também rico em Glutamina, BCAA (incluindo Leucina)."
},

{
cod_produto: "3",
imagem_produto: "img/Imagens_produto/proteina/3w.png",
nome_produto: "Whey Protein 3W",
preco_produto: "R$ 144,90 reais à vista",
opcoes_compra: "ou em 6x sem juros",
descricao_produto: "O 3 Whey Protein traz o equilíbrio perfeito entre o Whey Isolado, Concentrado e Hidrolisado. A mistura dos três, presente no 3 Whey Protein, garante todos esses benefícios em um só produto. São todos os nutrientes do Whey concentrados em uma opção perfeita para você!"
},

{
cod_produto: "4",
imagem_produto: "img/Imagens_produto/vitaminas/vitamina.png",
nome_produto: "Multivitamínico",
preco_produto: "R$ 36,90 reais à vista",
opcoes_compra: "ou em 6x sem juros",
descricao_produto: "Fonte de nutrientes indispensáveis para o organismo, o multivitamínico Growth Supplements não pode sair da sua mochila de treino. Com uma cápsula por dia, você garante uma dose de vitaminas e minerais, nutrientes importantes para o bom funcionamento do organismo."
},

{
cod_produto: "5",
imagem_produto: "img/Imagens_produto/vitaminas/vitamina_d.png",
nome_produto: "Vitamina D Ultra",
preco_produto: "R$ 45,90 reais à vista",
opcoes_compra: "ou em 6x sem juros",
descricao_produto: "Embora seja denominada vitamina, a Vitamina D Ultra se trata de um pré-hormônio. Segundo dados emitidos pela Organização Mundial da Saúde, metade da população mundial tem quantidades insuficientes desse nutriente."
},

{
cod_produto: "6",
imagem_produto: "img/Imagens_produto/vitaminas/vitamina_b12.png",
nome_produto: "Vitamina B12",
preco_produto: "R$ 18,90 reais à vista",
opcoes_compra: "ou em 6x sem juros",
descricao_produto: "Vitamina B12 é uma das vitaminas mais importantes para o bom funcionamento do organismo, e também uma das mais complexas. Fazendo parte da lista de vitaminas que compõem o complexo B (Vitamina B), ela proporciona diversos benefícios ao organismo e garante a prevenção de diferentes doenças."
},

{
cod_produto: "7",
imagem_produto: "img/Imagens_produto/aminoacidos/aminoacido.png",
nome_produto: "Creatina CreaPure",
preco_produto: "R$ 115,90 reais à vista",
opcoes_compra: "ou em 6x sem juros",
descricao_produto: " A Creapure® é uma fabricante campeã de vendas, produzindo a matéria-prima utilizada pelas principais marcas importadas. Assim, fica mais fácil consumir um material conceituado a um preço acessível que cabe no seu bolso, como é o caso da creatina."
},

{
cod_produto: "8",
imagem_produto: "img/Imagens_produto/aminoacidos/bcaa.png",
nome_produto: "BCAA (2:1:1)",
preco_produto: "R$ 47,90 reais à vista",
opcoes_compra: "ou em 6x sem juros",
descricao_produto: "Para entender o que é BCAA, é preciso saber que se trata de uma sigla em inglês. Ela significa “branched chain amino acids”, ou seja, aminoácidos de cadeia ramificada. Os três aminoácidos do BCAA são do tipo essenciais, ou seja, que não conseguem ser fabricados pelo nosso próprio corpo e devem ser obtidos por meio da dieta."
},

{
cod_produto: "9",
imagem_produto: "img/Imagens_produto/aminoacidos/glutamina.png",
nome_produto: "L-Glutamina",
preco_produto: "R$ 48,60 reais à vista",
opcoes_compra: "ou em 6x sem juros",
descricao_produto: "Indispensável para o metabolismo de um organismo saudável, a glutamina tem importantes funções e pode ser um auxílio tanto para quem pratica exercícios físicos intensos quanto para quem busca apenas uma rotina ainda mais saudável. Consulte um profissional nutricionista para ser orientado acerca da necessidade deste suplemento."
}
]

// criação da constante grid_produto para armazenar as informações
// const grid_produto = document.querySelector(".lista-produtos")

// // for para mostrar os produtos na página de produtos
// for(let i = 0; i < 3; i++){
//     let prod = catalogo[i]
//     let produto = ` <div class="produto">
//     <div class="img-produto">
//         <img src="${prod.imagem_produto}" alt="produto-7">
//     </div>

//     <h1> ${prod.nome_produto}</h1>
//     <p> ${prod.preco_produto}</p>
//     <p> ${prod.opcoes_compra}</p>
    

//     <div id="btn-compraa">
//         <button class="button-compra"> Comprar </button>
        
//     </div>
// </div> `
// grid_produto.innerHTML += produto
// }

// const grid_produto2 = document.querySelector(".lista-produtos2")

// // for para mostrar os produtos na página de produtos
// for(let i = 3; i < 6; i++){
//     let prod = catalogo[i]
//     let produto = ` <div class="produto">
//     <div class="img-produto">
//         <img src="${prod.imagem_produto}" alt="produto-7">
//     </div>

//     <h1> ${prod.nome_produto}</h1>
//     <p> ${prod.preco_produto}</p>
//     <p> ${prod.opcoes_compra}</p>

//     <div id="btn-compraa">
//         <button class="button-compra"> Comprar </button>
        
//     </div>
// </div> `
// grid_produto2.innerHTML += produto
// }

// const grid_produto3 = document.querySelector(".lista-produtos3")

// // for para mostrar os produtos na página de produtos
// for(let i = 6; i < 10; i++){
//     let prod = catalogo[i]
//     let produto = ` <div class="produto">
//     <div class="img-produto">
//         <img src="${prod.imagem_produto}" alt="produto-7">
//     </div>

//     <h1> ${prod.nome_produto}</h1>
//     <p> ${prod.preco_produto}</p>
//     <p id="alternativo"> ${prod.opcoes_compra}</p>

//     <div id="btn-compraa">
//         <button class="button-compra"> Comprar </button>
        
//     </div>
// </div> `
// grid_produto3.innerHTML += produto
// }


