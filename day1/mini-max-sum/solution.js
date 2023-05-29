arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  arr.sort();
  let min = arr.slice(0, 4);
  let max = arr.slice(-4, arr.length);
  min = min.reduce((acum, value) => acum + value, 0);
  max = max.reduce((acum, value) => acum + value, 0);

  console.log(min, max);
}

miniMaxSum(arr);
