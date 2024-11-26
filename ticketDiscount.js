/**
 * ticket 100 = 100 /USD
 * ticket up to 100 less than 200 pcs = 90/usd
 * ticket up to 200 pcs = 70/usd
 */

let Price;
function ticketDiscount(ticketQuantity) {
    if (ticketQuantity <= 100) {
        Price = ticketQuantity * 100;
        return Price;
    } 
    else if (ticketQuantity <= 200 ){
        Price = ticketQuantity * 90;
        return Price;
    }
    else{
        Price = ticketQuantity * 70;
        return Price;
    }
}
const totalPrice = ticketDiscount(201);
console.log(totalPrice);
