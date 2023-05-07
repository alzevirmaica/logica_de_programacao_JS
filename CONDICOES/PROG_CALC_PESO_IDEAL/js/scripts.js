const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const nome = frm.inNome.value
  const masculino = frm.inMasculino.checked
  const altura = Number(frm.inAltura.value)

  let peso
  
  if(masculino) {
    peso = 22 * Math.pow(altura, 2)
    resp.innerText = `${nome}: O seu peso ideal é ${peso.toFixed(3)}Kg`
  } else {
    peso = 21 * Math.pow(altura, 2)
    resp.innerText = `${nome}: O seu peso ideal é ${peso.toFixed(3)}Kg`
  }
})

frm.addEventListener("reset", () => {
  resp.innerText = ""
})