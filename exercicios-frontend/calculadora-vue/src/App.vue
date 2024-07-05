<script setup>
import { reactive } from 'vue';

const estado = reactive({
    select: 'selecione',
    n1: null,
    n2: null,
    resultado: null
});

function adicao() {
    return estado.n1 + estado.n2;
}

function subtracao() {
    return estado.n1 - estado.n2;
}

function multiplicacao() {
    return estado.n1 * estado.n2;
}

function divisao() {
    return estado.n1 / estado.n2;
}

function calcularResultado() {
    const { select, n1, n2 } = estado;

    if (n1 === null || n2 === null || select === 'selecione') {
        estado.resultado = null;
        return;
    }

    switch (select) {
        case 'somar':
            estado.resultado = adicao();
            break;
        case 'subtrair':
            estado.resultado = subtracao();
            break;
        case 'multiplicar':
            estado.resultado = multiplicacao();
            break;
        case 'dividir':
            estado.resultado = divisao();
            break;
        default:
            estado.resultado = null;
    }
}
</script>

<template>
    <div class="container">
        <header class="text-bg-dark p-3 mt-5">
            <h1 class="text-center">Calculadora Aritmética</h1>
        </header>
        <div class="row d-flex justify-content-center mt-5">
            <input type="number" class="col-2 me-2" placeholder="Digite um número" @keyup="evento => estado.n1 = Number(evento.target.value)">
            <select class="col-2"v-model="estado.select" @change="calcularResultado">
                <option value="selecione">Selecione a operação</option>
                <option value="somar">Somar</option>
                <option value="subtrair">Subtrair</option>
                <option value="multiplicar">Multiplicar</option>
                <option value="dividir">Dividir</option>
            </select>
            <input type="number" class="ms-2 col-2" placeholder="Digite um número" @keyup="evento => estado.n2 = Number(evento.target.value)" >
        </div>
        <div class="text-center mt-4" v-if="estado.resultado !== null">
            <span class="fs-3">Resultado da operação: {{ estado.resultado }}</span>
        </div>
    </div>
</template>