function genRandomArray(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    //добавляем числа от 1 до 100
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
}

console.log(genRandomArray(10));
