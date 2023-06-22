function towerBreakers(n, m) {
  if (m == 1) {
    return 2;
  }
  if (n % 2 != 0) {
    return 1;
  } else {
    return 2;
  }
}
