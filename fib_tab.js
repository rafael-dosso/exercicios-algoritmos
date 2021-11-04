// Funcao que encontra o fibonnaci de determinado numero,
// utilizando tabulacao para reduzir a
// complexidade de O(2^n) para simplesmente O(n).

function fib(n) {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[n];
}

console.log(fib(50));