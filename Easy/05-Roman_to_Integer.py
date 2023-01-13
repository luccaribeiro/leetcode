# Dificuldade - Easy
# Link - https://leetcode.com/problems/roman-to-integer/
# Caso vá testar no leetcode colocar tirar o comentario do return e não copiar a linha do print nem os testes
# testes tirar algum dos comentario se quiser usar algum
# s = "III" # RESULTADO ESPERADO 3
s = "LVIII" # RESULTADO ESPERADO 58
# s = "MCMXCIV" # RESULTADO ESPERADO 1994


# Codigo
romano_e_inteiros = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
}

total = 0
anterior = 0
for indice in range(len(s)):
    inteiro = romano_e_inteiros[s[indice]] # pega o inteiro equivalente do romano
    if inteiro > anterior: # se o numero anterior(esquerda) for menor que o inteiro(atualmente o numero da direita) entra naquela regra de subtrair
        total += inteiro - (2 * anterior) # como ja adicionamos ps: na primeira execução desse if(o anterior vai ser igual a 0 então vai ser praticamente total
    else:                                 # += inteiro já que é * por 0) vamos fazer * 2 e só depois subtrair para compensar já que o valor ja foi adicionado 
        total += inteiro # não tivemos que subtrair então so adicionar ao total # aqui adicionamos o inteiro mas caso proximo valor de inteiro
                        # for maior que esse como já adicionamos ele na hora de fazer a subtração vamos ter que fazer aquele esquema de * 2 
    anterior = inteiro # anterior recebe o valor de inteiro 
# return total
print(total)
