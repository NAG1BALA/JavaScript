const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const newArr = {};

en.map((item, index) => newArr[item] = ru[index]);
console.log(newArr);