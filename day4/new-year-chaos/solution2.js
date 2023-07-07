function minimumBribes(q) {
  for (let i = 0; i < q.length; i++) {
    if (q[i] - 3 > i) {
      console.log("Too chaotic");
      return;
    }
  }
  let isOrdered = false;
  let bribes = 0;
  while (!isOrdered) {
    for (let i = 0; i < q.length - 1; i++) {
      if (q[i] > q[i + 1]) {
        [q[i], q[i + 1]] = [q[i + 1], q[i]];
        bribes++;
      }
    }
    let sorted = [...q].sort((a, b) => a - b);
    if (sorted.toString() === [...q].toString()) {
      isOrdered = true;
    }
  }
  console.log(bribes);
  return;
}

let input = require("fs").readFileSync(
  "day4/new-year-chaos/input4.txt",
  "utf8"
);

let splitedInput = input.split(" ");

let q = splitedInput.map((elem) => parseInt(elem));

console.log(minimumBribes(q));
