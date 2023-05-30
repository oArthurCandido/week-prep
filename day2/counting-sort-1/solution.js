let arr = [1, 2, 3, 3, 3, 4, 4, 99];

function countingSort(arr) {
  let result = new Array(100).fill(0);
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    result[arr[i]]++;
  }
  return result;
}

console.log(countingSort(arr));
