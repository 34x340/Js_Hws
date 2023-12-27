////// 1 ////////////////////

// const addButton = document.getElementById('add money');
// const getButton = document.getElementById('get money');
// const bankAccount = {
//     ownerName: "pasha",
//     accountNumber: 101010,
//     balance: 5000,
//     deposit: 1000,
//     get: 500,
//     addMoneyButton() {
//         addButton.addEventListener('click', (event) => {
//             bankAccount.balance = bankAccount.balance + bankAccount.deposit
//             console.log(bankAccount.balance)
//         })
//     },
//     getMoneyButton() {
//         getButton.addEventListener('click', (event) => {
//             bankAccount.balance = bankAccount.balance - bankAccount.get
//             if (bankAccount.balance <= 0) {
//                 console.log("not enough money.")
//             }
//             console.log(bankAccount.balance)
//         })
//     }
// }
// bankAccount.addMoneyButton()
// bankAccount.getMoneyButton()

// const { ownerName, accountNumber, balance, deposit } = bankAccount;
// console.log(ownerName, accountNumber, balance, deposit);

////// 2 ////////////////////

// const weather = {
//     temperature: prompt("введіть температцрц"),
//     humidity: 10,
//     windSpeed: 2,
//     checkTemperature() {
//         if (weather.temperature > 0) {
//             console.log("false")
//         } else {
//             console.log("true")
//         }
//     }
// }
// weather.checkTemperature()

// const { temperature, humidity, windSpeed} = weather;
// console.log(weather);

// ////// 3 ////////////////////

// const user = {
//         name: 'Pasha',
//         email: 'pasha@gmail,com',
//         password: 12345,
//         emailCheck() {
//             const checkEmail = prompt("введіть вашу пошту:")
//         if (checkEmail === user.email) {
//             alert("done")
//         } else {
//             alert("error")
//         }
//         },
//         passwordCheck() {
//             const checkPassword = Number(prompt("введіть ваш пароль:"))
//         if (checkPassword === user.password) {
//         alert("done")
//     } else {
//         alert("error")
//     }
//         }
//     }
//     user.emailCheck()
//     user.passwordCheck()
    
//     const {name, email, password} = user;
//     console.log(name, email, password);

////// 4 ////////////////////

// const filmName = document.getElementById("name");
// const movie = {
//     name: "Resident Evil",
//     director: "Пол У. С. Андерсон",
//     year: 2002,
//     rating: 6.6,
//     goodRating() {
//         if (this.rating > 6) {
//             console.log("true")
//             filmName.style.color = "green"
//             filmName.textContent = this.name
//         } else {
//             console.log("false")
//             filmName.style.color = "red"
//             filmName.textContent = this.name
//         }
//     }
// }
// movie.goodRating()

// const { name, director, year, rating} = movie;
// console.log(name, director, year, rating);

////// 5 ////////////////////

// const user = {
//     hobby: 'skydiving',
//     premium: 'true',

// }

// user.mood = 'happu';
// user.hobby = 'bycicle';
// user.premium = 'false';

// const userKeys = Object.keys(user);

// for (const key of userKeys) {
//     console.log(user(key));
// }

// const {hobby: userHobby, premium: userPremium} = user;
// console.log(userHobby, userPremium)

////// 6 ////////////////////

// const employesTasks = {
//     pasha: 10,
//     masha: 5,
//     dasha: 20,
//     sasha: 30,
//     sobaka: 40,
// };

// const findBestEmployee = employes => {
//     const tasks = Object.value(employes);
//     let maxTasks = 0
//     tasks.forEach(tasks => maxTasks = tasks >= maxTasks ? tasks : maxTasks)
// }

// console.log(findBestEmployee(employesTasks));

// const {pasha: pashaEmployesTasks, masha: mashaEmployesTasks, dasha: dashaEmployesTasks, sasha: sashaEmployesTasks, sobaka: sobakaEmployesTasks} = employesTasks;
// console.log(pashaEmployesTasks, mashaEmployesTasks, dashaEmployesTasks, sashaEmployesTasks, sobakaEmployesTasks)

////// 6 ////////////////////

// const employesSalary = {
//     pasha: 10,
//     masha: 5,
//     dasha: 20,
//     sasha: 30,
//     sobaka: 40,
// };

// const countTotalSalary = (employees) => {
//     const countTasks = Object.values(employees);
//     let totalSalary = 0
//     countTasks.forEach(salary => totalSalary+=salary);
//     return totalSalary;
// }

// console.log(countTotalSalary(employesSalary));

// const {pasha: pashaSalary, masha: mashaSalary, dasha: dashaSalary, sasha: sashaSalary, sobaka: sobakaSalary} = employessSalary;
// console.log(pashaSalary, mashaSalary, dashaSalary, sashaSalary, sobakaSalary);