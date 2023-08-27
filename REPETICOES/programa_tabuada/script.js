const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    let resposta = "" // Variável do tipo string, para concatenar a resposta
    
    //cria um laço de repetição(i começa em 1 e é incrementado até 10)
    for(let i = 1; i <= 10; i++) {
    
        //A variavel reposta vai acumulando os novos conteúdos
        resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`
    }  

    resp.innerText = resposta
})