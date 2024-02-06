function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}



function multipy(num1, num2) {
    return num1 * num2;
}
function divided(num1, num2) {
    return num1 / num2;
}

function calculator(a, b,operation) {

    if (operation ==='add') {
        const result = add(a, b);
        return result;
    }
    else if (operation === `subtract`) {
        const result = subtract(a, b);
        return result;
    }
    else if (operation === `multipy`) {
        const result = multipy(a, b)
        return result;
    }
    else if (operation === `divided`) {
        const result = divided(a, b);
        return result;
    }
    else {
        return `bta ekhane +,-,*,/ bade onnno kichu kora jai nah byjos nai `
    }

}

const result = calculator(5,7,`add`);
console.log(result);