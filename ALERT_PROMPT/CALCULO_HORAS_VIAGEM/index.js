/*
   Elaborar um programa que leia a duração de uma viagem em dias e horas.
   Calcule e informe a duração total da viagem em número de horas.
*/


const dias = Number(prompt("Nº de dias: "))
const horas = Number(prompt("Nº de horas: "))

const total = (dias * 24) + horas

alert(`Total de horas: ${total}`)