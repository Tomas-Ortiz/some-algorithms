/*
3 torres (A, B Y C ó 1, 2 y 3)
n discos --> cada disco un tamaño diferente
Discos desde el 1 (el disco más pequeño) hasta n (el disco más grande)
Al principio todos los discos en la torre A, en orden creciente, desde la parte superior hacia la inferior
El disco n se encuentra en la parte inferior y el disco 1 en la parte superior

Objetivo: pasar los n discos de la torre A a la torre B, obedeciendo las siguientes reglas:
    1. Solo se puede mover un solo disco a la vez
    2. Ningún disco puede estar por encima de un disco más pequeño.  Todos los discos debajo 
    del disco x deben tener números mayores que x.

Resolver un problema para n discos requiere 2^n - 1 movimientos

Pasos:
    1. Mover recursivamente los discos 1 a n-1 desde la torre inicial a la torre libre (2^(n-1) - 1 movimientos)
    2. Mover el disco n desde la torre inicial a la torre final (1 movimiento)
    3. Mover recursivamente los discos 1 a n-1 desde la torre libre a la torre final (2^(n-1) - 1 movimientos)

    disks = number of disks to be moved
    from = tower where disk is present
    to = tower where the disk is to be moved
    aux = auxiliary tower, the remaining one

  solveHanoi(3, 1, 3)  (first call)
    solveHanoi(2, 1, 2)  (first call)               
      solveHanoi(1, 1, 3)  (first call)

      print 'Move disk 1 | 1 => 3'
    print 'Move disk 2 | 1 => 2'

    solveHanoi(1, 3, 2)  (second call)
    print 'Move disk 1 | 3 => 2'
  print 'Move disk 3 | 1 => 3'

  solveHanoi(2, 2, 3)  (second call)
    solveHanoi(1, 2, 1)  (first call)
    print 'Move disk 1 | 2 => 1'
  print 'Move disk 2 | 2 => 3'

solveHanoi(1, 1, 3) (second call)
print 'Move disk 1 | 1 => 3'

*/
var movements = 0;

var solveHanoi = (disks, from, to) => {
  // base case
  if (disks === 1) {
    printMovement(disks, from, to);
  } else {
    // recursive case
    var aux = 6 - (from + to);
    solveHanoi(disks - 1, from, aux);
    printMovement(disks, from, to);
    solveHanoi(disks - 1, aux, to);
  }
};

var printMovement = (disk, from, to) => {
  console.log(`${++movements}. Move disk ${disk} | ${from} => ${to}`);
};

solveHanoi(3, 1, 3);
