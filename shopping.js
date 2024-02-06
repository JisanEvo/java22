const products=[
    { name:`shampoo`,price:300,quantitty: 2},
    { name:`Shirt`,price:500 ,quantitty: 3},
    { name:`Pant`,price:1200,quantitty:4 }
]

function cardTotal(item){
    let total=0;
for(const product of item){
    // item=price*
total=total+product.price*product.quantitty;
}
return total;
}


const total=cardTotal(products);
console.log(total);