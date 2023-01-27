// Dificuldade - Easy
// Link - https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
// Caso vá testar no leetcode colocar tirar o comentario do return e não copiar a linha do console.log nem os testes
// testes tirar algum dos comentario se quiser usar algum
let n = 234 // - RESULTADO ESPERADO 15
// let n = 4421 //- RESULTADO ESPERADO 21


// Codigo
let listaDigitos = n.toString().split("")  // Transformando o numero inteiro em string e depois em uma lista com cada numero compondo um elemento 
let soma = 0 
let multiplicacao = 1

for (let numero of listaDigitos) {
    soma += parseInt(numero) // cada numero na lista sendo somado com a variavel soma
    multiplicacao *= parseInt(numero) // cada numero na lista sendo multiplicado com a variavel multiplicacao
}
let resultado = multiplicacao - soma // multiplicação - soma 
// return resultado

console.log(resultado)