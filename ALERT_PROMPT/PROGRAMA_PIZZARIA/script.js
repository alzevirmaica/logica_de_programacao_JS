/*
    Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-las. Calcule e informe o valor a ser a pago por cliente.
*/

const valorJanta = Number(prompt("Digite  o valor da Janta R$: "))
const clientes = Number(prompt("Quantos clientes vão pagar: "))

const valorCliente = valorJanta / clientes

alert(`Valor da Janta R$:${valorJanta.toFixed(2)} \n Número clientes: ${clientes} \n Valor por cliente R$:${valorCliente.toFixed(2)}`)

