let a = Math.floor(Math.random() * (10 - 0) + 0);
let b = Math.floor(Math.random() * (10 - 0) + 0);
let c = Math.floor(Math.random() * (10 - 0) + 0);
let d = Math.floor(Math.random() * (10 - 0) + 0);
let f = Math.floor(Math.random() * (10 - 0) + 0);

const array = []
array.push(a, b, c, d, f)
console.log(array);

let min = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i]
    }
}
console.log(`Минимальное число в массиве ${min}`);

for (let i = 0; i < array.length; i++) {
    if (array.indexOf(3) !== -1) {
        console.log(`В массиве присутствует число 3`);
        break;
    } else {
        console.log(`В массиве отсутствует число 3`);
        break;
    }
}