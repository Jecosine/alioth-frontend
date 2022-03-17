<template>
  <div>
    <nav-menu></nav-menu>
    <main class="grid">
      <Notification class="col-12 md:col-6 lg:col-8" />
    </main>
  </div>
</template>

<script lang="ts">
import NavigatorVue from "@/components/Navigator.vue";
import { defineComponent } from "vue";
import Notification from "@/components/Notification.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    "nav-menu": NavigatorVue,
    Notification,
  },
});
</script>
