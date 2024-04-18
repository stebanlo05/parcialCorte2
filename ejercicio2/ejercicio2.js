let num1 = process.argv[2];
let num2 = process.argv[3];

num1 = parseFloat(num1);
num2 = parseFloat(num2);


if (num1 > num2) {
  console.log(num1 + " es mayor que " + num2);
} else {
  console.log(num2 + " es mayor que " + num1);
}
