const numbers = [89, 35, 98, 12];
const student = {
    name: 'Misti',
    age: 32,
    movies: ['King', 'Queen']
}

// 1. template string
const about = `My name is ${student.name} age of ${student.age} 
has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);


// 2.arrow function
const getFive = () => 5;
const addFive = num => num + 5;
const isEven = x => x % 2 === 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// 3. Spread operator
const newNumbers = [...numbers];
newNumbers.push(33);
console.log(numbers, newNumbers);
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];
console.log(numbers, newNumbers, currentNumbers);