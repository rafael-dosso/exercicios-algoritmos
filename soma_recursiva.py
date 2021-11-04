# Metodo recursivo para somar cada elemento de uma lista
def soma(lista):
    if lista == []:
        return 0
    return lista.pop() + soma(lista)

# Metodo recursivo para encontrar o total de elementos de uma lista
def tamanho(lista):
    if lista == []:
        return 0
    lista.pop()
    return (1 + tamanho(lista))

# Metodo recursivo para encontrar elemento de uma lista
def maior(lista):
    if lista == []:
        return 0;
    atual = lista.pop()
    maior_ate_entao = maior(lista)
    if (atual > maior_ate_entao):
        return atual
    return maior_ate_entao 

my_list = [1, 2, 3, 4, 5, 6]
print("soma:", soma(my_list))
my_list = [1, 2, 3, 4, 5, 6]
print("tamanho:", tamanho(my_list))
my_list = [1, 2, 3, 6, 5, 4]
print("maior:", maior(my_list))