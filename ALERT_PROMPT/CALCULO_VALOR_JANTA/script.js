/*
    Elaborar um programa que leia um valor de um jantar.
    Calcule e informe o valor da taxa de 10% do garçom e o valor a ser pago.
*/

const ValorJanta = Number (prompt("Digite o valor da janta $: "))
const TaxaGarcom = ValorJanta * 0.10
const NovoValor = ValorJanta + TaxaGarcom
alert(`Valor da janta $${ValorJanta.toFixed(2)} \n Taxa do garçom $${TaxaGarcom.toFixed(2)} \n Valor a pagar $${NovoValor.toFixed(2)}`)