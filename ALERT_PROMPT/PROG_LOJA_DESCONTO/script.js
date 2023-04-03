/*
    Elaborar um programa Para uma loja, o qual leia o preço de um produto
    e informe as opções de pagamento da loja. Calcule e informe o valor
    para o pagamento á vista com 10% de desconto e o valor em 3x.
*/

 const preco = Number(prompt("Digite o valor do produto R$: "))

 const aVista = preco - (preco * 10 / 100)
 const parcelado = preco / 3

 alert(`Preço R$:${preco.toFixed(2)} \n À vista R$:${aVista.toFixed(2)} \n Ou em 3x de R$:${parcelado}`)