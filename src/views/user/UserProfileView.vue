<template>
  <div class="grid h-screen">
    <div class="col-5">
      <Menu :model="menu"></Menu>
    </div>
    <div class="col-7">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { userProfileMenu } from "@/api/components/Menu";
import { MenuItem } from "primevue/menuitem";
import { ref } from "vue";

const menu = ref<MenuItem[]>(userProfileMenu);
</script>

<style scoped></style>
