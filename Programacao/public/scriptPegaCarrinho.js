// Declara uma instância de DOMParser
const parser = new DOMParser();

// Seleciona todos os botões de comprar
const addToCartButtons = document.querySelectorAll(".botaoComprar");

// Adiciona um evento de clique a cada botão
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", addProductToCart);
}

// Função para adicionar um produto ao carrinho
function addProductToCart(event) {
  const button = event.target;
  const index = Array.from(addToCartButtons).indexOf(button);
  const productInfos = button.parentElement.parentElement.parentElement;
  let productImage = productInfos.getElementsByClassName("imagens")[index].src;
  let productName = productInfos.getElementsByClassName("product-title")[index].innerText;
  let productPrice = productInfos.getElementsByClassName("product-price")[index].innerText;
  
  let newCartProduct = document.createElement("tr")
  newCartProduct.classList.add("cart-product")

  newCartProduct.innerHTML =
    `
      <td class="product-identification">
        <img src="${productImage}" alt="${productName}" class="cart-product-image">
        <strong class="cart-product-title">${productName}</strong>
      </td>
      <td>
        <span class="cart-product-price">${productPrice}</span>
      </td>
      <td>
        <input type="number" value="1" min="0" class="product-qtd-input">
        <button type="button" class="remove-product-button">Remover</button>
      </td>
    `

    
  sessionStorage.setItem("adicionadoItem", newCartProduct.outerHTML)

  let productInfosObject = {
    productImage: productImage,
    productName: productName,
    productPrice: productPrice
  };

  module.exports = productInfosObject;

  window.location.href = "carrinho";
}