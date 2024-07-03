function mutiplicaDoisNumeros (numero1: number, numero2: number):number {
    return numero1 * numero2;
}

function saldacaoOla (nome: string):string {
   return `Olá ${nome}`;
}

const resultadoMultiplicacao = mutiplicaDoisNumeros(3, 4);
const saldacao = saldacaoOla('Ramon');

console.log(resultadoMultiplicacao);
console.log(saldacao);

