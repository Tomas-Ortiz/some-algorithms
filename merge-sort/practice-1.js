/*
Ordenamiento por mezcla es un algoritmo de ordenamiento más eficiente que depende fuertemente 
del poder de la recursividad para ordenar y mezclar subarreglos de manera repetida.

El ordenamiento por selección y el ordenamiento por inserción, tienen un tiempo de ejecución 
para el peor caso de Θ(n^2). Cuando el tamaño de la entrada del arreglo es grande, estos algoritmos 
pueden tardar mucho tiempo en ejecutarse.

El ordenamiento por mezcla y el ordenamiento rápido tienen mejores tiempos de ejecución.
el ordenamiento por mezcla se ejecuta en un tiempo Θ(n log2 n) en todos los casos 
y el ordenamiento rápido se ejecuta en un tiempo Θ(n log2 n) en el mejor caso y en el caso promedio, 
aunque el tiempo de ejecución de su peor caso es Θ(n^2).
*/

/*
a => first index of the subarray
c => last index of the subarray
b => middle index of the subarray 
*/

var merge = (array, a, b, c) => {
  var lowHalf,
    highHalf,
    i = 0,
    j = 0,
    k = a;

  lowHalf = array.slice(a, b + 1);
  highHalf = array.slice(b + 1, c + 1);

  while (i < lowHalf.length && j < highHalf.length) {
    if (lowHalf[i] < highHalf[j]) {
      array[k] = lowHalf[i];
      i++;
    } else {
      array[k] = highHalf[j];
      j++;
    }
    k++;
  }

  while (i < lowHalf.length) {
    array[k] = lowHalf[i];
    i++;
    k++;
  }

  while (j < highHalf.length) {
    array[k] = highHalf[j];
    j++;
    k++;
  }
};

var mergeSort = (array, a, c) => {
  // if the array has less than 2 elements
  if (a < c) {
    let b = Math.floor((a + c) / 2);
    mergeSort(array, a, b);
    mergeSort(array, b + 1, c);
    merge(array, a, b, c);
  }
};

var array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array, 0, array.length - 1);
console.log('Array after sorting: ', array);
