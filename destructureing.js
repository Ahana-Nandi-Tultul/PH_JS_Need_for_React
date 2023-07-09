//  1. array destructuring
const numbers = [42, 65];
const [x, y] = numbers;

function boxify (num1, num2){
    const numbers = [num1, num2];
    return numbers;
}

console.log(boxify(x, y));
const [n1, n2] = boxify(100, 120);
console.log(n1, n2);

// object destructuring
const {name, age} = {name:'misti',  age: 12};
const {name1, age2} = {name:'misti',  age: 12, salary: 34000};

const employee = {
    ide: 'Vs code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'CSS', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'Dhaka',
        drink: 'water'
    },
    watch: {
        color: 'black',
        brand: 'garmin',
        price: 500
    }

}

const {designation, ide} = employee;
const {weight, address} = employee.specification;
const {brand} = employee?.watch?.brand;