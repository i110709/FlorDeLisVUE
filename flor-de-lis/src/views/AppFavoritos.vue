<template>
  <div class="favorites-container">
    <h1 class="favorites-title">Favoritos</h1>
    <div v-if="favoriteFlowers.length">
      <ul class="text">
        <li v-for="flower in favoriteFlowers" :key="flower">{{ flower }}</li>
      </ul>
    </div>
    <p v-else>Nenhum item favoritado ainda.</p>
  </div>
</template>

<script>
export default {
  name: "FavoritesPage",
  data() {
    return {
      favoriteFlowers: [],
    };
  },
  mounted() {
    // Recupera os favoritos salvos no localStorage
    this.favoriteFlowers = JSON.parse(localStorage.getItem("favorites")) || [];
  },
};
</script>


<style scoped>

/* Container Principal */
.favorites-container {
  background-color: #d9d9d9;
}


.favorites-title {
  color: #530603;
  font-size: 36px;
  text-align: center;
}
 .text{
  margin-left: 15%;
  margin-bottom: 1px;
 }
/* Catálogo */
.catalog-container {
  padding: 20px;
}

.catalog-title {
  font-size: 24px;
  font-weight: bold;
  color: #530603;
  margin-bottom: 20px;
}


/* Mensagem para Nenhum Favorito */
.no-favorites-message {
  margin-top: 20px;
  font-size: 18px;
  color: #7a7a7a;
}
</style>


  