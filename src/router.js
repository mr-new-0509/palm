import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from './pages/DashboardPage';
import SwapPage from './pages/SwapPage';
import StakingPage from './pages/StakingPage';

const routes = [
  {
    path: '/',
    component: DashboardPage
  },
  {
    path: '/swap',
    component: SwapPage
  },
  {
    path: '/staking',
    component: StakingPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;