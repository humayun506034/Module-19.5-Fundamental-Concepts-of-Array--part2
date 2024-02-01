//first way
const numbers = [1, 2, , 3, 4, 5, 6, 7];

console.log(numbers);

numbers.reverse();

console.log(numbers);

//second way

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const rev_digits = [];
for (const digit of digits) {
    rev_digits.unshift(digit);
}
console.log(rev_digits);

//using for loop

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15];
const rev_values=[];
for (let i=0;i<values.length;i++){
    const value =values[i];
    rev_values.unshift(value);
    console.log(rev_values);
}