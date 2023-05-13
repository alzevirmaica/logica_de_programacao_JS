/*
  Elaborar um programa que leia TrÊs lados e verifique se eles podem
  formar um triângulo. Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possam formar um triângulo, exiba também qual
  o tipo do triângulo: Equilátero (3 lados iguais), Isósceles(2 lados iguais)
  e escaleno (3 lados diferentes)
*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outSimNao")
const resp2 = document.querySelector("#outTipo")

frm.addEventListener("submit", (e) => {
  e.preventDefault() 

  const ladoA = Number(frm.inLadoA.value)
  const ladoB = Number(frm.inLadoB.value)
  const ladoC = Number(frm.inLadoC.value)
  
  // caso valores não formem um triângulo
  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    alert("Valores não formam um triângulo")
    frm.focus()
    return
  }

  // Cria as condições para verificar tipo de triângulo
  if(ladoA == ladoB && ladoB == ladoC) {
    resp1.innerText = `Lados formam um triângulo`
    resp2.innerText = `Tipo: Equilátero`
  } else if(ladoA == ladoB && ladoB != ladoC || ladoA == ladoC && ladoC != ladoB || ladoB == ladoC && ladoC != ladoA) {
    resp1.innerText = `Lados formam um triângulo`
    resp2.innerText = `Tipo: Isósceles`
  } else {
    resp1.innerText = `Lados formam um triângulo`
    resp2.innerText = `Tipo: Escaleno`
  }

})