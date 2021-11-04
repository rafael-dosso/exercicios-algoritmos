# Funcao de ordenacao de arrays, nao tao eficiente quanto o quicksort.
# Complexidade de O(n^2)
def indice_menor(lista):
    menor = lista[0]
    idx_menor = 0
    for i in range(1, len(lista)):
        if (lista[i] < menor):
            menor = lista[i]
            idx_menor = i
    return idx_menor

def ordenacao_selecao(lista):
    ret = []
    for i in range(len(lista)):
        idx_menor = indice_menor(lista)
        ret.append(lista.pop(idx_menor))
    return ret

minha_lista = [7, 2, 4, 10, 21, 12]
print(ordenacao_selecao(minha_lista))