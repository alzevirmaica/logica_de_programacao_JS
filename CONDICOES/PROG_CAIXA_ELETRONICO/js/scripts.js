/*
 Em um determinado momento do dia, apenas notas de 10,50 e 100 estão diponíveis
 em um terminal de caixa eletrônico. Elaborar um programa que leia um valor de saque de um cliente, verifique sua validade(ou seja, se pode ser pago com as notas disponíveis) e informe o número mínimo de notas de 100, 50 e 10 necessárias para pagar esse saque. 
*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const saque = Number(frm.inSaque.value)

  if(saque % 10 != 0) {
    alert("Valor inválido para notas disponíveis(R$ 10, 50, 100)") //Se saque não é múltiplo de 10
    frm.inSaque.focus()
    return
  }

  const notasCem = Math.floor(saque / 100) //calcula as notas de 100
  let resto = saque % 100 //quanto sobra para pagar


  const notasCinquenta = Math.floor(resto / 50) //calcula as notas de 50
  resto = resto % 50 // quanto ainda sobra


  const notasDez = Math.floor(resto / 10) //calcula as notas de 10 

  if(notasCem > 0) {
    resp1.innerText = `Nota de R$ 100: ${notasCem}`
  }

  if(notasCinquenta > 0) {
    resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
  }

  if(notasDez > 0) {
    resp3.innerText = `Notas de R$ 10: ${notasDez}`
  }
  
})