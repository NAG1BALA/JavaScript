function sum(num1, num2) {
    return num1 + num2;
}

function diff(num1, num2) {
    if (num1 > num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    }

}

function multi(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

console.log(sum(2, 6));
console.log(diff(2, 6));
console.log(multi(2, 6));
console.log(divide(2, 6));