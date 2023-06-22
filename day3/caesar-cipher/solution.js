function caesarCipher(s, k) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let upperCaseAlphbet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let rotated = [...alphabet.slice(k % 26), ...alphabet.slice(0, k % 26)];
  let upperRotated = [
    ...upperCaseAlphbet.slice(k % 26),
    ...upperCaseAlphbet.slice(0, k % 26)
  ];
  let sSplited = s.split('');
  let newS = [];
  for (let i = 0; i < s.length; i++) {
    if (alphabet.join('').includes(s[i])) {
      newS.push(rotated[alphabet.indexOf(sSplited[i])]);
    } else if (upperCaseAlphbet.join('').includes(s[i])) {
      newS.push(upperRotated[upperCaseAlphbet.indexOf(sSplited[i])]);
    } else {
      newS.push(sSplited[i]);
    }
  }
  return newS.join('');
}

//diferent aproach without the upper case alphabet
function caesarCipheros(s, k) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let rotated = [...alphabet.slice(k % 26), ...alphabet.slice(0, k % 26)];
  let sSplited = s.split('');
  let newS = [];
  for (let i = 0; i < s.length; i++) {
    if (alphabet.join('').includes(sSplited[i].toLowerCase())) {
      if (sSplited[i] == s[i].toUpperCase()) {
        newS.push(
          rotated[alphabet.indexOf(sSplited[i].toLowerCase())].toUpperCase()
        );
      } else {
        newS.push(rotated[alphabet.indexOf(sSplited[i])]);
      }
    } else {
      newS.push(sSplited[i]);
    }
  }
  return newS.join('');
}

console.log(caesarCipher('Bom-Dia', 2));
console.log(caesarCipheros('Bom-Dia', 2));
