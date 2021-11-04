// Funcao recursiva que encontra o fibonnaci de determinado numero,
// utilizando memoizacao do numero anterior para reduzir a
// complexidade de O(2^n) para simplesmente O(n).
function fib_recursive(n) {
    if (n <= 2)
        return [1, 1];

    let res = fib_recursive(n-1)
    let fibant = res[0]
    let fibantant = res[1]
    return [fibant + fibantant, fibant]
}

function fib(n) {
    return fib_recursive(n)[0];
}

console.log(fib(500));