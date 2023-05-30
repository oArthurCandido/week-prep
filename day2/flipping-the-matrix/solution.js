// let matrix = [
//   [112, 42, 83, 119],
//   [56, 125, 56, 49],
//   [15, 78, 101, 43],
//   [62, 98, 114, 108]
// ];
// let matrix = [
//   [1, 2],
//   [3, 4]
// ];
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

// console.log(matrix[matrix.length - 1][0]);

function flippingTheMatrix(matrix) {
  let size = Math.floor(matrix.length / 2);
  let last = matrix.length - 1;
  let max = 0;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      max += Math.max(
        matrix[i][j],
        matrix[i][last - j],
        matrix[last - i][j],
        matrix[last - i][last - j]
      );
    }
  }
  return max;
}

console.log(flippingTheMatrix(matrix));
