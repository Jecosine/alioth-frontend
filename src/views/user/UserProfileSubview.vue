<template>
  <div class="grid">
    <!-- user information update -->
    {{ user }}
  </div>
</template>

<script lang="ts" setup>
import { User } from "@/typings/user";
import { ref } from "vue";
const user = ref({});
</script>
