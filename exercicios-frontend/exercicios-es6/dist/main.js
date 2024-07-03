"use strict";

var alunos = [{
  nome: "João",
  nota: 8.5
}, {
  nome: "Maria",
  nota: 5.0
}, {
  nome: "Pedro",
  nota: 4.8
}, {
  nome: "Ana",
  nota: 6.5
}, {
  nome: "Carlos",
  nota: 9.5
}];
var alunosAprovados = function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
var alunosAprovadosLista = alunosAprovados(alunos);
console.log("Alunos aprovados:");
alunosAprovadosLista.forEach(function (aluno) {
  return console.log("Aluno: ".concat(aluno.nome, ", Nota: ").concat(aluno.nota));
});