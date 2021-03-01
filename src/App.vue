<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">
        Список контактов
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: map-get($colors, "primary")
}

.nav a.router-link-exact-active {
  color: map-get($colors, "primary")
}
</style>
