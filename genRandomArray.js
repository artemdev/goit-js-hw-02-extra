function genRandomArray(n) {
  let array = new Array(n);
  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * 10);
  }
  return array;
}

console.log(genRandomArray(10));
