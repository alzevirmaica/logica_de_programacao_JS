/*
  Elaborar um programa para um cinema, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos conforme destacado na figura 2.6
*/


//Cria referência ao form e aos elementos h3 e h4 (resposta)
const frm = document.querySelector("form")
const reps1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// Cria um ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {

e.preventDefault() //Evita o envio do form

const titulo = frm.inTitulo.value //obtém conteúdo dos campos
const duracao = Number(frm.inDuracao.value)

const horas = Math.floor(duracao / 60) //arredonda para baixo o resultado
const minutos = duracao % 60 // obtem o resto da divisão

reps1.innerText = titulo  // Exibe as respostas
resp2.innerText = `${horas} horas(s) e ${minutos} minutos(s)`
})