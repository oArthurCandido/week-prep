let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function findMedian(arr) {
  arr.sort((a, b) => a - b);
  let length = arr.length - 1;
  return arr[length / 2];
}

console.log(findMedian(arr));
