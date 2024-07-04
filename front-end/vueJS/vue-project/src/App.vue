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
  const botaoEstaDesabilitado = false;
</script>

<template>
  <h1>{{ dizOla('Paula') }}</h1>
  <img :src="imagem" alt="">

  <button :disabled = '!botaoEstaDesabilitado'>enviar mensagem</button>
</template>

<style scoped>
</style>
