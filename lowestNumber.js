const numbers = [167, 190, 120, 165, 137];

let min = numbers[0];

for(const number of numbers){
    if(number < min){
        min = number;
    }
    
}
console.log(min);

