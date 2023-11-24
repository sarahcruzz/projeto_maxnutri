// importamos o nosso catalogo de produtos e a funcao carregaProdutos para serem utilizadas na pagina home.
import { catalogo } from "../js/dados.js";
import { carregaCard,pegarCodProduto } from "../js/funcoes.js";

//Fitro dos produtos que serão exibidos na home
let listaProdutos_home = catalogo.filter(produto => produto.mostrarHome == true)

// Selecao do local aonde os produtos serao inseridos
let gridProdutos_home = document.querySelector("#home_product_grid")

//Execucao da funcao que ira carregar os produtos na home
carregaCard(listaProdutos_home,gridProdutos_home);
pegarCodProduto()
