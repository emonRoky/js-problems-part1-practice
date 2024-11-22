const heights = [55, 65, 80 ,62 , 52, 85, 87, 90, 64];

function getMax(numbers) {
    let max = numbers[0];
    for(const num of numbers){
       if (num > max) {
            max = num;
       }
    }
    return max;
    
}

const max = getMax(heights);
console.log(max);
