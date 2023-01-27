// Dificuldade - Medium
// Link - https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Caso vá testar no leetcode colocar tirar o comentario do return e não copiar a linha do console.log nem os testes
// testes tirar algum dos comentario se quiser usar algum
let s = "abcabcbbty" // - RESULTADO ESPERADO 3
// let s = "bbbbb" // - RESULTADO ESPERADO 1
// let s = "au" // - RESULTADO ESPERADO 2

//codigo
let maiorSequencia = '' // adcionaremos a sequencia aqui
for (let indice = 0; indice < s.length; indice++) {        
    if (maiorSequencia.includes(s[indice]) || new Set(maiorSequencia).size != maiorSequencia.length) {
        // entrará nesse if SE - a letra no indice especifico ja estiver na string maiorSequencia ou
        // SE a quantidade de letras unicas de maiorSequencia for diferente do tamanho da maior sequencia pois isso indica que existe
        // letras repetidas na variavel maiorSequencia
        maiorSequencia = maiorSequencia.slice(1) // exclui a primeira letra da maiorSequencia pois ela foi repetida
    } 
    maiorSequencia += s[indice] // adiciona a nova letra na maiorSequencia           
}

// return maiorSequencia.length 
console.log(maiorSequencia.length)