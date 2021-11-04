# Algoritmo simples para realizar uma busca binaria em uma lista ordenada,
# otimizando o tempo de busca e a complexidade para O(logn)
def busca_binaria(item, lista) :
    baixo = 0
    alto = len(lista) - 1

    while (baixo <= alto):
        meio = (baixo + alto) // 2
        chute = lista[meio]
        if (chute == item):
            return meio
        elif (chute < item):
            baixo = meio + 1
        else:
            alto = meio - 1
    return None

minha_lista = [1, 3 ,4 ,5, 10 ,11, 22]
print(busca_binaria(-6, minha_lista))