


/*const alunos = ['João', 'Vitor', 'Marina'];

alunos.push('Renan');

alunos[4] = 'Vinicius';

console.log(alunos);
*/

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(soma / 5);

let nota = 0;

for (i = 0; i < notas.length; i++) {
    nota = nota + notas[i];
}

console.log(nota / notas.length);

