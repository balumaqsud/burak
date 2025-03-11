//task -g
const reverse = (numsArr) => {
  let curr = 0;
  for (let i = 0; i < numsArr.length; i++) {
    if (curr < numsArr[i]) {
      curr = numsArr[i];
    }
  }
  return numsArr.indexOf(curr);
};

console.log(reverse([3, 55, 6, 99, 120, 9, 44]));