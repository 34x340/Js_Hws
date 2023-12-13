// 1 |

// const button = document.getElementById('buttonHelloWorld');
// const showText = () => {alert("Hello world")}
// button.addEventListener('click', (event) => showText()) 

// 2 |

// const number = Math.floor(Math.random() * 100) + 1;
// document.getElementById('checkButton').addEventListener('click', checkCorrect);

// function checkCorrect() {
//   const correctField = document.getElementById('correctField');
//   const correctResult = document.getElementById('correctResult');
//   const userCorrect = parseInt(correctField.value);

//   if (isNaN(userCorrect) || userCorrect < 1 || userCorrect > 100) {
//     correctResult.textContent = 'будь ласка, введіть число  від 1 до 100.';
//   } else {
//     if (userCorrect > number) {
//       correctResult.textContent = `${userCorrect} є більшим за задвне число`;
//     } else if (userCorrect < number) {
//       correctResult.textContent = `${userCorrect} є меншим за задане число`;
//     } else {
//       correctResult.textContent = 'ви вгадали число!';
//     }
//     // if (userCorrect === number) {
//     //   correctResult.textContent = 'ви вгадали числр!';
//     // } else {
//     //   correctResult.textContent = `на жаль правильне число - ${number}. спробуйте ще раз`;
//     // }
//   }
// }

// 3 |

// let clickCounter = 0
// document.addEventListener("click", () => {
//     clickCounter ++;    
//     const clickCountEl = document.getElementById('clickCount')
//     clickCountEl.textCounter = clickCounter
// })

// 4 |

// const applyCallbackToEachElement = (arr, callback) => {
//     const result = [];
//     arr.forEach((element) => {
//       result.push(callback(element));
//     });
//     return result;
// };
  
// const arr = [1, 2, 3, 4, 5];
// const squareCallback = (num) => num * num;
// const result = applyCallbackToEachElement(arr, squareCallback);
  
// console.log(result);

// 5 |

// const calculateDiscountedPrice = (price, discount, callback) => {
//     const discountedPrice = price - (price * discount / 100);
//     callback(discountedPrice);
// };
  
// const showDiscountedPrice = (discountedPrice) => {
//     console.log(`Дисконтна ціна: ${discountedPrice}`);
// };
  
// calculateDiscountedPrice(100, 10, showDiscountedPrice);