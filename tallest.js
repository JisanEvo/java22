const heights=[66,58,45,69,78,23,91]

function getMax(numbers){
    // console.log(numbers)
       let max=numbers[0];

    for(const number of numbers){
        if(max<number)
        {
       max=number;
        }
//   console.log(number)

    }
return max;
}
const max=getMax(heights)
console.log(max);