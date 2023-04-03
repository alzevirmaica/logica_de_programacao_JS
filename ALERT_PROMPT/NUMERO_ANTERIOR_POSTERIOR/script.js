/*
    Elaborar um programa que leia um número. Calcule e informe os seus vizinhos,
    ou seja, o número anterior e posterior

*/

const num = Number (prompt("Digite um número:  "))

const anterior = num - 1
const posterior = num + 1

alert(`O número ${num} tem como número anterior ${anterior} e número posterior ${posterior}`)