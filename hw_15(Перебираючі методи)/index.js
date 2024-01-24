// 1 ///////////////////////

// const users = [
//     { userNum: 1, balance: 500 },
//     { userNum: 2, balance: 1000 },
//     { userNum: 3, balance: 1500 }
// ];

// const totalBalance = users.reduce((total, user) => { 
//     return total = total + user.balance
// }, 0);
// console.log(totalBalance);

// 2 ///////////////////////

// const users = [
//     { name: 'Pasha', friends: ['Anya', 'Vlad'] },
//     { name: 'Masha', friends: ['Dima', 'Vlad'] },
//     { name: 'Dasha', friends: ['Anya', 'Lilia'] },
// ];

// let friendNameToSearch = 'Anya';
// const usersWithFriend = users.reduce((result, user) => {
//   if (user.friends.includes(friendNameToSearch)) {
//     result.push(user.name);
//   }
//   return result;
// }, []);
// console.log(usersWithFriend)

// 3 ///////////////////////

// const users = [
//     { name: 'Pasha', friends: 3 },
//     { name: 'Masha', friends: 2 },
//     { name: 'Dasha', friends: 4 },
// ];

// users.sort((a, b) => {
//     return  b.friends.length - a.friends.length
// });

// const sortedNames = users.map(user => user.name);
// console.log(sortedNames);

// 4 ///////////////////////

// const users = [
//     {name: 'Pasha', skills: ['HTML', 'CSS', 'JavaScript']},
//     {name: 'Masha', skills: ['HTML', 'Python']},
//     {name: 'Dasha', skills: ['JavaScript', 'Python']}
// ];

// const uniqueSkills = users.reduce((skills, user) => {
//     user.skills.forEach(skill => {
//         if (!skills.includes(skill)) {
//             skills.push(skill);
//         }
//     });
//     return skills;
// }, []);
// uniqueSkills.sort();

// console.log(uniqueSkills);