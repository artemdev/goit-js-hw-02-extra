function genRandomUniArray(n) {
  let array = new Array(n);
  for (let i = 0; i < n; i++) {
    //генерируем уникальное число
    let uniqueNumber;
    do {
      uniqueNumber = Math.floor(Math.random() * 10);
    } while (array.includes(uniqueNumber));
    //добавляем в массив
    array[i] = uniqueNumber;
  }
  return array;
}

console.log(genRandomUniArray(10));
