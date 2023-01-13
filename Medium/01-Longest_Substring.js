// Dificuldade - Medium
// Link - https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Caso vá testar no leetcode colocar tirar o comentario do return e não copiar a linha do console.log nem os testes
// testes tirar algum dos comentario se quiser usar algum
// let s = "abcabcbbtyui" // - RESULTADO ESPERADO 3
// let s = "bbbbb" // - RESULTADO ESPERADO 1
let s = "au" // - RESULTADO ESPERADO 2

//codigo
let maior_sequencia = '' // adcionaremos a sequencia aqui
for (let indice = 0; indice < s.length; indice++) {        
    if (maior_sequencia.includes(s[indice]) || new Set(maior_sequencia).size != maior_sequencia.length) {
        // entrará nesse if SE - a letra no indice especifico ja estiver na string maior_sequencia ou
        // SE a quantidade de letras unicas de maior_sequencia for diferente do tamanho da maior sequencia pois isso indica que existe
        // letras repetidas na variavel maior_sequencia
        maior_sequencia = maior_sequencia.slice(1) // exclui a primeira letra da maior_sequencia pois ela foi repetida
    } 
    maior_sequencia += s[indice] // adiciona a nova letra na maior_sequencia           
}

// return maior_sequencia.length 
console.log(maior_sequencia.length)