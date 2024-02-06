const mobile=[
    { name:`samsumg`, price:20000,camera:`12mp`,color:`black` },
    { name:`nokia`, price:15000,camera:`12mp`,color:`green` },
    { name:`xiaomi`, price:19000,camera:`12mp`,color:`blue` },
    { name:`vivo`, price:17000,camera:`5mp`,color:`white` },
    { name:`htc`, price:16000,camera:`8mp`,color:`red` },
    { name:`realme`, price:20000,camera:`10mp`,color:`yellow` }
]
// console.log(mobile);
function getCheapest(phones){
let min=phones[0];
for(const phone of phones ){
if(phone.price<min.price){
 min=phone;
}
}
return min;
}

const phone =getCheapest(mobile)
console.log(phone);