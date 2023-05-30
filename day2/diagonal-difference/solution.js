function diagonalDifference(arr) {
  let primary = 0;
  let secondary = 0;
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    primary += arr[i][i];
    secondary += arr[size - i - 1][i];
  }

  return Math.abs(primary - secondary);
}
