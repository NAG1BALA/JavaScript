
function check() {
    let data = Number(prompt(`Введите число`));
    if (Number.isNaN(data) == false) {
        alert(`Размер заработной платы за вычетом налогов равен ${data * 0.87}`);
    } else {
        alert(`Значение задано неверно`);
    }
}

check();

