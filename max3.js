// const jim=25;
// const tim=52;
// const kim=92;

// if(jim>tim && jim>kim)
//  {
//     console.log(`jim is the ultimate boss in the class`)
// }

// else if(tim>jim && tim>kim)
// {
//     console.log(`tim is the boss`)
// }

// else(kim>jim && kim>tim)
// {
//     console.log(`kim bta running e 7 kore dew`)
// }


function threeMax(num1,num2,num3){
    if(num1>num2 && num1>num3)
    {
        const tall=`num1 is boss those three number`
        return tall;
    }
    else if( num2>num1 && num2>num3)
    {
        const taller=`num2 is the taller those three number`
return taller

    }
else(  num3>num1 && num3>num2)
{
const tallest=`num3 is the tallest those three number`
return tallest;
}
}

const result =threeMax(85,89,566);
console.log(result);