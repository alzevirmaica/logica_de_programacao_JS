const frm = document.querySelector("form") // obtén elementos da página
const respnome = document.querySelector("span")
const resplista = document.querySelector("pre")

const pacientes = [] //declara array global

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = frm.inPaciente.value //obtém nome do paciente
    pacientes.push(nome)  //adiciona o nome no final do array
    let lista = '' // string para concatenar pacientes

    //for 'tradicional' (inicia em 0, enquanto menor que o tamnho do array)
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`
    }
    resplista.innerText = lista // exibe lista dos pacientes na página
    frm.inPaciente.value = "" // limpa o conteúdo do campo do formulário
    frm.inPaciente.focus()  //posiciona o cursor no campo

})


