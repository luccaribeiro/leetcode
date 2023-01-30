// Dificuldade - Easy
// Link - https://leetcode.com/problems/fibonacci-number/
// testes tirar algum dos comentario se quiser usar algum
// let n = 1 // - RESULTADO ESPERADO 1
let n = 3 // - RESULTADO ESPERADO 2
// let n = 4 // - RESULTADO ESPERADO 3

// Codigo - copiar apenas esse bloco para testar no leetcode - obs: manter a parte de parametros que ja vem no leetcode
var fib = function(n) {
    let fibonacci = [0, 1] // inicializando a lista fibonacci com os 2 primeiros numeros da sequencia caso a entrada seja 0 ou 1
    for (let indice = 2; indice <= n; indice++) { // indice começa no 2 por que os indices 0 e 1 já estão preenchidos
        fibonacci[indice] = fibonacci[indice - 2] + fibonacci[indice - 1] // a lista fibonacci vai receber um valor no indice determinado pelo loop
                                                                           // esse valor é a soma dos dois ultimos elementos antes dele
    }
    return fibonacci[n]
    };
// fim do bloco 

console.log(fib(n))