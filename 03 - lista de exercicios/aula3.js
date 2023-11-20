

/*function sayMyName(name) {
    console.log('Your name is ' + name);
}

sayMyName('Abdiel');
sayMyName('Renan');*/

/*function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez + quadradoDeDez);*/

function incrementarJuros(valor, percentualJuros) {
    
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));

