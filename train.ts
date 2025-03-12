//taski -h
const positive = (arr: number[]): string => {
  return arr.filter((ele) => {return ele > 0 ? ele : null }).join("")
}
console.log(positive([3,5, -1, 4, 5, -33, -3, 90]))
// //task -e
// const reverse = (s) => {
//   return s.split("").reverse().join("");
// };
// console.log(reverse("hello"));

// //task -g
// const reverse = (numsArr:number[]) => {
//   let curr = 0;
//   for (let i = 0; i < numsArr.length; i++) {
//     if (curr < numsArr[i]) {
//       curr = numsArr[i];
//     }
//   }
//   return numsArr.indexOf(curr);
// };

// console.log(reverse([3, 55, 6, 99, 120, 9, 44]));
// //C - task;
// const checkTwoWords = (str1, str2) => {
//   let count = 0;
//   const arr1 = str1.split("").sort();
//   const arr2 = str2.split("").sort();

//   for (let i = 0; i < str1.length; i++) {
//     count++;

//     if (arr1.length === arr2.length && arr1[count] === arr2[count]) {
//       return true;
//     }

//     return false;
//   }
// };
// //call
// console.log(checkTwoWords("balu", "ulab"));

// //B-TASK:
// let count = 0;
// const countDigits = (string) => {
//   for (let i = 0; i < string.length; i++) {
//     if (parseInt(string[i])) {
//       count++;
//     }
//     if (string[i] == "0") {
//       count++;
//     }
//   }
//   console.log(count);
// };
// countDigits("ad2a54y79wet0sfg102b9");

// //A-TASK:
// // example countLetter("e", "engineer");

// let count = 0;
// const letterCounter = (target, string) => {
//   for (let i = 0; i < string.length; i++) {
//     if (target === string[i]) {
//       count++;
//     }
//   }
//   console.log("count:", count);
//   return count;
// };

// letterCounter("l", "Ollobergan Abdulla Maksud Ugli");