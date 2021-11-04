from collections import deque

def e_vendedor(nome):
    return nome[-1] == 'm'

# Funcao que procura por um grafo alvo em uma rede de grafos direcionados.
# Utilizando filas, analiza grau por grau de proximidade para partir
# do grafo inicial e encontrar o grafo procurado, que no caso
# de exemplo é um alguem que seja "vendedor de mangas".
def pesquisa(grafo):
    fila_pesquisa = deque()
    fila_pesquisa += grafo["voce"]
    verificadas = []

    while fila_pesquisa:
        pessoa = fila_pesquisa.popleft();
        if not pessoa in verificadas:
            if (e_vendedor(pessoa)):
                print(pessoa, 'eh vendedor de mangas.')
                return True
            else:
                fila_pesquisa += grafo[pessoa]
                verificadas.append(pessoa)

    return False

grafo = {}
grafo["voce"] = ["alice", "bob", "claire"]
grafo["alice"] = ["peggy"]
grafo["bob"] = ["anuj", "peggy"]
grafo["claire"] = ["thom", "jhonny"]
grafo["thom"] = []
grafo["anuj"] = []
grafo["jonny"] = []
grafo["peggy"] = []

pesquisa(grafo)