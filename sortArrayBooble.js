let swapped = true;
let newArray;
function sortArrayBooble(array) {
  newArray = array.slice();
  // сканим ВСЕ ОБЬЕКТЫ из них никто не должен свапнуться
  while (swapped) {
    swapped = false;
    for (let i = 0; i < newArray.length; i++) {
      //запускаем сканер
      if (newArray[i] > newArray[i + 1]) {
        const hold = newArray[i];
        newArray[i] = newArray[i + 1];
        newArray[i + 1] = hold;
        swapped = true;
      }
    }
  }
  return newArray;
}

console.log(sortArrayBooble([3, 5, 1, 3, 12, 8]));
