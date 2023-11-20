const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = "Gasolina";

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === "Etanol") {
    const valor = litrosConsumidos * precoEtanol;
    console.log(valor.toFixed(2));
} else {
    const valor = litrosConsumidos * precoGasolina;
    console.log(valor.toFixed(2));
}


//let valor = (distanciaEmKm / kmPorLitros) * precoCombustivel;

//console.log(valor.toFixed(2));