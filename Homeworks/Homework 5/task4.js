const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];


const productsNew = products.filter((product) => {   // Первое задание
    if (product.photos === undefined || product.photos.length == 0) return false
    return true
});

console.log(productsNew);

const price = 'price';  // Второе задание
const sorted = products.sort((product1, product2) => product1[price] > product2[price] ? 1 : -1);
console.log(sorted);