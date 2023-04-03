/*
    Elaborar um programa que leia 2 notas de uma aluno em uma disciplina.
    Calcule e informe a média das notas
*/

const nota1 = Number(prompt("Digite a primeira nota: "))
const nota2 = Number(prompt("Digite a segunda nota: "))

const media = (nota1 + nota2) / 2

alert(`1º nota: ${nota1.toFixed(1)} \n 2º nota: ${nota2.toFixed(1)} \n Média: ${media.toFixed(1)}`)