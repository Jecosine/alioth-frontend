<template>
  <div class="w-full">
    {{ recentProblems }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const recentProblems = ref([]);
</script>

<style scoped></style>
