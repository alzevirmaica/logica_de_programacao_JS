/*
  Elaborar Um programa que leia um número. Informe se ele é par ou ímpar.
  faça com if..else...tradicional e, após, tente criar a condição com o operador
  ternário
*/

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const num = Number(frm.inNumber.value)

  /*if(num % 2 == 0) {
    resp.innerText = `${num} é par`
  } else {
    resp.innerText = `${num} é ímpar`
  }*/
   

  //Operador ternário
  const parImpar = num % 2 == 0 ? resp.innerText =`${num} é par` : resp.innerText =`${num} ímpar`
})