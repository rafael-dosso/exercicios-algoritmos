// Funcao recursiva que descobre se é possivel somar os numeros de numbers
// para chegar em targetSum. Utiliza memoizacao recursiva 
// para reduzir a complexidade.
function can_sum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return true; 
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (can_sum(remainder, numbers, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
}

console.log(can_sum(6, [7, 4]));