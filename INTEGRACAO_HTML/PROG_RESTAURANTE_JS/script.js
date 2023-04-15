/*
  Elaborar um programa para um restaurante que leia o preço por Kg
  e o consumo (em Gramas) de um cliente. Exiba o valor a ser pago.
*/

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const quilo = Number(frm.inQuilo.value)
  const consumo = Number(frm.inConsumo.value)

  const preco = (quilo / 1000) * consumo

  resp.innerText = `Valor a pagar ${preco.toFixed(2)}`
})