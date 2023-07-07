function truckTour(petrolpumps) {
  let tank = 0,
    distance = 0,
    startIndex = 0;

  for (let i = 0; i < petrolpumps.length; i++) {
    tank += petrolpumps[i][0];
    distance += petrolpumps[i][1];
    if (tank < distance) {
      petrolpumps = [...petrolpumps, ...petrolpumps.slice(startIndex, i + 1)];
      startIndex = i + 1;
      tank = 0;
      distance = 0;
    }
  }

  return startIndex;
}
