# Dificuldade - Hard
# Link - https://leetcode.com/problems/maximum-gap/
# testes tirar algum dos comentario se quiser usar algum
# nums = [3,6,9,1]  # RESULTADO ESPERADO 3
nums = [10]  # RESULTADO ESPERADO 0

# Codigo - copiar apenas esse bloco para testar no leetcode 
class Solution(object):
    def maximumGap(self, nums):
       nums.sort() # Ordenando os números
       resultado = [0] # colocando uma lista com 0 para caso a lista só tenha um elemento
       if len(nums) > 1: # se a lista tiver mais de um elemento
           resultado =  [nums[indice+1]-valor for indice, valor in enumerate(nums) if valor !=nums[-1]] # list list comprehension que soma em pares o primeiro com
           # o segundo, o segundo com o terceiro, e assim vai indo até o final, o if serve para não tentar ir um indice a mais que o ultimo elemento
       if resultado == []:
           resultado = [0] # se todos elementos forem iguais o list comprehension retorna uma lista vazia então caso isso aconteça voltamos com uma lista so com 0
       # return max(resultado)
       return max(resultado) # retorna o maior da lista resultado

# fim do bloco

print(Solution.maximumGap(self='',nums=nums))