const products=[
    { name:`shampoo`,price:300},
    { name:`Shirt`,price:500 },
    { name:`Pant`,price:1200 }
]

function getShoping(item){
    let total=0
for( const product of item ){
total=total+product.price;
}
return total;
}

const total=getShoping(products);
console.log(total);