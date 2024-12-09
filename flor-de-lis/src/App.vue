<template>
  <div id="app">
    <!-- Componente Navbar -->
    <Navbar />
    <!-- O conteúdo da página vai aqui (via Vue Router) -->
    <router-view />
    <FlowerCarousel />
    <SeasonsCatalog />
    <AppCatalogo/>
    <SobreNos />
    <!-- Componente Footer -->
   
    <Footer />
  </div>

</template>

<script>
// Importando os componentes Navbar e Footer
import Navbar from './components/AppNavbar.vue';
import Footer from './components/AppFooter.vue';
import FlowerCarousel from './components/AppCarrosel.vue';
import AppCatalogo from './views/AppCatalogo.vue';
import SeasonsCatalog from "/src/components/AppSeasons.vue";
import SobreNos from './views/SobreNos.vue';

export default {
  name: 'App',
  components: {
    Navbar, // Registra o componente Navbar
    Footer, 
    FlowerCarousel,
    AppCatalogo,// Registra o componente Footer
    SeasonsCatalog,
    SobreNos
  },
};
</script>

<style>
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  min-height: 100%; /* Garante que o conteúdo ocupe pelo menos 100% da tela */
  
}

#app {
  display: block; /* Garante que o layout não use Flex desnecessariamente */
  min-height: 100vh; /* Altura mínima de 100% da altura da janela */
}
</style>