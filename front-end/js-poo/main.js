const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricação: 2019,
    acelerar: function() {
        console.log('vruum');
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricação: 2020,
    acelerar: function() {
        console.log('vruum');
    }
}


function Carro(modelo, fabricante, anoModelo, anoFabricação) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricação = anoFabricação;
    this.acelerar = function () {
        console.log('acelerar');
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome = 'Ramon';
const idade = 28;
const ehMaiorDeIdade = true;
const conhecimentos = ['html', 'css', 'javaScript'];

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos
}

console.log(typeof nome, typeof idade, typeof ehMaiorDeIdade , typeof conhecimentos, typeof pessoa, typeof carroDaMaria2);
console.log(carroDaMaria2 instanceof Carro, conhecimentos instanceof Carro);


console.log(pessoa['nome']);

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo]);
}

exibeAtributo('nome');

pessoa.sobrenome = undefined;

if (pessoa.sobrenome) {
    console.log('A pessoa tem um sobrenome');
} else {
    console.log('A pessoa não tem sobrenome');
}

if ('sobrenome' in pessoa) {
    console.log('o atributo sobrenome existe no objeto pessoa');
}

Object.freeze(pessoa);

pessoa.nome = 'Felipe';

console.log(pessoa.nome);

console.log(Object.values(pessoa));