//** Not recursive solution **//

// function superDigit(n, k) {
//     if(n.length ==1){
//         return Number(n)
//     }
//     let splited = n.split('')
//     let inputNumbers = splited.reduce((acum, value)=> acum + Number(value),0) * k

//     inputNumbers = inputNumbers.toString().split('')

//     while(inputNumbers.length>1){
//         inputNumbers = inputNumbers.reduce((ac,vl)=>ac+vl,0)
//         inputNumbers = inputNumbers.toString().split('')
//         inputNumbers = inputNumbers.map(Number)
//     }

//    return inputNumbers[0]

// }

function superDigit(n, k) {
  if (n.length == 1) {
    return n;
  }
  let splited = n.split("");
  return superDigit(
    (splited.reduce((acum, value) => acum + Number(value), 0) * k).toString(),
    1
  );
}
