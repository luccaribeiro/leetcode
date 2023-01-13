# Dificuldade - Easy
# Link - https://leetcode.com/problems/palindrome-number/
# Caso vá testar no leetcode colocar tirar o comentario do return e não copiar a linha do print nem os testes
# testes tirar algum dos comentario se quiser usar algum
x = 121 # RESULTADO ESPERADO O número é palíndromo
# x = -121 # RESULTADO ESPERADO O número não é palíndromo
# x = 10 # RESULTADO ESPERADO O número não é palíndromo

# Codigo
x_string_reversa = str(x)[::-1] # Transformando o numero em string e usando fatiamento nela para ficar inversa
if str(x) == x_string_reversa:
    print('O número é palíndromo')
    # return True
else:
    print('O número não é palíndromo')
    # return False
