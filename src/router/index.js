import Vue from 'vue';
import VueRouter from 'vue-router';

// Route components
import Home from '@/views/Home.vue';
import WorkHistory from '@/views/WorkHistory.vue';
import PersonalProjects from '@/views/PersonalProjects.vue';
import SiteDetails from '@/views/SiteDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/workhistory',
    name: 'Work History',
    component: WorkHistory
  },
  {
    path: '/projects',
    name: 'Personal Projects',
    component: PersonalProjects
  },
  {
    path: '/sitedetails',
    name: 'Site Details',
    component: SiteDetails
  }
];

const router = new VueRouter({
  routes
});

export default router;
