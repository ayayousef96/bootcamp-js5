const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id){
    //let i=id;
    const c =candyStore.candies.find(b => b.id == id);
    return(c);
}

let s="5hd7y";
//getCandy(candyStore,s);

function getPrice(candyStore, id){
    const c2 =candyStore.candies.find(c => c.id == id);
    return(c2.price);
}
function addCandy(candyStore, id, name, price){
    candyStore.candies.push({"name": name, "id":id,"price":price, "amount":1});
}

function buy(candyStore, id){
    const candy=candyStore.candies.find(c => c.id==id);
    candyStore.cashRegister += getPrice(candyStore, id);
    candy.amount -=1;
    console.log(candyStore);

}

//buy(candyStore,s);
////addCandy(candyStore, 'sr456', 'rees', 8);
///console.log(candyStore);
///getPrice(candyStore,s);
