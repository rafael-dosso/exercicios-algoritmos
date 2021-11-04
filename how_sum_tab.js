// Encontra uma maneira qualquer para somar os numeros de numbers
// e chegar em targetSum, utilizando a tabluacao para otimizar a complexidade

function howSum(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++)
    {
        if (table[i] != null)
        {
            for (let num of numbers)
            {
                if (i + num < table.length) {
                    table[i + num] = [...table[i], num];
                }
            }
        }
    }
    
    return table[targetSum];
}

console.log(howSum(7, [2, 4, 5]));