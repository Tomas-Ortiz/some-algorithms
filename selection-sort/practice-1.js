/* 
Se llama ordenamiento por selección porque selecciona repetidamente el siguiente elemento 
más bajo y lo intercambia a su lugar
*/

var indexOfMinimum = (array, startIndex) => {
  let minValue = array[startIndex];
  let minIndex = startIndex;
  let size = array.length;

  for (let i = startIndex + 1; i < size; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

var swap = (array, firstIndex, secondIndex) => {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var selectionSort = (array) => {
  let size = array.length;
  let indexMin;
  for (let i = 0; i < size; i++) {
    indexMin = indexOfMinimum(array, i);
    swap(array, i, indexMin);
  }
};

var array = [3, 22, 11, 99, -7, 88, 9, 7, 42, 15, 0, 31, -5];
selectionSort(array);

console.log('Array after sorting:', array);
