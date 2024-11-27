const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let min = names[0];

for(let name of names){
    if(name.length < min.length){
        min = name;
    }
    
}
console.log(min);
