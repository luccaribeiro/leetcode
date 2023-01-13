// Dificuldade - Hard
// Link - https://leetcode.com/problems/first-missing-positive/description/
// Caso vá testar no leetcode colocar tirar o comentario do return e não copiar a linha do console.log nem os testes
// testes tirar algum dos comentario se quiser usar algum
// let nums = [1,2,0] // - RESULTADO ESPERADO 3
let nums = [7,8,9,11,12] // - RESULTADO ESPERADO 1
// let nums = [3,4,-1,1] // - RESULTADO ESPERADO 2

// Codigo

let minimo = 1 // minimo começa com 1
let lista_numeros = new Set() // lista para armazenar valores numeros que já passaram

for(numero of nums){
    lista_numeros.add(numero) // adiciona o numero na lista
    if(numero === minimo) 
        while(lista_numeros.has(minimo)) // enquanto a lista tiver o valor minimo dentro dele 
            minimo++ // acrescenta no minimo
}
// return minimo
console.log(minimo)

// Inicialmente fiz com lista ao inves de set mas dava erro de Time Limit Exceeded
