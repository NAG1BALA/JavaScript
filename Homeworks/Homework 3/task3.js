let number1 = Number(prompt(`Введите первое число`));
let number2 = Number(prompt(`Введите второе число`));
let number3 = Number(prompt(`Введите третье число`));

function findMax(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(`${num1} максимальное из всех введенных чисел`);
    } else if (num2 > num1 && num2 > num3) {
        console.log(`${num2} максимальное из всех введенных чисел`);
    } else {
        console.log(`${num3} максимальное из всех введенных чисел`);
    }
}

findMax(number1, number2, number3)
