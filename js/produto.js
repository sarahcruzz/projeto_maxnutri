import { catalogoProdutos } from "./dados.js"; // importa o catalogo de produtos
import { findProduto, carregaProduto } from "./funcoes.js"; // importa as funcoes que serao executadas na pagina
let id = localStorage.getItem('prodId') // recupera o codigo do produto que foi clicado na pagina HOME na Pagina de Produtos/Catalogo

// precisamos verificar se nossa lista de compras ja foi criada, se nao, criamos uma lista vazia. se a lista ja existe, colocaremos os produtos na lista existente
//let sacolaCompras = []
let sacolaCompras = JSON.parse(localStorage.getItem("sacolaCompras"))
if (sacolaCompras == null){
    sacolaCompras = []
}

let produto = findProduto(catalogoProdutos,id)// procura o produto pelo codigo no catalogo de produtos e guarda o resultado na variavel.
let selecaoProduto = document.querySelector("#product_container") // seleciona o local onde as informacoes do produto serao carregadas

carregaProduto(produto,selecaoProduto) // executamos a funcao para carregar o produto na pagina de produto

let botaoComprar = document.querySelector("button")
console.log(botaoComprar)

botaoComprar.addEventListener('click', ()=> {
    let quantidade = parseInt(document.querySelector("div.product_info input").value)
    //produto.quantidade = quantidade
    //console.log(quantidade)
    //sacolaCompras.push(produto)
    let newProduto = {...produto,quantidade}
    alert("item adicionado ao carrinho")
    sacolaCompras.push(newProduto)
    localStorage.setItem('sacolaCompras',JSON.stringify(sacolaCompras))
    console.log(sacolaCompras)


})

