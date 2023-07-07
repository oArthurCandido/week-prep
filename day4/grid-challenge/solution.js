function gridChallenge(grid) {
  let splitedGrid = grid.map((elem) => elem.split("").sort());
  let columLength = splitedGrid[0].length;
  let lineLength = splitedGrid.length;

  for (let i = 0; i < columLength; i++) {
    let prov = [];
    for (let j = 0; j < lineLength; j++) {
      prov.push(splitedGrid[j][i]);
    }
    let sorted = [...prov].sort().join("");
    if (prov.join("") != sorted) {
      return "NO";
    }
  }
  return "YES";
}
