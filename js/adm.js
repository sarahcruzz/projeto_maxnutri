let data = JSON.parse(localStorage.getItem("pedidos"));
const resultadoDiv = document.getElementById('resultado');

data.forEach(pedido => {
    resultadoDiv.innerHTML += `<h2>Itens do Pedido ${pedido.id}:</h2>`;
    resultadoDiv.innerHTML += `<h3>Cliente ${pedido.endereco.nome}</h3>`;
    resultadoDiv.innerHTML += '<ul>';

    pedido.itens.forEach(item => {
        resultadoDiv.innerHTML += '<hr>';
        resultadoDiv.innerHTML += `<li>Título: ${item.nome_produto}</li>`;
        resultadoDiv.innerHTML += `<li>Quantidade: ${item.quantidade}</li>`;
        resultadoDiv.innerHTML += `<li>Preço: $${item.preco_produto}</li>`;
        resultadoDiv.innerHTML += '<hr>';
    });

    resultadoDiv.innerHTML += '</ul>';
});