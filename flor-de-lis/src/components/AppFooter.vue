<template>
    <footer class="footer">
    <div class="container">
      <!-- Cadastro de email -->
      <div class="footer-section">
        <h3>Cadastre-se para Novidades e Exclusividades!</h3>
        <form class="newsletter">
          <input type="email" placeholder="Seu email" required>
          <button type="submit">Enviar</button>
        </form>
        <label>
          <input type="checkbox">
          Concordo em receber comunicações sobre novidades, promoções e eventos da Flor de Lis.
        </label>
      </div>
  
      <!-- Links Sobre Nós -->
      <div class="footer-section">
        <h3>Sobre nós</h3>
        <ul>
          <li><router-link to="/sobrenos">Nossa História</router-link></li>
          <li><a href="#">Sustentabilidade</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
  
      <!-- Links de Ajuda -->
      <div class="footer-section">
        <h3>Ajuda</h3>
        <ul>
          <li><router-link to="/atendimento">Fale Conosco</router-link></li>
          <li><a href="#">Política de Privacidade</a></li>
          <li><a href="#">Política de Reembolso</a></li>
          <li><a href="#">Termos de Serviço</a></li>
        </ul>
      </div>
  
      <!-- Redes sociais -->
      <div class="footer-section">
        <h3>Siga-nos</h3>
        <div class="social-icons">
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-whatsapp"></i></a>
          <a href="#"><i class="bi bi-hand-thumbs-up"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Flor de Lis. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>
<style scoped>

.footer {
  background-color: #290905;
  color: #ffffff;
  padding: 30px 0;
  font-family: 'Arial', sans-serif;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
}

.footer-section {
  flex: 1 1 200px;
  min-width: 250px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 15px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  text-decoration: none;
  color: #d3d3d3;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #ffffff;
}

/* Estilo do formulário de newsletter */
.newsletter {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.newsletter input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

.newsletter button {
  padding: 10px 15px;
  background-color: #3d0d07;;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.newsletter button:hover {
  background-color: #b27979;
}

label {
  font-size: 14px;
  color: #d3d3d3;
}

/* Ícones de redes sociais */
.social-icons a {
  font-size: 24px;
  color: #d3d3d3;
  margin-right: 15px;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #ffffff;
}

/* Rodapé inferior */
.footer-bottom {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  border-top: 1px solid #4c4c4c;
  padding-top: 10px;
}
</style>
<script>
export default {
  // Aqui está a propriedade `name`
  name: 'AppFooter',  // Defina um nome composto
 
};
</script>