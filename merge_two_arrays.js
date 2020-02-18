function mergeTwo(arr1, arr2) {
  const arrOut = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 <= arr1.length && pointer2 <= arr2.length) {
    if (arr1[pointer1] === undefined && arr2[pointer2] === undefined) {
      return arrOut;
    }
    if (arr1[pointer1] >= arr2[pointer2]) {
      arrOut.push(arr2[pointer2]);
      pointer2++;
    } else {
      arrOut.push(arr1[pointer1]);
      pointer1++;
    }
  }
  //   console.log(arrOut);
  return arrOut;
}

const arrOne = [0, 2, 4, 5, 9, 10, 11, 12];
const arrTwo = [0, 1, 2, 3, 4, 5, 7, 8];
console.log(mergeTwo(arrOne, arrTwo));
