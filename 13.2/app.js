const foods = ["falafel", "sabich", "hummus",
"pizza with extra pineapple"];
//a.1
foods.sort();
foods.reverse();
//a.2
foods.sort();
//b.1
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
    ];
foodsWithUpperCase.sort();
foodsWithUpperCase.reverse();
//b.2
foodsWithUpperCase.sort();
//c
const words = ["apple",
"supercalifragilisticexpialidocious",
"hi", "zoo"];

const asc = words.sort((a,b) => b.length - a.length);

console.log(asc);