<template>
    <div class="catalog-container">
      <h1 class="catalog-title">Catálogo de Flores</h1>
      <div class="catalog">
        <FlowerCard
          v-for="(flower, index) in flowers"
          :key="index"
          :image="flower.image"
          :name="flower.name"
          :description="flower.description"
          :price="flower.price"
        />
      </div>
    </div>
  </template>
  
  <script>
  import FlowerCard from "/src/components/FlorCard.vue";
  import TulipasVermelhas from "/src/assets/tulipas-vermelhas.jpg";
  import TulipasRosa from "/src/assets/tulipas_rosa.jpg";
  import OrquideaBranca from "/src/assets/orquideas_brancas.jpg";
  import Margarida from "/src/assets/margarida.jpg"
  import RosaVermelha from "/src/assets/rosavermelha.jpg"
  
  export default {
    name: "AppCatalogo",
    components: {
      FlowerCard,
    },
    data() {
      return {
        flowers: [
          {
            image: TulipasVermelhas,
            name: "Flor Amália Cavalcanti",
            description: "Um buquê de rosas deslumbrante.",
            price: 99.0,
          },
          {
            image: TulipasRosa,
            name: "Flor Bela Lacerda",
            description: "Tulipas vibrantes para alegrar o dia.",
            price: 89.0,
          },
          {
            image: OrquideaBranca,
            name: "Orquídea Branca",
            description: "Simboliza pureza e elegância.",
            price: 35.0,
          },
          {
            image: RosaVermelha,
            name: "Rosa Vermelha",
            description: "Simboliza amor e paixão.",
            price: 40.0,
          },
          {
            image: Margarida,
            name: "Margarida Branca",
            description: "Simboliza paz e tranquilidade.",
            price: 20.0,
          },
          {
            image: TulipasVermelhas,
            name: "Flor Amália Cavalcanti",
            description: "Um buquê de rosas deslumbrante.",
            price: 99.0,
          },
          {
            image: TulipasRosa,
            name: "Flor Bela Lacerda",
            description: "Tulipas vibrantes para alegrar o dia.",
            price: 89.0,
          },
          {
            image: OrquideaBranca,
            name: "Orquídea Branca",
            description: "Simboliza pureza e elegância.",
            price: 35.0,
          },
          // Adicione mais flores aqui, se necessário
        ],
      };
    },
  };
  </script>
 
  <style scoped>


  .catalog-container {
  padding: 20px;
  text-align: center;
  background-color: #d9d9d9; 
  }
  
  .catalog-title {
    font-size: 24px;
    font-weight: bold;
    color: #530603;
    margin-bottom: 20px;
  }
  
  .catalog {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    justify-content: center;
    padding: 0 10px;
  }
  </style>
  