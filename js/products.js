// importamos o nosso catalogo de produtos e a funcao carregaProdutos para serem utilizadas na pagina home.
import { catalogoProdutos } from "../scripts/dados.js";
import { carregaCard,pegarCodProduto } from "../scripts/funcoes.js";

// Selecao do local aonde os produtos serao inseridos
let gridTodosProdutos = document.querySelector("#home_product_grid")

//Execucao da funcao que ira carregar os produtos na home
carregaCard(catalogoProdutos,gridTodosProdutos)
pegarCodProduto()