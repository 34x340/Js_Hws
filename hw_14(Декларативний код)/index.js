// const people = [
//     { name: "Pasha", age: 16, occupation: "programmer"},
//     { name: "Masha", age: 17, occupation: "python"},
//     { name: "Dima", age: 19, occupation: "ofice"},
//     { name: "Timur", age: 18, occupation: "businessman"}
// ];
// const names = people.map((personality) => personality.name)
// console.log(names)

// 2 ///////////////////////

// const people = [
//     { name: "Pasha", age: 16, occupation: "programmer", eyeColor: "green"},
//     { name: "Masha", age: 17, occupation: "python", eyeColor: "brown"},
//     { name: "Dima", age: 19, occupation: "ofice", eyeColor: "brown"},
//     { name: "Timur", age: 18, occupation: "businessman", eyeColor: "brown"}
// ];
// const peopleEyeColor = people.filter((personEyeColor) => personEyeColor.eyeColor == 'brown')
// console.log(peopleEyeColor)

// 3 ///////////////////////

// const people = [
//     { name: "Pasha", age: 16, gender: "male", occupation: "programmer", eyeColor: "green"},
//     { name: "Masha", age: 17, gender: "female", occupation: "python", eyeColor: "brown"},
//     { name: "Dima",  age: 19, gender: "male",  occupation: "ofice", eyeColor: "brown"},
//     { name: "Timur", age: 18, gender: "male", occupation: "businessman", eyeColor: "brown"}
// ];

// const filteredGenders = users.filter((user) => user.gender === 'male')
// .map((user) => user.name);

// console.log(filteredGenders); 

// 4 ///////////////////////

// const people = [
//     { name: "Pasha", age: 16, isActive: true, occupation: "programmer", eyeColor: "green"},
//     { name: "Masha", age: 17, isActive: false, occupation: "python", eyeColor: "brown"},
//     { name: "Dima",  age: 19, isActive: true, occupation: "ofice", eyeColor: "brown"},
//     { name: "Timur", age: 18, isActive: false, occupation: "businessman", eyeColor: "brown"}
// ];
// const isActiveUsers = users.filter((user) => user.isActive)
// console.log(isActiveUsers)

// 5 ///////////////////////

// const users = [
//     { name: "Pasha", email: "123@email.com" },
//     { name: "Pasha", email: "345@email.com" },
//     { name: "Timur", email: "567@email.com" },
// ];
// const usersEmail = users.filter((user) => user.email === "567@email.com")
// console.log(usersEmail)

// 6 ///////////////////////

// const people = [
//     { name: "Pasha", age: 16,  occupation: "programmer", eyeColor: "green"},
//     { name: "Masha", age: 17,  occupation: "python", eyeColor: "brown"},
//     { name: "Dima",  age: 19,  occupation: "ofice", eyeColor: "brown"},
//     { name: "Timur", age: 18,  occupation: "businessman", eyeColor: "brown"}
// ];
// const peoplesAge = peoples.filter((user) => user.age >= 18 && user.age <= 60).map((user) => user.name)

// console.log(peoplesAge)