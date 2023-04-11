//Crie um código para conversão de temperaturas, celsius para Fahrenheit e vice-versa.

const celsius = 30
const fahrenheit = 86

function celciusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9
}

console.log(`${celsius} graus celsius equivalem a ${celciusToFahrenheit(celsius)} graus Fahrenheit`)

console.log(`${fahrenheit} graus fahrenheit equivalem a ${fahrenheitToCelsius(fahrenheit)} graus celsius`)