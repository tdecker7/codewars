function highAndLow(numbers) {
    let nums = numbers.split(' ');
    let high = low = Number(nums[0]);
    
    nums.forEach((num) => {
        if (Number(num) > high) high = num;
        if (Number(num) < low) low = num;
    })

    return `${high} ${low}`;
}

console.log('result = ', highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));