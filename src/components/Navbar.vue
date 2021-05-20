<template>
  <div class="navbar">
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/workhistory">Work History</v-btn>
    <v-btn text to="/projects">Personal Projects</v-btn>
    <v-btn text to="/sitedetails">Site Details</v-btn>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
  a+a {
    margin-left: 10px;
  }
}
</style>

<script>
export default {
  name: 'Navbar'
};
</script>
