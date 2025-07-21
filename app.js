// Pedir tres números al usuario
let x = Number(prompt("Ingresa el primer número"));
let y = Number(prompt("Ingresa el segundo número"));
let z = Number(prompt("Ingresa el tercer número"));

// Si todos son iguales, mostrar mensaje y terminar
if (x === y && y === z) {
  console.log(`Todos los números son iguales: ${x}, ${y}, ${z}`);
  document.body.innerHTML = `<p>Todos los números son iguales: ${x}, ${y}, ${z}</p>`;
} else {
  // Meterlos en un arreglo para ordenar
  const nums = [x, y, z];

  // Orden de mayor a menor
  nums.sort((a, b) => b - a);
  console.log("Mayor → Menor:", nums.join(", "));
  document.body.innerHTML = `<p>Mayor → Menor: ${nums.join(", ")}</p>`;

  // Invertir para menor a mayor
  nums.reverse();
  console.log("Menor → Mayor:", nums.join(", "));
  document.body.innerHTML += `<p>Menor → Mayor: ${nums.join(", ")}</p>`;
}
