<script setup>
import { reactive } from 'vue';

const nome = 'Ramon Silva'
const meuObj = {
  nome: 'Ramon',
  filmeFavorito: 'The Lord of the Rings'
}

  function dizOla(nome) {
    return `${nome} diz oi`;
  }

  const imagem = "https://assets.gamearena.gg/wp-content/uploads/2023/05/29235539/FwsaBACaIAALmek-1024x685.jpg";
  const imagemSuperMan = 'https://upload.wikimedia.org/wikipedia/pt/b/be/Super-Homem.jpg';

  const botaoEstaDesabilitado = false;

  const gostaDoBatman = false;
  const gostaDoSuperman = true;
  
  const estaAutorizado = false;

  let contador = 0;
  const estado = reactive({
    contador: 0,
    email: '',
    saldo: 5000 ,
    transferindo: 0,
  });

  function incrementar() {
    estado.contador++;
  }

  function decrementar() {
    estado.contador--;
  }

  function alteraEmail(evento) {
    estado.email = evento.target.value
  }

  function mostraSaldoFuturo() {
    const { saldo, transferindo } = estado;
    return saldo - transferindo;
  }

  function validaValorDeTransferencia() {
    const { saldo, transferindo } = estado;
    return saldo >= transferindo;
  }

</script>

<template>
  <h1>{{ dizOla('Paula') }}</h1>
  <img v-if="gostaDoBatman" :src="imagem" alt="">
  <img v-else-if="gostaDoSuperman" :src="imagemSuperMan" alt="">
  <h2 v-else >Não curte heróis da DC</h2>

  <h1 v-if="estaAutorizado">Bem-vindo</h1>
  <h1 v-else>Não posui acesso</h1>

  <button :disabled = '!botaoEstaDesabilitado'>enviar mensagem</button>

  <br>
  <hr>

  {{ estado.contador }}

  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br>
  <hr>

  {{ estado.email }}



  <input type="email" @keyup="alteraEmail">

  <br>
  <hr>

  Saldo: {{ estado.saldo }} <br>
  Transferindo: {{ estado.transferindo }}, <br>
  Saldo depois da transferencia: {{  mostraSaldoFuturo() }} <br>
  

  <input :class="{ invalido: !validaValorDeTransferencia() }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir" />
  <button v-if="validaValorDeTransferencia()" >Transferir</button>
  <span v-else>Valor maior que o saldo</span>
</template>

<style scoped>
  img {
    max-width: 200px;
  }

  .invalido {
    outline-color: red;
  }
</style>
