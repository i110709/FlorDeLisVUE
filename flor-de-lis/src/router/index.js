import Vue from 'vue';
import VueRouter from 'vue-router';
import AppHome from '@/views/AppHome.vue';
import AppCatalogo from '@/views/AppCatalogo.vue';

import SobreNos from '@/views/SobreNos.vue';
import FavoritesPage from '@/views/AppFavoritos.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: AppHome },
  { path: '/catalogo', component: AppCatalogo },
  { path: '/sobrenos', component: SobreNos },
  { path: '/favoritos', component: FavoritesPage }, // Adicionando a rota de favoritos
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router; // Agora a exportação ocorre após a definição do router




