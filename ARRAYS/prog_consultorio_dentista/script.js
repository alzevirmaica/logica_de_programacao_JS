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


frm.btUrgencia.addEventListener("click", () => {

    //verifica se as validações do form estão ok(no caso, paciente is required)
    if (!frm.checkValidity()) {
        alert('Informe o nome do paciente a ser  atendido com urgência')
        frm.inPaciente.focus() //posiciona o cursor no campo inPaciente
        return //retorna ao form
    }


    const nome = frm.inPaciente.value //obtém nome do paciente
    pacientes.unshift(nome)  //adiciona o paciente no início do array
    let lista = '' // string para concatenar pacientes

    //forEach aplicado sobre array pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    resplista.innerText = lista // exibe lista dos pacientes na página
    frm.inPaciente.value = "" // limpa o conteúdo do campo do formulário
    frm.inPaciente.focus()  //posiciona o cursor no campo
})


frm.btAtender.addEventListener("click", () => {

    const nome = frm.inPaciente.value //obtém nome do paciente
    
    

    //Se o tamanho do array = 0
    if (pacientes.length == 0) {
        alert('Não há pacientes na lista de espera')
        frm.inPaciente.focus() //posiciona o cursor no campo inPaciente
        return //retorna ao form
    }


    const atender = pacientes.shift(nome) //remove do início da fila (e obtém nome)
    respnome.innerText = atender // exibe o nome do paciente em atendimentos
    let lista = '' // string para concatenar pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`)) //forEach aplicado sobre array pacientes
    resplista.innerText = lista
})
