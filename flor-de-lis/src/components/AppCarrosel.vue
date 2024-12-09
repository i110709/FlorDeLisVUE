<template>
  <div class="carousel-container">
    <h1 class="carousel-title">Flores Mais Vendidas</h1>
    <div class="carousel">
      <!-- Botão para navegar para o slide anterior -->
      <button class="carousel-arrow left" @click="prevSlide">❮</button>

      <!-- Faixa que contém os cards -->
      <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(flower, index) in groupedFlowers" :key="index" class="carousel-slide">
          <FlowerCard
            v-for="(item, i) in flower"
            :key="i"
            :image="item.image"
            :name="item.name"
            :description="item.description"
            :price="item.price"
          />
        </div>
      </div>

      <!-- Botão para navegar para o próximo slide -->
      <button class="carousel-arrow right" @click="nextSlide">❯</button>
    </div>
  </div>
</template>

<script>
import FlowerCard from './FlorCard.vue';
import TulipasVermelhas from '/src/assets/tulipas-vermelhas.jpg';
import TulipasRosa from '/src/assets/tulipas_rosa.jpg'
import OrquideaBranca from '/src/assets/orquideas_brancas.jpg'
import Margarida from "/src/assets/margarida.jpg"
import RosaVermelha from "/src/assets/rosavermelha.jpg"


export default {
  name: 'FlowerCarousel',
  components: {
    FlowerCard,
  },
  data() {
    return {
      currentIndex: 0,
      flowers: [
        {
          image: TulipasVermelhas,
          name: 'Flor Amélia Cavalcanti',
          description: 'Rosinha amarela e roxinha',
          price: 25,
        },
        {
          image: TulipasRosa,
          name: 'Tulipa Rosa',
          description: 'Um buquê suave e delicado',
          price: 30,
        },
        {
          image: OrquideaBranca,
          name: 'Orquídea Branca',
          description: 'Simboliza pureza e elegância',
          price: 35,
        },
        {
          image: RosaVermelha,
          name: 'Rosa Vermelha',
          description: 'Simboliza amor e paixão',
          price: 40,
        },
        {
          image: Margarida,
          name: 'Margarida Branca',
          description: 'Simboliza paz e tranquilidade',
          price: 20,
        },
        {
          image: TulipasRosa,
          name: 'Tulipa Rosa',
          description: 'Um buquê suave e delicado',
          price: 30,
        }
      ],
    };
  },
  computed: {
    groupedFlowers() {
      const groupSize = 3;
      return this.flowers.reduce((result, flower, index) => {
        const groupIndex = Math.floor(index / groupSize);
        if (!result[groupIndex]) result[groupIndex] = [];
        result[groupIndex].push(flower);
        return result;
      }, []);
    },
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        this.currentIndex === 0 ? this.groupedFlowers.length - 1 : this.currentIndex - 1;
    },
    nextSlide() {
      this.currentIndex =
        this.currentIndex === this.groupedFlowers.length - 1 ? 0 : this.currentIndex + 1;
    },
  },
};
</script>

<style scoped>

.carousel-container {
  width: 100%;
  overflow: hidden;
  background-color: #3d0d07;
  padding: 20px 0;
  text-align: center;
  height: 100vh;
  position: relative;
  margin: 0 auto;
}

.carousel-title {
  color: white;
  font-family: 'Playfair Display', serif;
  text-align: center; 
  margin-bottom: 60px; 
  margin-top: 15px; 
}

.carousel {
  position: relative;
  display: flex;
  align-items: center;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.carousel-slide {
  display: flex;
  justify-content: space-around;
  min-width: 100%;
}

.carousel-arrow {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 30px;
  border: none;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  transform: translateY(-50%);
  z-index: 10;
}

.carousel-arrow.left {
  left: 10px;
 
}

.carousel-arrow.right {
  right: 10px;
}
.florcard {
    width: 300px;
    background-color: white; /* Cor branca */
    border: 1px solid #ddd; /* Cor da borda (opcional) */
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

</style>

