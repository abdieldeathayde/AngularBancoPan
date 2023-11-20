
class Pessoa{

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}
const abdiel = new Pessoa('Abdiel', 24);
const renan = new Pessoa('Renan', 30);

compararPessoas(abdiel, renan);


/*
const abdiel = new Pessoa('Abdiel', 24);

const renan = new Pessoa('Renan', 30);



console.log(abdiel);*/

/*console.log(abdiel.nome);
console.log(abdiel.idade);
console.log(abdiel);

abdiel.altura = 2.70;

delete abdiel.altura

console.log(abdiel);


pessoa.nome = 'Renan';
pessoa.idade = 30;


pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();



const atributo = 'idade';

console.log(pessoa[atributo]);


pessoa['nome' ] = 'teste';
pessoa.nome = 'teste';
*/