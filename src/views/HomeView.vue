<template>
  <div class="">
    <header class="grid-nogutter mb-2">
      <div
        class="xl:col-10 xl:col-offset-1 lg:col-12 lg:col-offset-0 sm:col-12 sm:col-offset-0"
      >
        <Navigator class="sticky c-shadow-8 surface-a"></Navigator>
      </div>
    </header>
    <main class="grid-nogutter">
      <div
        class="xl:col-10 xl:col-offset-1 lg:col-12 lg:col-offset-0 sm:col-12 sm:col-offset-0"
      >
        <router-view />
      </div>
    </main>
    <footer class="grid-nogutter">
      <div
        class="lg:col-6 lg:col-offset-3 md:col-10 md:col-offset-1 mt-4 border-300 flex justify-content-center align-items-center"
      >
        <div class="footer-divider border-300"></div>
        <Image src="/img/icons/Logo.svg" imageClass="h-2rem mx-4" />
        <div class="footer-divider border-300"></div>
      </div>
      <div
        class="lg:col-6 lg:col-offset-3 md:col-10 md:col-offset-1 mt-4 pb-6 border-300 flex justify-content-center align-items-center h-2rem line-height-1 text-400"
      >
        Copyright©2022 Alioth OJ - Jecosine️
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import Navigator from "@/components/Navigator.vue";
</script>
<style lang="scss" scoped>
.footer-divider {
  width: 30%;
  border-top: solid 1px black;
}

//::v-deep(.dial-container) {
//  .p-speeddial-direction-up {
//
//  }
//}
</style>
