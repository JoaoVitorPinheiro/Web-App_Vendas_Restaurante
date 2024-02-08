const parser2 = new DOMParser()

let listaProdutos = []

// Obtém o conteúdo do sessionStorage usando getItem
const carrinhoStorage = sessionStorage.getItem("adicionadoItem");

const carrinhoStorageHTML = parser2.parseFromString(carrinhoStorage, "text/xml")

listaProdutos.push(carrinhoStorageHTML.getElementsByTagName("tr"))

console.log(productInfosObject)

// for (let produto of listaProdutos) {
//     if (!carrinhoStorage.includes(carrinhoStorage.includes()) {
//         console.log("Não tem")
//     }

//     // document.querySelector(".cart-body").innerHTML = carrinhoStorage
// }