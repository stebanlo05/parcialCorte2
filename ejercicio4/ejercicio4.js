let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mayores = [];
let i = 0;

while (i < numeros.length) {
  if (numeros[i] > 5) {
    mayores.push(numeros[i]);
  }
  i++;
}

console.log(mayores);