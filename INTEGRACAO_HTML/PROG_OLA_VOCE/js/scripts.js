//Cria uma refêrencia ao form e ao elemento h3(Onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.nome.value // obtém o nomoe digitado no form.
    resp.innerText = `Olá ${nome}`//Exibe a resposta do programa.
    
})