function multipy(num1,num2){

    if (typeof num1  !==`number`|| typeof num2 !==`number`  ){
        return `Please Provide a Valid Number`
    }

    const result=num1*num2;
    return result;
}

   const result=multipy(8,7);
   console.log(result);



   function fullName(frist,second){
    if (typeof frist !==`string`|| typeof second !==`string`)

    {
        return `bta name e th abol tabol hoi na re...Please Provide a Alphabet`
    }
    const full=frist+ ' ' +second;
    return full;
   }

   const full=fullName(`Jisan`,788);
//    console.log(full);


function getPrice(product){
    if( typeof product !==`object`){
        return `Please Provide an Object`
    }
    const price=product.price;
    return price;
}


const  price=getPrice({name:`chulkani dandy`,price:25,color:`red`});
console.log(price);

function getSecond(numbers){
    if (Array.isArray(numbers)===false){
        return `Please Provide a Array`
    }
    // console.log(typeof numbers)
    const second=numbers[1]
    return second;
}

const bta =getSecond(1,2,3,4,5,6);
console.log(bta);