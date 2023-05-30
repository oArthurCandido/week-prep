let a = [0, 1, 0];

function lonelyinteger(a) {
  a.sort((a, b) => a - b);
  let size = a.length;
  for (let i = 0; i < size; i += 2) {
    console.log(i);
    if (a[i + 1] == undefined) {
      return a[i];
    } else if (a[i] != a[i + 1]) {
      return a[i];
    }
  }
}

console.log(lonelyinteger(a));
