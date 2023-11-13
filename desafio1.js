const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

let valor = (distanciaEmKm / kmPorLitros) * precoCombustivel;

console.log(valor.toFixed(2));