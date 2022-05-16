<template>
  <Card>
    <template #title>
      <i class="pi pi-calendar text-base"></i>
      <span class="text-base">Daily</span>
    </template>
    <template #content>
      <div class="content-block">
        <Calendar v-model="dateData" :inline="true" panel-class="border-none" />
        <Divider />
        <div class="todo-list-panel">
          <div class="no-task text-center text-400" v-if="allTask">
            <i class="fa-regular fa-file mr-2"></i> No task today...
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>
<script lang="ts" setup>
import Menu from "primevue/menu";
import { MenuItem } from "primevue/menuitem";
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import Divider from "primevue/divider";

const toast = useToast();
onMounted(async () => {
  console.log(await fetch("robots.txt"));
});
const dateData = ref();
const allTask = ref([]);
</script>
<style lang="scss" scoped>
.content-block {
  display: flex;
  flex-direction: column;
}
::v-deep(.p-calendar) {
  .p-datepicker {
    padding: 0.3rem;
    font-size: small;
    .p-datepicker-header {
      padding: 0;
    }
    td {
      padding: 0.1rem;
      span {
        font-size: small;
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
</style>
