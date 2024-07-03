// const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

// for(let i = 0; i < redesSociais.length; i++) {
//     console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
// }

// redesSociais.forEach(function(iten, index) {
//     console.log(`#${index} Eu tenho perfil na rede social: ${iten}`)
// })

const alunos = ['Gustavo' , 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual) {
    return itemAtual = {
        nome: itemAtual,
        curso: 'Front-end'
    }
})

// console.log(alunos2);

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paulo'; //true ou false
})

// console.log(indiceDaPaula);

alunos2.push({
    nome: 'Lucio',
    curso: 'Back-end'
})

const cursoAlunos = alunos2.every(function(item) {
    return item.curso === 'Front-end';
})


// console.log(cursoAlunos);

const alunoBackend = alunos2.some(function(item) {
    return item.curso === 'Back-end' && item.curso === 'Front-end';
});

// console.log(alunoBackend);

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Back-end';
}

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);

// console.log(alunosDeBackend);

const nums = [10, 20, 30 ,10];

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 20 /* 0 = valor inicial*/);

// console.log(soma);

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    return acumulador += `${itemAtual.nome} `;
}, '') ;

console.log(nomeDosAlunos);