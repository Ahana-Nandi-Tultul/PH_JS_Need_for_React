// check truthy
let myVar = 5;
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}

// check falsy
let myMoney = 50;
if(!myMoney){

}

const money = 80;
let food;
if(money > 100){
    food = 'biryani';
}
else{
    food ='cha biscuit';
}

// ternary
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);

// nimber to string
const num1 = 55;
const num1Str = num1 + '';
// console.log(num1Str);

// string to number
const input = '560';
const inputNum = +input;
// console.log(inputNum);


// 
const isActive = false;
const showMore = () => console.log('display user');
const hiddenUser = () => console.log('hide user');
// isActive ? showMore() : hiddenUser();

// use && if the left side is true then right side will be executed
isActive && showMore();
// use || if the left side is false than right side will be executed
isActive || showMore();

// toggle boolean
isActive = !isActive;