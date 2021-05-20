<template>
  <v-app>
    <Navbar />
    <v-main class="router-content">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.v-application {
  margin-right: 20px;
  margin-left: 20px;
}

.router-content {
  width: 1250px;
  margin-right: auto;
  margin-left: auto;
}
</style>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data: () => ({
    // No data needed.
  }),
};
</script>
