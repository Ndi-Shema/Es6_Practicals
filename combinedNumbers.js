const combineNumbers = (numbers) => {
    const evenNumbers = numbers.filter(number => number % 2 === 0).sort((a,b)=> a-b).join('');
    const oddNumbers = numbers.filter(number => number % 2 !== 0).sort((a,b)=> a-b).join('');
    return [evenNumbers, oddNumbers];
}

console.log(combineNumbers([1, 2, 3])); // Output: ['2', '13']
console.log(combineNumbers([5, 2, 4, 7, 0])); // Output: ['024', '57']
console.log(combineNumbers([1, 3, 5, 4, 9, 6, 45, 11, 8, 22])); // Output: ['46822', '13591145']