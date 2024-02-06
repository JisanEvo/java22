function layerDiscount(quantitty){
    const frist100Price=100;
    const second100Price=90;
const above200Price=70;

if(quantitty<=100){
    const total=quantitty*frist100Price;
    return  total;
}
else if(quantitty<=200  ){
    const frist100total=100*frist100Price;
 const   remainingQuantity=quantitty-100;
 const second100Total=remainingQuantity*second100Price;
 const total=frist100total+second100Total;
 return total;
}
else{
    const frist100total=100*frist100Price;
    const   secondQuantity=quantitty-100;
    const second100Total=secondQuantity*second100Price;
    const remainingQuantity=quantitty-200;
    const remainingTotal=remainingQuantity*above200Price;
    const total=frist100total+second100Total+remainingTotal;
    return total;
}


}


const discount =layerDiscount(1000);
console.log(discount);