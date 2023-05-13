/*
  Elaborar um programa para simular um parquímetro, o qual leia o valor
  de moedas depositado em um terminal de estacionamento rotativo. O programa
  deve informar o tempo de permanência do veículo no local e o troco (se existir)
  
  valores do parquímetro:
  1,00 == 30
  1,75 == 60
  3,00 == 120
*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outTempo")
const resp2 = document.querySelector("#outTroco")

frm.addEventListener("submit", (e) => {
  e.preventDefault() 

  const valor = Number(frm.inValor.value)
  
  // caso valor insuficiente
  if (valor < 1.00) {
    alert("Valor Insuficiente (no mínimo, R$ 1.00)")
    frm.inValor.focus()
    return
  }

  //Declara variáveis
  let tempo
  let troco

  // Cria as condições para verificar tempo e troco
  if(valor >= 3.00) {
    tempo = 120
    troco = valor - 3.00
  } else if(valor >= 1.75) {
    tempo = 60
    troco = valor - 1.75
  }else {
    tempo = 30
    troco = valor - 1.00
  }

  //Exibe as respostas
  resp1.innerText = `Tempo: ${tempo} min`
  resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
  
})