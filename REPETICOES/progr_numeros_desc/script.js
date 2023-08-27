const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    let resposta = `Entre ${numero} e 1: ` // Variável para montar a resposta
    
    //cria um for decrescenyte
    for(let i = numero; i > 0; i--) {
    
        //A variavel reposta acumula números (e virgulas)
        resposta = resposta + i + " , "
    }  

    resp.innerText = resposta
})