let sacolaCompras = JSON.parse(localStorage.getItem("sacolaCompras"))


let pedidos = JSON.parse(localStorage.getItem("pedidos"))
if (pedidos == null){
    pedidos = []
}

let cartList = document.querySelector('tbody')




sacolaCompras.forEach(item => {
    let html = `<tr>
    <td>
      <div class="product">
        <img src="${item.imagem_produto}" alt="" />
        <div class="info">
          <div class="name">${item.nome_produto}</div>
          <div class="category">${item.categoria}</div>
        </div>
      </div>
    </td>
    <td>R$ ${item.preco_produto} à vista</td>
    <td>
      <div class="qty">
        <button><i class="fa-solid fa-minus"></i></button>
        <span>${item.quantidade}</span>
        <button><i class="fa-solid fa-plus"></i></button>
      </div>
    </td>
    <td>R$ ${item.quantidade * item.preco_produto}</td>
    <td>
      <button class="remove"><i class="fa-solid fa-trash-can"></i></button>
    </td>
  </tr>`
cartList.innerHTML += html
    
});

let botaoDel = document.querySelectorAll("button.remove")
botaoDel.forEach(botao => botao.addEventListener('click', (event) => {
    let item = event.target.parentElement.parentElement.parentElement
    cartList.removeChild(item)
    console.log(item.id)
    let index = sacolaCompras.findIndex( i => i.codigoProduto == item.id)
    sacolaCompras.splice(index,1)
    console.log(sacolaCompras)
    localStorage.setItem('sacolaCompras',JSON.stringify(sacolaCompras))
}
    
))

let finalizar = document.querySelector("#but_end")
console.log(finalizar)
finalizar.addEventListener('click', ()=> {
    
    let endereco = {
        nome: document.querySelector("input#nome").value,
        logradouro: document.querySelector("input#logradouro").value,
        bairro: document.querySelector("input#bairro").value,
        cidade: document.querySelector('input#cidade').value,
        estado: document.querySelector('input#Estados_brasileiros').value
    }

   let codPedido = pedidos.length + 1
    // if(pedidos == null || pedidos == 0){
    //     codPedido = 1
    // }

    let pedido = {
        itens: sacolaCompras, 
        endereco: endereco, 
        id: codPedido
    }// crio um objeto que guarda uma lista de produtos e o endereco do comprador
    pedidos.push(pedido) // coloco o pedido na lista de pedidos
    localStorage.setItem('pedidos',JSON.stringify(pedidos))
    alert("Pedico concluído com sucesso!")
    localStorage.removeItem("prodId")
    localStorage.removeItem("sacolaCompras")
    subtotal()
    location.reload()
    

   


})

function subtotal(){
    let valor_total = document.querySelector('.valorTotal span:nth-child(2)')
    let sub_total = document.querySelector('.info > div span:nth-child(2)')
    console.log(sub_total)
    let total = 0
    sacolaCompras.forEach(item => {
        let subtotal = item.quantidade * item.preco_produto
        total += subtotal

    })

    sub_total.innerHTML  = total
    valor_total.innerHTML = total

}

subtotal()
