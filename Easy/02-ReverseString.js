// Dificuldade - Easy
// Link - https://leetcode.com/problems/reverse-string/
// testes tirar algum dos comentario se quiser usar algum
// let s = ["h","e","l","l","o"] // - RESULTADO ESPERADO ["o","l","l","e","h"]
let s = ["H","a","n","n","a","h"] //- RESULTADO ESPERADO ["h","a","n","n","a","H"]


// Codigo - copiar apenas esse bloco para testar no leetcode - obs: manter a parte de parametros que ja vem no leetcode
var reverseString = function(s) {
    lista_invertida = s.reverse()
    return lista_invertida
};
// fim do bloco

console.log(reverseString(s))