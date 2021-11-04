# Metodo recursivo com complexidade O(n logn) para ordenar uma lista dada

def qs(lista):
    if len(lista) < 2:
        return lista
    else:
        pivo = lista[0]
        menores = [elem for elem in lista[1:] if elem <= pivo]
        maiores = [elem for elem in lista[1:] if elem >  pivo]
        return qs(menores) + [pivo] + qs(maiores)
    
print(qs([12, 4, 8, 3, 7]))