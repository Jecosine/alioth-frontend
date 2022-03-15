<template>
  <div id="app-content" ref="appContent">
    <router-view />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import bus from "vue3-eventbus";
const currentTheme = ref("light");
const appContent = ref(null);

function themeChange() {
  console.log("fucking theme changed");
  currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
  document.documentElement.className = currentTheme.value;
  appContent.value.className = currentTheme.value;
  console.log(appContent.value);
}
bus.on("themeChange", themeChange);
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#app {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--surface-ground);
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
