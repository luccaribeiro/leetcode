# Dificuldade - Easy
# Link - https://leetcode.com/problems/palindrome-number/
# testes tirar algum dos comentario se quiser usar algum
# x = 121 # RESULTADO ESPERADO True
x = -121 # RESULTADO ESPERADO False
# x = 10 # RESULTADO ESPERADO False


# Codigo - copiar apenas esse bloco para testar no leetcode 
class Solution(object):
    def isPalindrome(self, x):
        x_string_reversa = str(x)[::-1] # Transformando o numero em string e usando fatiamento nela para    ficar inversa
        if str(x) == x_string_reversa:  
            return True   
        else:   
            return False
# fim do bloco

print(Solution.isPalindrome(self='', x=x))