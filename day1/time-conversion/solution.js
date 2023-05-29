let s = '01:05:45AM';

function timeConversion(s) {
  let splited = s.split('');
  let hora = Number(`${splited[0]}${splited[1]}`);
  let ampm = splited[splited.length - 2];

  if (ampm == 'A') {
    if (hora == 12) {
      hora = '00';
    } else {
      hora = hora.toLocaleString('pt-BR', {
        minimumIntegerDigits: 2
      });
    }
  }
  if (ampm == 'P') {
    if (hora < 12) {
      hora = hora + 12;
    }
  }
  return `${hora}${s.substring(2, 8)}`;
}

console.log(timeConversion(s));
