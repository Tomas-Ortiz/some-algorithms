var swap = (array, firstIndex, secondIndex) => {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var partition = (array, p, r) => {
  var q = p,
    j = p;

  for (j; j < r; j++) {
    if (array[j] <= array[r]) {
      swap(array, q, j);
      q++;
    }
  }
  swap(array, q, r);
  return q;
};

var quickSort = (array, p, r) => {
  if (p < r) {
    // q is the index of the pivot
    var q = partition(array, p, r);
    quickSort(array, p, q - 1); // left subarray
    quickSort(array, q + 1, r); // right subarray
  }
};

var array = [9, 7, 5, 0, 11, 12, 2, -1, 14, 3, 10, 6];

quickSort(array, 0, array.length - 1);
console.log('Array after sorting: ', array);
