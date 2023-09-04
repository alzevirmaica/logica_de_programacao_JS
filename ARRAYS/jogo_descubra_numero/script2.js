const frm = document.querySelector("form")       // obtém elementos da página
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = []                  // vetor de escopo global com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1 // num aleatório entre 1 e 100
const CHANCES = 6                 // constante com o número máximo de chances 


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    if (numero == sorteado) { //se acertou
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`
        frm.btSubmit.disabled = true // troca de status dos botões
        frm.btNovo.className = "exibe"
    } else {
        if (erros.includes(numero)) { //se o número existe no array erros(já apostou)
            alert(`Você já apostou o número ${numero}. tente outro...`)
        }else {
            erros.push(numero) //adicona número ao array
            const numErros = erros.length //obtém o tamanho do array
            const numChances = CHANCES - numErros // clacula o numero de chances
            respErros.innerText = `${numErros} (${erros.join(", ")})` // exibe o numero de erros, consteúdo do vetor e numero de chances
            respChances.innerText = numChances
            if (numChances == 0) {
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `Game Over!! Número sorteado:${sorteado} `
            }else {
                const dica = numero < sorteado ? "maior" : "Menor"
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }   
    }
    frm.inNumero.value = "" //Limpa campo de entrada
    frm.inNumero.focus() //posiciona cursor neste campo
    
    frm.btNovo.addEventListener("click", () => {
        location.reload() //recarrega a página
    })
})
