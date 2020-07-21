let totalAmount = 0;

function deepArraySumm(array) {
  for (let i = 0; i < array.length; i++) {
    // если массив, читаем и плюсуем
    if (Array.isArray(array[i])) {
      deepArraySumm(array[i]);
    }
    // если число, плюсуем
    else {
      totalAmount = totalAmount + array[i];
    }
  }
  return totalAmount;
}

console.log(deepArraySumm([5, 5, 5, [1, 1, 2, [2, 6], [1]], 2, [5]]));
