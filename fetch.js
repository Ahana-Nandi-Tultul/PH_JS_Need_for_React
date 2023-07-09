// JSON => stringify, parse
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

const employeeJSON = JSON.stringify(employee);
// console.log(employee);
// console.log(employeeJSON);

const employeeObj = JSON.parse(employeeJSON);
// console.log(employeeObj);


// 2. fetch
/* fetch('url')
.then(res => res.json())
.then(data => console(data)); */

// keys, values
const keys = Object.keys(employee);
const values = Object.values(employee);

// for
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in


// 3. delete or remove from array;
const products = [
    {name: "Laptop", price: 32000, brand:"lenovo", color:"silver"},
    {name: "phone", price: 7000, brand:"iphone", color:"golden"},
    {name: "watch", price: 3000, brand:"casio", color:"yellow"},
    {name: "sunglass", price: 300, brand:"ribon", color:"black"},
    {name: "camera", price: 900, brand:"canon", color:"gray"},
    
];

const newProduct = {name: 'webcam', price: 700, brand: 'lal'};

// copy products array and then add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone;
const remaining = products.filter(product => product.name !== 'phone' );
console.log(remaining);