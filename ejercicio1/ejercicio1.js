let palabra = "  deportivo pereira  ";

palabra = palabra.trim();

palabra = palabra[0].toUpperCase() + palabra.slice(1);
palabra = palabra.slice(0, -1) + palabra[palabra.length - 1].toUpperCase();

console.log(palabra);
