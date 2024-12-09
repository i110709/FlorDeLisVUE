<template>
  <header class="navbar">
    <nav class="container">
      <!-- Navegação à esquerda -->
      <ul class="nav-left">
        <li><router-link to="/sobrenos">Sobre Nós</router-link></li>
        <li><router-link to="/catalogo">Catálogo</router-link></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
      <!-- Logotipo -->
      <div class="logo">
        <img src="@/assets/logo.png" alt="Flor de Lis Logo">
      </div>

      <!-- Nav à direita -->
      <ul class="nav-right">
        <li class="location"><i class="bi bi-geo-alt"></i> Recife</li>
        <li class="phone"><i class="bi bi-telephone"></i> (00)12345-6789</li>
        <li class="favorites"><router-link to="/favoritos">
            <i class="bi bi-heart" aria-label="Favoritos"></i>
          </router-link>
        </li>
        <li class="cart">
          <router-link to="/carrinho">
            <i class="bi bi-cart" aria-label="Carrinho"></i>
          </router-link>
        </li>
      </ul>
      
    </nav>
  </header>
</template>
<style scoped>
    /* styles.css */

.navbar {
  background-color: #d9d9d9;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
}

.container {
  width: 90%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

/* Navegação à esquerda */
.nav-left {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}

.nav-left li a {
  text-decoration: none;
  color:#660000;
  transition: color 0.3s;
}

.nav-left li a:hover {
  color: #7b5c5c;
}

/* Logotipo */
.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.logo img {
  width: 200px;
  height: 200px;
}

/* Navegação à direita */
.nav-right {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 18px;
  align-items: center;
}

.nav-right li {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  color: #7b5c5c;
}

.nav-right li a {
  text-decoration: none;
  color: #7b5c5c;
  font-size: 18px;
  transition: color 0.3s;
}

.nav-right li a:hover {
  color: #b27979;
}

/* Ícones do Bootstrap */
.bi {
  font-size: 16px;
  color: #7b5c5c;
  transition: color 0.3s;
}

.bi:hover {
  color: #b27979;
}

</style>
<script>
export default {
  // Aqui está a propriedade `name`
  name: 'AppNavbar',  // Defina um nome composto
};
</script>


