/*
  Uma farmácia está em promoção-
  na compra de duas unidades de um mesmo medicamento, 
  o cliente recebe como desconto os centavos do valor total. 
  Elaborar um programa que leia a descrição e preço de um medicamento
  Informe o valor do produto na promoção.
*/           

const frm = document.querySelector('form')
const resp1 = document.querySelector("#outMedicamento")
const resp2 = document.querySelector("#outPromocao")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const medicamento = frm.inNome.value
  const preco = Number(frm.inPreco.value)

  const promocao = Math.floor(preco * 2)

   resp1.innerText = `Promoção de ${medicamento}`
   resp2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`
})