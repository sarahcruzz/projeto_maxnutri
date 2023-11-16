//função recebe 2 paramentos: Recebe uma lista de produtos, e o local onde o HTML sera renderizado
export function carregarProdutos(listaProdutos,localHTML){
    listaProdutos.forEach(prod => {
        let html = ` <div class="produto">
                        <div class="img-produto">
                            <img src="${prod.imagem_produto}" alt="produto-7">
                        </div>
    
                        <h1> ${prod.nome_produto}</h1>
                        <p> ${prod.preco_produto}</p>
                        <p> ${prod.opcoes_compra}</p>
        
                        <div id="btn-compraa">
                            <button class="button-compra"> Comprar </button>
                        </div>
                    </div> `
        localHTML.innerHTML += html
        
    });  
}

// função de clique do mouse 
export function handleClick(){
    let produtos = document.querySelectorAll("div.produto")
    console.log(produtos)

    produtos.forEach(produto => produto.addEventListener('click', (evento) => {
        let idProduto = evento.target.id
        localStorage.setItem('prodID',idProduto)
        console.log(idProduto)
     
    
    }      
      ))}