// Dificuldade - Easy
// Link - https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/


// testes tirar o comentario se quiser usar algum
// let n = 234
// let n = 4421

// Codigo
let lista_digitos = n.toString().split("")  // Transformando o numero inteiro em string e depois em uma lista com cada numero compondo um elemento 
let soma = 0 
let mult = 1

for (let numero of lista_digitos) {
    soma += parseInt(numero) // cada numero na lista sendo somado com a variavel soma
    mult *= parseInt(numero) // cada numero na lista sendo multiplicado com a variavel mult
}
let resultado = mult - soma // multiplicação - soma 
// return resultado

// caso vá testar no leetcode colocar o return acima sem ser comentario e não copiar a linha do console.log nem os testes

console.log(resultado)