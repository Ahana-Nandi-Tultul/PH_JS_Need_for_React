const person = {
    name: 'Lal Nil Holud Mia',
    profession: 'Traffic Surgeon',
    age: 39,
    25: 'summer',
    'son-name' : 'misti',
    address: 'Shahabag'
}

// dot notation
const prof1 = person.profession;

// bracket notation
const prof2 = person['profession'];
const pName = 'profession';
const prof3 = person[pName];
console.log(prof3);

const season = person[25];
const son = person['son-name'];