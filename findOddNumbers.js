const findOddsNumbers = (array) => {
    let odds = [];

    array.forEach(element => {
        if (typeof element === 'string'){
            odds.push(parseInt(element.length));
        } else {
            odds.push(element);
        } 
    });
    return odds.filter(num => num % 2 !==0);
}

console.log(findOddsNumbers([1, 3, 'doe', 2, 10, 11, 'john'])); // Output: [1, 3, 3, 11]
console.log(findOddsNumbers([1, 2, 3, 4, 'cat', 'horse', 7, 'elephant'])); // Output: [1, 3, 3, 5, 7]