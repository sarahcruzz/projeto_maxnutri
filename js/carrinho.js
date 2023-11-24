let sacolaCompras = JSON.parse(localStorage.getItem("sacolaCompras"))


let pedidos = JSON.parse(localStorage.getItem("pedidos"))
if (pedidos == null){
    pedidos = []
}

let cartList = document.querySelector('ul.cart_list')




sacolaCompras.forEach(item => {
    let html = `
<li class="cart_item" id="${item.codigoProduto}">
<div class="cart_img_desc">
    <img src="${item.imagemProduto}" alt="">
    <p>${item.produto}</p>
</div>
<div class="cart_item_container">
    <input type="number" value="${item.quantidade}">
    <span>R$ ${item.preco}</span>
    <i class="bi bi-trash3 del-btn"></i>

</div>
</li>
`
cartList.innerHTML += html
    
});

let botaoDel = document.querySelectorAll("i.del-btn")
botaoDel.forEach(botao => botao.addEventListener('click', (event) => {
    let item = event.target.parentElement.parentElement
    cartList.removeChild(item)
    console.log(item.id)
    let index = sacolaCompras.findIndex( i => i.codigoProduto == item.id)
    sacolaCompras.splice(index,1)
    console.log(sacolaCompras)
    localStorage.setItem('sacolaCompras',JSON.stringify(sacolaCompras))
}
    
))

let finalizar = document.querySelectorAll("div.btn_area button:nth-child(2)")
finalizar.forEach(botao => botao.addEventListener('click', ()=> {
    
    let endereco = {
        nome: document.querySelector("input#nome").value,
        logradouro: document.querySelector("input#logradouro").value,
        bairro: document.querySelector("input#bairro").value,
        cidade: document.querySelector('input#cidade').value,
        estado: document.querySelector('input#estado').value
    }

   let codPedido = pedidos.length
    if(pedidos == null || pedidos == 0){
        codPedido = 1
    }

    let pedido = {
        itens: sacolaCompras, 
        endereco: endereco, 
        id: codPedido
    }// crio um objeto que guarda uma lista de produtos e o endereco do comprador
    pedidos.push(pedido) // coloco o pedido na lista de pedidos
    localStorage.setItem('pedidos',JSON.stringify(pedidos))
   


}))

