console.log(`            Level 18 Debugging JS`);
console.log(`            =======================`)




const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];


console.log(`===== opdracht 1 log al list =====`)
for (let person of array) {
    console.log(person);
}
console.log(`===== opdracht 2 Log al names =====`)
for (let person of array) {
    console.log(`This is: ${person.name}`);
}
console.log(`===== opdracht 3 log Day of birth =====`)
date = new Date;
let YearNow = date.getFullYear();
console.log(`Its now the year: ${YearNow}`);
for (let person of array) {
    console.log(`${person.name} was born in: ${YearNow - person.age}`);
}
console.log(`===== opdracht 4 log name plus beroep =====`)
for (let person of array) {
    console.log(`${person.name} is a ${person.profession}`);
}
console.log(`===== opdracht 5 if statement older than 50 =====`)
for (let person of array) {
    if (person.age > 50) {
        console.log(`${person.name} = ${person.age}`);
    }
}

