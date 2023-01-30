# Dificuldade - Easy
# Link - https://leetcode.com/problems/missing-number/
# testes tirar algum dos comentario se quiser usar algum
nums = [9,6,4,2,3,5,7,0,1] # RESULTADO ESPERADO 8
# nums = [0,1,2] # RESULTADO ESPERADO 3

# Codigo - copiar apenas esse bloco para testar no leetcode 
class Solution(object):
    def missingNumber(self, nums):
        tamanho = len(nums) # tamanho da lista 
        soma_total = (tamanho * (tamanho + 1)) // 2  # formula matematica para descobrir qual seria a soma  total da lista dado o tamanho dela
        soma_lista = sum(nums) # soma da lista
        numero_faltante = soma_total - soma_lista # diferença entre a soma total e a soma da lista resultando no numero faltante
        return numero_faltante

# fim do bloco

print(Solution.missingNumber(nums=nums, self=""))