/*
- The array we want to order
- From index 0 to rightIndex the subarray is ordered
- value is the number we want to insert into the ordered subarray
*/
var insert = (array, rightIndex, value) => {
  for (var i = rightIndex; i >= 0 && array[i] > value; i--) {
    array[i + 1] = array[i];
  }
  array[i + 1] = value;
};

var insertionSort = (array) => {
  let size = array.length;
  for (let i = 1; i < size; i++) {
    insert(array, i - 1, array[i]);
  }
};

var array = [22, 11, 99, 10, 88, 9, 7, 42, 0, -5, 32];
insertionSort(array);
console.log('Sorted array ', array);
