// Encontra a melhor maneira para somar os numeros de numbers
// e chegar em targetSum, utilizando a tabluacao para otimizar a complexidade

function best_sum(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++)
    {
        if (table[i] != null)
        {
            for (let num of numbers)
            {
                if (i+num < table.length)
                {
                    const sum = [...table[i], num];
                    if (table[i+num] == null || sum.length < table[i+num].length)
                        table[i+num] = sum;
                }
            }
        }
    }
    
    return table[targetSum];
}

console.log(best_sum(100, [1, 1, 2, 5, 4]));