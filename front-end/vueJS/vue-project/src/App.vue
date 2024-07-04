<script setup>
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
</script>

<template>
  <h1>{{ dizOla('Paula') }}</h1>
  <img v-if="gostaDoBatman" :src="imagem" alt="">
  <img v-else-if="gostaDoSuperman" :src="imagemSuperMan" alt="">
  <h2 v-else >Não curte heróis da DC</h2>

  <h1 v-if="estaAutorizado">Bem-vindo</h1>
  <h1 v-else>Não posui acesso</h1>

  <button :disabled = '!botaoEstaDesabilitado'>enviar mensagem</button>
</template>

<style scoped>
  img {
    max-width: 200px;
  }
</style>
