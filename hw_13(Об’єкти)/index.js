// 1 |

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

// 2 |

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

// 3 |

// const user = {
//     name: 'Pasha',
//     email: 'pasha@gmail,com',
//     password: 12345,
//     emailCheck() {
//         const checkEmail = prompt("введіть вашу пошту:")
//     if (checkEmail === user.email) {
//         alert("done")
//     } else {
//         alert("error")
//     }
//     },
//     passwordCheck() {
//         const checkPassword = Number(prompt("введіть ваш пароль:"))
//     if (checkPassword === user.password) {
//     alert("done")
// } else {
//     alert("error")
// }
//     }
// }
// user.emailCheck()
// user.passwordCheck()

// 4 |

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