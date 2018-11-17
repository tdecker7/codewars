function digitalRoot(n) {
    // recursive sum for digits of n
    // n = 123
    // dR = 1 + 2 + 3 => 6

    let stringN = n.toString();
    let sum = 0;
    stringN = stringN.split('');

    stringN.forEach(digit => {
        sum += Number(digit);
    })
    let totalDigits = sum.toString().length;

    return totalDigits === 1 ? sum : digitalRoot(sum);
}
console.log(digitalRoot(16)); // = 7
// => 1 + 6 = 7
console.log(digitalRoot(456)); // = 6
// => 4 + 5 + 6 = 15
// => 1 + 5 = 6