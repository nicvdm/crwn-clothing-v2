/** map(); */
// const myArray = [
//     1,
//     2,
//     3,
//     4,
//     5
// ];

// let myOtherArray = [
//     5,
//     4,
//     3,
//     2,
//     1
// ];

// let newArray = myArray.map((number) => {
//     return number + myOtherArray[number - 1];
// },myOtherArray);

// console.log(myArray);
// console.log(myOtherArray);
// console.log(newArray);

/** filter(); */
// const myArray3 = [1,3,5,7,9,2];

// const filteredArr = myArray3.filter(el => el > 4);
// console.log(filteredArr);
// console.log(myArray3);

/** reduce(); */
const myArray = [1, 2, 3, 4, 5];
const peopleArr = [
  { id: 1, name: "nic", quantity: 1 },
  { id: 2, name: "bon", quantity: 1 },
  { id: 3, name: "john", quantity: 1 },
  { id: 4, name: "jane", quantity: 1 },
];
const arraySummed = myArray.reduce((accumulator, currentElement) => {
  return accumulator + currentElement;
}, 0);
console.log(arraySummed);

const person = { id: 5, name: "another" };

let people2 = peopleArr.reduce((accumulator, currentElement) => {
  if (currentElement.id === person.id) {
    currentElement.quantity++;
  }
  return [...accumulator, currentElement];
}, []);

if (!people2.find((el) => el.id === person.id)) {
  people2 = [...people2, { ...person, quantity: 1 }];
}

console.log(people2);

/** find(); */
// const myArray4 = [1, 3, 5, 7, 9, 2];
// const myArray5 = [
//   { id: 1, name: "nic" },
//   { id: 2, name: "bon" },
//   { id: 3, name: "john" },
//   { id: 4, name: "jane" },
// ];
// const exists = myArray4.find((element) => element === 5);
// console.log(exists); //5
// const exists2 = myArray4.find((element) => element > 4);
// console.log(exists2); //5

// const myObj = myArray5.find((obj) => obj.id === 1);
// console.log(myObj); //{ id: 1, name: 'nic' }

/** includes(); */
// const myArray = [
//     1,
//     2,
//     3,
//     4,
//     5
// ];

// const newArray = [
// {id:1},
// {id:2},
// {id:3},
// ];

// console.log(myArray.includes(3)); //true
// console.log(myArray.includes(9)); //false
// console.log(myArray.includes(2,3)); //false
// console.log(myArray.includes(3,2)); //true

// console.log(newArray.includes(2)); //false
// console.log(newArray.includes({id:2})); //false
// console.log(newArray.includes({id:2})); //false
