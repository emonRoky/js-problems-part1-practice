//You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2


let numbers = [5, 6, 11, 12, 98, 5];
let targetNumber = 25;

let count = 0;

for(let prom of numbers){
    if(targetNumber === prom){
        count++;
    } 
}
console.log(count);


