// 1

// function logItems(array) {
//     for (let i = 0; i < array.length; i++); {
//         console.log($(i + 1)) - $(array[i])
//     }
// }

// const fruits = ['Mango', 'poly', 'Ajac'];
// logItems(fruits)

// 2

// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(' ');

//     const totalPrice = words.length * pricePerWord;
//     return totalPrice;
//   }
//   const message = 'pashka derevyashka';
//   const pricePerWord = 5; 
  
//   const totalEngravingPrice = calculateEngravingPrice(message, pricePerWord);
//   console.log(`price${totalEngravingPrice}`);

// 3

// function findLargestWord(string) {
//     const words = string.split(' ')
//     let largestWord = '';
    
//     for (const word of words) {
//         if (word.length > largestWord.length) {
//           largestWord = word;
//         }
//       }
//       return largestWord;
// }

// const inputString = 'Korabliki samoletiki mashinki arbeziki bananchiki';
// const largestWord = findLargestWord(inputString);
// console.log(`largest iss ${largestWord}`);

// 4

// function formatString(string) {
//     const maxLength = 40;
  
//     if (string.length <= maxLength) {
//       return string;
//     } else {
//       const circumcisedString = string.slice(0, maxLength) + ',,,';
//       return circumcisedString;
//     }
//   }
  
//   const longString = "Падав сніг на поріг,Кіт зліпив собі пиріг. Поки смажив, поки пік,А пиріг водою стік. Кіт не знав, що на пирігТреба тісто, а не сніг.";
//   const formatedString = formatString(longString);
//   console.log(formatedString);

// 5

// function checkForSpam(message) {
//     const lowerCasedMessage = message.toLowerCase();
//     return lowerCasedMessage.includes('spam') || lowerCasedMessage.includes('sale');
// }

// const message1 = "sale on this friday";
// const message2 = "we are creating anti spam serviee";
// const message3 = "u have special offers on few products in our shop";

// console.log(checkForSpam(message1)); 
// console.log(checkForSpam(message2)); 
// console.log(checkForSpam(message3)); 

// 6

// function promptAndSumNumbers() {
//     let input;
//     const numbers = [];
//     let total = 0;
//     do {
//         input = prompt("введіть число:");
//         if (input !== null) {
//           const number = Number(input);
//           if (!isNaN(number)) {
//             numbers.push(number);
//           } else {
//             alert("ви ввелі не число, спробуйте зе раз");
//           }
//         }
//       } while (input !== null);
//       if (numbers.length > 0) {
//         for (const number of numbers) {
//           total += number;
//         }
//         console.log( "сума чисел дорівнює $"({total}));
//       } else {
//         console.log("нічо нема");
//       }
// }
// promptAndSumNumbers()
