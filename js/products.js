// importamos o nosso catalogo de produtos e a funcao carregaProdutos para serem utilizadas na pagina home.
import { catalogo} from "../js/dados.js";
import { carregaCard,pegarCodProduto } from "../js/funcoes.js";

// Selecao do local aonde os produtos serao inseridos
let list_proteinas = catalogo.filter(produto => produto.categoria == "Proteína")
let list_vitaminas = catalogo.filter(produto => produto.categoria == "Vitamina")
let list_aminoacido = catalogo.filter(produto => produto.categoria == "Aminoácido")

let gridProteinas = document.querySelector("#prod_proteinas")
let gridVitaminas = document.querySelector("#prod_vitaminas")
let gridAminoacidos = document.querySelector("#prod_aminoacidos")

//Execucao da funcao que ira carregar os produtos na home

carregaCard(list_proteinas, gridProteinas)
carregaCard(list_vitaminas, gridVitaminas)
carregaCard(list_aminoacido, gridAminoacidos)

pegarCodProduto()