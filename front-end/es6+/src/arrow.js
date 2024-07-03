const minhaFuncao = () => 'Diz olá';

const retornaUmCarro = () => ({
    modelo: 'Ka',
    Fabricante: 'Ford'
})

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10;
    },
    frear: function() {
        this.velocidadeAtual -=10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);