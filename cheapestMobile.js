const phones = [
    {name : 'Samsung', price : 70000, camera : '12MP', color : 'Black' },
    {name : 'Apple', price : 100000, camera : '12MP', color : 'Black' },
    {name : 'oppo', price : 60000, camera : '12MP', color : 'Black' },
    {name : 'vivo', price : 30000, camera : '12MP', color : 'Black' },
    {name : 'xiaomi', price : 40000, camera : '12MP', color : 'Black' },
];

function getCheapestPhone(phones) {
    let min = phones[0]
    for(let phone of phones){
        if (phone.price < min.price) {
            min = phone;
        }
        
    }
    return min;
    
};

const cheap = getCheapestPhone(phones);
console.log(cheap);



