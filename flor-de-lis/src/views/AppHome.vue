<template>
    <body>
        <div class="container">
            <!-- Texto à esquerda -->
            <div class="texto">
                <svg width="500" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path id="wavePath" d="M 10 150 Q 150 50, 300 125 T 500 50" fill="none" />
                    <text>
                        <textPath href="#wavePath" startOffset="5%" >
                            E o meu jardim da vida floresceu!
                        </textPath>
                    </text>
                </svg>
                
                <h2>
                    Deixe a beleza florescer ao seu redor: <br>
                    <b>aproveite nossas promoções especiais!</b>
                </h2>
            </div>
    
            <!-- Imagem à direita -->
            <div class="img">
                <img src="@/assets/florhome.png" alt="Flores decorativas">
            </div>
        </div>
    
    </body>
</template>

    <script>
    export default {
      name: 'AppHome',
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

    
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #d9d9d9;
        margin: 0;
        height: 75vh;
        color: #5c2b2e;
    }
    
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1400px;
        top: 25%;
    }
    
    .texto {
        flex: 1;
        position: relative;
        text-align: center;
        margin: auto;
        right: 10%;
        
    }
    
    svg {
        font-family: 'Moontime'; 
        font-size: 50px;
        fill: none;
    }
    
    svg textPath {
        fill: #530603; /* Cor do texto no SVG */
    }
    
    h2 {
        font-family: 'PlayfairDisplay', serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 1.5;
        max-width: 400px;
        margin: 0 auto; /* Centraliza o texto */
    }
    
    h2 b {
        font-style: italic;
        font-weight: 700;
    }
    
    .img {
        position: relative;
        right: 0;
        top: 15%;
        height: 90%;
    }
    
    .img img {
        height: 100%;
        object-fit: cover;
    }
   </style>