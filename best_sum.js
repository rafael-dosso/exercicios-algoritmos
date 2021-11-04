// Encontra a melhor maneira para somar os numeros de numbers
// e chegar em targetSum, utilizando a memoizacao recursiva para
// reduzir a complexidade

function best_sum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestSum = null;
    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderSum = best_sum(remainder, numbers, memo);
        if (remainderSum != null) {
            const sum = [ ...remainderSum, num] ;
            if (shortestSum === null || sum.length < shortestSum.length)
                shortestSum = sum;
        }
    }

    memo[targetSum] = shortestSum;
    return shortestSum;
}

console.log(best_sum(100, [1, 2, 4, 5, 10, 25]));