//REST

function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

// console.log(somar(10, 20, 30));

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0);

    return soma
}

// console.log(somarComRest(30, 30, 30));

//SPREAD

const numeros = [1, 2, 3, 4];
// console.log(...numeros);

const timesDeFutebolDeSp = ['Santos', 'Palmeiras', 'Bragantino', 'São Paulo'];
const timesDeFutebolDoRio = ['Vasco', 'Botofaogo', 'Flamengo', 'Fluminense'];

// const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);
const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];

// console.log(timesDeFutebol);

const carroDaJulia = {
    modelo: 'Gol',
    marca: 'VW',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

// console.log(carroDaJulia, carroDaAna);

//DESESTRUTURAÇÂO

// const motorDoCarroDaAna = carroDaAna.motor; //acessando as propriedades dentro de um objeto e guardando em uma variavel
const { motor: motorDoCarroDaAna } = carroDaAna;   
const { motor: motorDoCarroDaJulia } = carroDaJulia;             //acessando de outra forma.

console.log(motorDoCarroDaAna, motorDoCarroDaJulia);

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1, item2, item3, outrosTimes);