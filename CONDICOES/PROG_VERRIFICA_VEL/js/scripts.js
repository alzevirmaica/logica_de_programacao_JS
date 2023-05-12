/*
  Elaborar Um programa que leia a velocidade permitida em uma estrada
  e a velocidade de um condutor. Se a velocidade for inferior ou igual á permitida, exiba "Sem multa" se a velocidade for de até a 20% maior que a permitida, exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave"
*/

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const veloPermitida = Number(frm.inNumber1.value)
  const veloCondutor = Number(frm.inNumber.value)

  if(veloPermitida >= veloCondutor) {
    resp.innerText = `Situação: Sem multa`
  }else {
    const maisVinte = veloPermitida * 1.2
    if(maisVinte >= veloCondutor) {
      resp.innerText = `Situação: Multa leve`
    }
    if(maisVinte < veloCondutor) {
      resp.innerText = `Situação: Multa grave`
    }
  }

  
})