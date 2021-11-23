var swap = (array, firstIndex, secondIndex) => {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var bubbleSort = (array, size) => {
  for (let j = 0; j < size - 1; j++) {
    for (let i = 0; i < size - j - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
      }
    }
  }
};

var array = [20, 25, 4, 9, 15, 3, -1, 18, 16, 0, 12, 7, -5];
bubbleSort(array, array.length);
console.log('Array after sorting', array);
