<template>
  <div class="sobre-nos-container">
    <!-- Foto -->
    <div class="imagem-container">
      <img src="@/assets/sobrenos.png" alt="Equipe Flor de Lis" class="imagem-equipe" />
    </div>

    <!-- Texto -->
    <div class="texto-container">
      <h1 class="title">Sobre Nos</h1>
      <p>
        <strong>Flor de Lis</strong> é mais que um e-commerce de flores; é nossa poesia em formato digital, um sonho que floresceu entre códigos e cores. Inspiradas na canção de Djavan, trouxemos para o mundo nossa "flor que entre marias nasceu." Somos Isadora Maria, Kaylane Mariz e Maria Lethicya, três amigas e um desejo comum de espalhar beleza por onde passamos.
      </p>
      <p>
        Com o apoio generoso dos nossos professores Pedro e Kyu, que foram como os "raios de sol" em nosso jardim digital, pudemos crescer e ver nossa ideia desabrochar. Este projeto é o reflexo de todas as nossas noites de aprendizado e risadas, das horas que viraram pétalas de um trabalho que amamos.
      </p>
      <p>
        Não foi fácil, mas era o nosso "samba" e a gente dançou conforme a vida exigiu, juntas, mesmo que os "primeiros erros" nos desafiassem. Chegamos ao fim do 3º ano com a certeza de que nossa Flor de Lis não é só nossa, mas de todos que amam a arte e a inovação. Porque, no final, são esses nexos que nos fazem florescer.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SobreNos",
};
</script>

<style scoped>
@font-face {
  font-family: 'Moontime';
  src: url('/src/assets/fontes/FontsFree-Net-MoonTime-Regular-1.ttf') format('truetype');
}
@font-face {
  font-family: 'PlayfairDisplay';
  src: url('/src/assets/fontes/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf') format('truetype');
}

/* Reseta margens e preenchimentos */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #3d0d07;
  width: 100%;
  height: 100%;
}

.sobre-nos-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: "PlayfairDisplay", serif;
}

/* Imagem */
.imagem-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
}

.imagem-equipe {
  width: 100%;
  max-width: 400px;
  object-fit: cover;
}

/* Texto */
.texto-container {
  flex: 2;
  color: #fff;
}

.texto-container h1 {
  font-size: 36px;
  font-family: "Moontime";
  color: #f5e3e3;
  margin-bottom: 20px;
}

.texto-container p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px; 
}

.texto-container strong {
  color: #ffebeb;
}

/* Responsividade */
@media (max-width: 768px) {
  .sobre-nos-container {
    flex-direction: column;
  }

  .imagem-container,
  .texto-container {
    width: 100%;
  }
}
</style>

  
