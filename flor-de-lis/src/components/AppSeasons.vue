<template>
    <div class="seasons-container">
      <!-- Temporadas com Imagens de Fundo -->
      <div
        v-for="season in seasons"
        :key="season.name"
        :style="{ backgroundImage: `url(${season.background})` }"
        class="season-banner"
        @click="selectSeason(season.name)"
      >
        <h1 :class="{ active: selectedSeason === season.name }" class="season-title">
          Flores do {{ season.name }}
        </h1>
      </div>
  
      <!-- Catálogo de Flores -->
      <div v-if="selectedSeason" class="catalog-container">
        <h2 class="catalog-title">Flores da {{ selectedSeason }}</h2>
        <div class="catalog">
          <FlowerCard
            v-for="(flower, index) in filteredFlowers"
            :key="index"
            :image="flower.image"
            :name="flower.name"
            :description="flower.description"
            :price="flower.price"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import FlowerCard from "/src/components/FlorCard.vue";
  import TulipasVermelhas from "/src/assets/tulipas-vermelhas.jpg";
  import TulipasRosa from "/src/assets/tulipas_rosa.jpg";
  import OrquideaBranca from "/src/assets/orquideas_brancas.jpg";
  import Outono from "/src/assets/outono.png"
  import Inverno from "/src/assets/inverno.png"
  import Primavera from "/src/assets/primavera.png" 

  
  export default {
    name: "SeasonsCatalog",
    components: { FlowerCard },
    data() {
      return {
        selectedSeason: null,
        seasons: [
          { name: "Outono", background: Outono },
          { name: "Inverno", background: Inverno },
          { name: "Primavera", background: Primavera},
        ],
        flowers: [
        {
            season: "Primavera",
            image: TulipasRosa,
            name: "Tulipas Rosa",
            description: "Tulipas perfeitas para celebrar a primavera.",
            price: 89.0,
          },
          {
            season: "Inverno",
            image: OrquideaBranca,
            name: "Orquídea Branca",
            description: "Simboliza pureza e elegância no inverno.",
            price: 35.0,
          },
          {
            season: "Outono",
            image: TulipasVermelhas,
            name: "Tulipas Vermelhas",
            description: "Vibrantes e perfeitas para dias de outono.",
            price: 99.0,
          },
          {
            season: "Primavera",
            image: TulipasRosa,
            name: "Tulipas Rosa",
            description: "Tulipas perfeitas para celebrar a primavera.",
            price: 89.0,
          },
          {
            season: "Inverno",
            image: OrquideaBranca,
            name: "Orquídea Branca",
            description: "Simboliza pureza e elegância no inverno.",
            price: 35.0,
          },
          {
            season: "Outono",
            image: TulipasVermelhas,
            name: "Tulipas Vermelhas",
            description: "Vibrantes e perfeitas para dias de outono.",
            price: 99.0,
          },
        {
            season: "Primavera",
            image: TulipasRosa,
            name: "Tulipas Rosa",
            description: "Tulipas perfeitas para celebrar a primavera.",
            price: 89.0,
          },
          {
            season: "Inverno",
            image: OrquideaBranca,
            name: "Orquídea Branca",
            description: "Simboliza pureza e elegância no inverno.",
            price: 35.0,
          },
          {
            season: "Outono",
            image: TulipasVermelhas,
            name: "Tulipas Vermelhas",
            description: "Vibrantes e perfeitas para dias de outono.",
            price: 99.0,
          },
          {
            season: "Primavera",
            image: TulipasRosa,
            name: "Tulipas Rosa",
            description: "Tulipas perfeitas para celebrar a primavera.",
            price: 89.0,
          },
          {
            season: "Inverno",
            image: OrquideaBranca,
            name: "Orquídea Branca",
            description: "Simboliza pureza e elegância no inverno.",
            price: 35.0,
          },
          {
            season: "Outono",
            image: TulipasVermelhas,
            name: "Tulipas Vermelhas",
            description: "Vibrantes e perfeitas para dias de outono.",
            price: 99.0,
          },
          
        ],
      };
    },
    computed: {
      filteredFlowers() {
        return this.flowers.filter(
          (flower) => flower.season === this.selectedSeason
        );
      },
    },
    methods: {
      selectSeason(seasonName) {
        this.selectedSeason =
          this.selectedSeason === seasonName ? null : seasonName;
      },
    },
  };
  </script>
  
  <style scoped>
  @font-face {
        font-family: 'Moontime';
        src: url('/src/assets/fontes/FontsFree-Net-MoonTime-Regular-1.ttf') format('truetype');}
  /* Estilo do container principal */
  .seasons-container {
    text-align: center;
    background-color: #d9d9d9;
  }
  
  /* Banners das temporadas */
  .season-banner {
    position: relative;
    height: 75px;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .season-title {
    color: white;
    font-size: 24px;
    font-family: "Moontime", sans-serif;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
    transition: transform 0.3s;
  }
  
  .season-banner:hover .season-title {
    transform: scale(1.1);
  }
  
  .season-title.active {
    text-decoration: underline;
  }
  
  /* Catálogo */
  .catalog-container {
    padding: 20px;
    background-color: #f7f7f7;
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
  }
  </style>
  
  

