// Descobre o numero total de caminhos possiveis para ir do topo à esquerda de
// um quadriculado e chegar no canto inferior direito, utilizando tabulacao
// para otimizar a complexidade

function gridTrav(m, n) {
    const table = Array(m + 1).fill()
    .map(() => Array(n + 1).fill(0));
    table[1][1] = 1;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j];
            if (j + 1 <= n) table[i][j+1] += current;
            if (i + 1 <= m) table[i+1][j] += current;
        }
    }

    return table[m][n];
}
console.log(gridTrav(1, 1));
console.log(gridTrav(2, 3));
console.log(gridTrav(3, 2));
console.log(gridTrav(3, 3));
console.log(gridTrav(18, 18));