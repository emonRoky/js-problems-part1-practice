
const first50Price = 100;
const second50Price = 90;
const above100Price = 70;
function multiLayerDiscount(quantity) {
    if(quantity <= 50){
        const total = first50Price * quantity;
        return total;
    }
    else if(quantity <= 100){
        const first50Total = first50Price * 50;
        const remainingQuantity = quantity - 50;
        const second50Total = remainingQuantity * second50Price;
        const total = first50Total + second50Total;
        return total;
    }
    else{
        const first50Total = first50Price * 50;
        const second50Total = second50Price * 50;
        const remainingQuantity = quantity - 100;
        const above100Total = remainingQuantity * above100Price;
        const total = first50Total + second50Total + above100Total;
        return total;
    }
}

const totalPrice = multiLayerDiscount(200);
console.log(totalPrice);
