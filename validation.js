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
   console.log(full);