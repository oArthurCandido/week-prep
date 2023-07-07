let fileImport = require("fs").readFileSync(
  "day3/palindrome-index/input.txt",
  "utf-8"
);
let lines = fileImport.split(/\s+|["\n]+/).filter(Boolean);

function palindromeIndex(s) {
  let splited = s.split("");
  let reversed = splited.slice().reverse();
  if (reversed.join() == splited.join()) {
    return -1;
  }
  let sLength = s.length;
  for (let i = 0; i < sLength; i++) {
    let cloneSplited = splited.slice(0);
    let removido = cloneSplited.splice(i, 1);
    let reversed = cloneSplited.slice(0).reverse();
    if (reversed.join() == cloneSplited.join()) {
      return ` Elemento removido ${cloneSplited[i]} index dele = ${i}`;
    }
  }
  return -1;
}

// console.log(palindromeIndex("aaaaaaaaaaabdbdaaaaaaaaaaa"));

//second try:

function palindromeIndexTeste(s) {
  let splited = Array.from(s);

  let reversed = splited.slice(0).reverse();
  if (splited.join() === reversed.join()) {
    return -1;
  }
  let sLength = s.length;

  for (let i = 0; i < sLength; i++) {
    let splitedClone = splited.slice(0);
    let reversedClone = reversed.slice(0);
    splitedClone.splice(i, 1);
    reversedClone.splice(sLength - i - 1, 1);
    if (splitedClone.join() === reversedClone.join()) {
      return i;
    }
  }
  return "fim";
}

// console.log(palindromeIndexTeste("aaaaaaaaaaabdbdaaaaaaaaaaa"));

for (let j = 0; j < lines.length; j++) {
  console.log(palindromeIndexTeste(lines[j]));
}

// console.log(palindromeIndexTeste("quyjjdcgsvvsgcdjjyq"));

console.log(
  "prcoitfiptvcxrvoalqmfpnqyhrubxspplrftomfehbbhefmotfrlppsxburhyqnpfmqlaorxcvtpiftiocrp"
    .length
);
let inputString =
  "prcoitfiptvcxrvoalqmfpnqyhrubxspplrftomfehbbhefmotfrlppsxburhyqnpfmqlaorxcvtpiftiocrp";
let splitString = inputString.split("");

let esquerda = splitString.slice(0, splitString.length / 2);
let direita = splitString.slice(splitString.length / 2, splitString.length);

console.log(esquerda.join(""));
console.log(direita.reverse().join(""));

function palindromeColega(s) {
  let copy = s.substring().split("").reverse();
  if (copy.join("") == s) return -1;

  let i = 0,
    j = s.length - 1;

  while (i <= j) {
    if (s[i] != s[j]) {
      if (s[i + 1] == s[j] && s[i + 2] == s[j - 1]) return i;
      return j;
    }

    i++;
    j--;
  }
  return -1;
}

for (let j = 0; j < lines.length; j++) {
  console.log(palindromeColega(lines[j]));
}

let teste = "12345";

console.log("Teste: ", teste[1]);

function palindromeColega2(s) {
  const arr = s.split("");
  const len = arr.length;
  if (s === [...arr].reverse().join("")) return -1;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (arr[i] !== arr[len - 1 - i]) {
      arr.splice(i, 1);
      if (arr.join("") === arr.reverse().join("")) return i;
      else return -1;
    }
  }
}

for (let j = 0; j < lines.length; j++) {
  console.log(palindromeColega2(lines[j]));
}
