// Funcao tabulada que descobre se é possivel somar os numeros de numbers
// para chegar em targetSum.
function canSum(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= table.length; i++) {
        if (table[i] == true) {
            for (let num of numbers) {
                if (i + num < table.length) {
                    table[i + num] = true;
                }
            }
        }
    }
    
    return table[targetSum];
}

console.log(canSum(7, [5, 4, 3]));