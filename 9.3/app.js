const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"];

function compare_arr(food,food1){
    for(i=0;i<food.length;i++){
        for(j=0;j<food1.length;j++){
            if(food[i]==food1[j]){
                console.log(food[i]);
            }
        }
    }
    return false;
}