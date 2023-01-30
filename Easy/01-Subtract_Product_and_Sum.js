// Dificuldade - Easy
// Link - https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
// testes tirar algum dos comentario se quiser usar algum
let n = 234 // - RESULTADO ESPERADO 15
// let n = 4421 //- RESULTADO ESPERADO 21


// Codigo - copiar apenas esse bloco para testar no leetcode - obs: manter a parte de parametros que ja vem no leetcode
var subtractProductAndSum = function(n) {
    let listaDigitos = n.toString().split("")  // Transformando o numero inteiro em string e depois em uma lista com cada numero compondo um elemento 
    let soma = 0 
    let multiplicacao = 1

    for (let numero of listaDigitos) {
        soma += parseInt(numero) // cada numero na lista sendo somado com a variavel soma
        multiplicacao *= parseInt(numero) // cada numero na lista sendo multiplicado com a variavel multiplicacao
    }
    let resultado = multiplicacao - soma // multiplicação - soma 
    return resultado
    };

// fim do bloco

console.log(subtractProductAndSum(n))