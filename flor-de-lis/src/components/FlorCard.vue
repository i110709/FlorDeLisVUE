<template>
    <div class="florcard">
      <div class="image-container">
        <img :src="image" :alt="name" class="flower-image" />
  
        <!-- Botão de Favorito com classe dinâmica -->
        <button 
          class="favorite-button" 
          :class="{ favorited: isFavorited }"
          @click="toggleFavorite"
        >
          <span v-if="isFavorited">&#9829;</span>
          <span v-else>&#9825;</span>
        </button>
      </div>
      <div class="info">
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
        <p class="price">R$ {{ price }}</p>
      </div>
      <div class="actions">
        <button @click="buy" class="btn buy">Compre Agora</button>
        <button class="btn info">Saiba Mais</button>
      </div>
    </div>
  </template>
  

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.florcard {
    width: 300px;
    background-color: white;  ;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.image-container {
    position: relative;
    width: 100%;
    height: 275px;
    overflow: hidden;
    border: 1px;
    background-color: white;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.favorite-button {
    position: absolute;
    top: 10px;
    right: 20px;
    background: none;
    border: none;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.favorite-button:hover {
    color: #ff6464;
}

.info {
    padding: 15px;
    color: #3d0d07;
    text-align: justify;
}

.info h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

.info p {
    font-size: 14px;
    margin-bottom: 10px;
    color: #47211c;
}

.price {
    font-size: 16px;
    color: #3d0d07;
    font-weight: bold;
}

.actions {
    display: flex;
    justify-content: space-around;
    padding: 10px 15px;
    background-color: none;
}

.btn {
    padding: 10px 20px;
    border: 16px;
    border-color: white;
    border-radius: 2px;
    font-size: 14px;
    cursor: pointer;
}

.btn.buy {
    background-color: #530603;
    color: #fff;
}

.btn.buy:hover {
    background-color: #831515;
}

.btn.info {
    background-color: #cbbbbb;
    color: #530603;
}

.btn.info:hover {
    background-color: #bbb;
}
</style>

<script>

export default {
  name: "FlowerCard",
  props: {
    image: String,
    name: String,
    description: String,
    price: Number,
  },
  methods: {
    buy() {
      alert(`Você adicionou ${this.name} ao carrinho!`);
    },

  toggleFavorite() {
    // Recupera os favoritos existentes
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Verifica se a flor já está nos favoritos
    if (favorites.includes(this.name)) {
      // Remove dos favoritos
      favorites = favorites.filter(fav => fav !== this.name);
    } else {
      // Adiciona aos favoritos
      favorites.push(this.name);
    }

    // Atualiza o localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert(`Os favoritos foram atualizados!`);
  },
}
}
</script>