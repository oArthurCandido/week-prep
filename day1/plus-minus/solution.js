function plusMinus(arr) {
  let negative = arr.reduce((acum, value) => {
    if (value < 0) {
      return acum + 1;
    }
    return acum;
  }, 0);
  let zero = arr.reduce((acum, value) => {
    if (value === 0) {
      return acum + 1;
    }
    return acum;
  }, 0);
  let positive = arr.reduce((acum, value) => {
    if (value > 0) {
      return acum + 1;
    }
    return acum;
  }, 0);
  console.log(
    (positive / arr.length).toFixed(6),
    '\n',
    (negative / arr.length).toFixed(6),
    '\n',
    (zero / arr.length).toFixed(6)
  );
}
