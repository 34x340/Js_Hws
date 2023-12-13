// // Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так, то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку. Правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.

// // const button = document.querySelector(".button");

// // const inputOne = document.querySelector(".input__1");
// // const inputTwo = document.querySelector(".input__2");

// // if(inputOne !== "" && inputTwo !== "") {
// //     button.addEventListener("click", (Event) => {
// //         alert("Всі поля заповнені")
// //     }) 
// // }  else {
// //      "Не всі поля заповнені"
// // }

// // const button = document.querySelector(".button");

// // const inputOne = Number.document.querySelector(".input__1").value;
// // const inputTwo = Number.document.querySelector(".input__2").value;
// // const summa = inputOne + inputTwo;
// // if(summa >  10) {
// //     button.addEventListener("click", (Event) => {
// //         alert("сумма в першому інпуті та в другому, більше десять")
// //     })
// // }  else {
// //     alert("сумма менше 10")
// // };

// // const javaScript = prompt("напишіть JavaScript");

// // if( javaScript === "JavaScript") {
// //     alert("є JavaScript")
// // } else {
// //     alert("нема JavaScript")
// // }

// // const number = Number.prompt("введіть число від 10 до 20");
// // if( number > 10 && number < 20) {
// //     alert("ви ввели вірне число")
// // } else {
// //     alert("ви ввели не вірне число")
// // };

// const name = prompt("введіть ім'я").length;
// const email = prompt("введіть email");
// const password = prompt("введіть пароль");

// if( name > 3) { 
//     alert("ok")
// } else if( email == "@" && email == "." ) {
//     alert("ok")
// } else if( password.length > 6) {
//     alert("ok")
// } else {
//     alert("erorr")
// }