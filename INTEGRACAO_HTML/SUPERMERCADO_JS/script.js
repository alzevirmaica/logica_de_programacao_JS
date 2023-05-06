/*
  PAra aumentar as vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra
  de três unidades do produto.
  Elaborar um programa que leia a descrição e preço de um produto. Após, apresente as mensagens indicando a promoção.
*/           

const frm = document.querySelector('form')
const resp1 = document.querySelector("#outProduto")
const resp2 = document.querySelector("#outPromocao")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const produto = frm.inNome.value
  const preco = Number(frm.inPreco.value)

  const desconto = preco - (preco * 50) / 100
  const valorNovo = (preco * 3) - desconto

   resp1.innerText = `${produto}-Promoção: leve 3 por R$: ${valorNovo.toFixed(2)}`
   resp2.innerText = `O terceiro produto custa apenas R$: ${desconto.toFixed(2)}`
})