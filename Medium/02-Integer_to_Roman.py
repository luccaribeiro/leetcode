# Dificuldade - Medium
# Link - https://leetcode.com/problems/integer-to-roman
# Caso vá testar no leetcode colocar tirar o comentario do return e não copiar a linha do print nem os testes
# testes tirar algum dos comentario se quiser usar algum
# num = 3 # RESULTADO ESPERADO III
# num = 58 # RESULTADO ESPERADO LVIII
num = 1994 # RESULTADO ESPERADO MCMXCIV



# Codigo - copiar apenas esse bloco para testar no leetcode - obs: Esse só funciona no python3
class Solution(object):
    def intToRoman(self, num):
        romanos_e_inteiros = {"M":1000,"CM":900,"D": 500,"CD":400,"C":100,"XC":90,
        "L":50,"XL": 40,"XXX":30,"XX": 20,"X":10,"IX":9,"V":5,"IV":4,"I": 1}
        resposta = ""
        for indice, valor in romanos_e_inteiros.items():
            while num >= valor:
                num -= valor
                resposta += indice

        return resposta

# fim do bloco


print(Solution.intToRoman(self='', num=num))
