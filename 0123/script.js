let cart = []
let total = 0

function addCart(nome, preco){

cart.push({nome,preco})

total += preco

updateCart()

}

function updateCart(){

const cartItems = document.getElementById("cartItems")

cartItems.innerHTML = ""

cart.forEach(item=>{
let li = document.createElement("li")
li.innerText = item.nome + " - R$" + item.preco
cartItems.appendChild(li)
})

document.getElementById("total").innerText = total

document.getElementById("cartCount").innerText = cart.length

}

function abrirCarrinho(){

document.getElementById("cart").classList.add("open")

}

function fecharCarrinho(){

document.getElementById("cart").classList.remove("open")

}