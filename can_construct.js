// Funcao recursiva memoizada que descobre se é possivel construir a
// string target com os substrings de words, com complexidade otimizada.

function can_construct(target, words, memo = {}) {
    if (target in memo) return memo[target];
    if (target === '') return true;
    
    for (let word of words) {
        if (target.indexOf(word) == 0) {
            const suffix = target.slice(word.length);
            if (can_construct(suffix, words, memo) == true) {
                memo[target] = true
                return true;
            }
        }
    }

    memo[target] = false;
    return false;
}

console.log(can_construct('abcdef', ['abc', 'ab', 'cd', 'def', 'abcd']));
console.log(can_construct('skateboard', ['ska', 'sk', 'bo', 'rd', 'ate', 'boar', 't']));
console.log(can_construct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e', 'eee', 'eeee', 'eeeee', 'eeeeeeeeeeee', 'eeeeeeeeee'
]))