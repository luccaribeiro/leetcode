// Dificuldade - Hard
// Link - https://leetcode.com/problems/first-missing-positive/description/
// testes tirar algum dos comentario se quiser usar algum
// let nums = [1,2,0] // - RESULTADO ESPERADO 3
// let nums = [7,8,9,11,12] // - RESULTADO ESPERADO 1
let nums = [3,4,-1,1] // - RESULTADO ESPERADO 2

// Codigo - copiar apenas esse bloco para testar no leetcode - obs: manter a parte de parametros que ja vem no leetcode
var firstMissingPositive = function(nums) {
    let minimo = 1 // minimo começa com 1
    let listaNumeros = new Set() // lista para armazenar valores numeros que já passaram
    
    for(numero of nums){
        listaNumeros.add(numero) // adiciona o numero na lista
        if(numero === minimo) 
            while(listaNumeros.has(minimo)) // enquanto a lista tiver o valor minimo dentro dele 
                minimo++ // acrescenta no minimo
    }
    return minimo
    
    };
// fim do bloco

console.log(firstMissingPositive(nums))

