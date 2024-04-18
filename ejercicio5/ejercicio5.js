let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinado = false;

while (!adivinado && intentos < 10) {
  let numeroUsuario = parseInt("Adivina el número secreto entre 1 y 100");
  numeroUsuario = Number(numeroUsuario);

  if (numeroUsuario === numeroSecreto) {
    adivinado = true;
    console.log("Felicidades! Adivinaste el número secreto.");
  } else if (numeroUsuario < numeroSecreto) {
    console.log("El número secreto es mayor. Inténtalo de nuevo.");
  } else {
    console.log("El número secreto es menor. Inténtalo de nuevo.");
  }

  intentos++;
}

if (!adivinado) {
  console.log("No adivinaste el número secreto en 10 intentos. El número secreto era " + numeroSecreto);
}