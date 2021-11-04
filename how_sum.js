// Encontra uma maneira qualquer para somar os numeros de numbers
// e chegar em targetSum, utilizando a memoizacao recursiva 
// para reduzir a complexidade

function how_sum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const sum = how_sum(remainder, numbers, memo);
        if (sum != null) {
            memo[targetSum] = [ ...sum, num];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null;
    return null;
}

console.log(how_sum(100, [1, 2, 4, 5, 10, 25]));