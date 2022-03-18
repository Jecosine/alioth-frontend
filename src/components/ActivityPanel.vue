<template>
  <panel header="Activities" class="my-3">
    <template #icons>
      <button class="p-panel-header-icon p-link mr-2" @click="toggle">
        <span class="pi pi-cog"></span>
      </button>
      <Menu id="act_menu" ref="toggleMenu" :model="items" :popup="true" />
    </template>
    <div class="w-full"></div>
  </panel>
</template>
<script lang="ts" setup>
import Menu from "primevue/menu";
import { MenuItem } from "primevue/menuitem";
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const toggleMenu = ref<Menu | null>(null);
const items = ref<MenuItem[]>([
  {
    label: "Options",
    items: [
      {
        label: "Update",
        icon: "pi pi-refresh",
        command: () => {
          toast.add({
            severity: "success",
            summary: "Updated",
            detail: "Data Updated",
            life: 3000,
          });
        },
      },
      {
        label: "Delete",
        icon: "pi pi-times",
        command: () => {
          toast.add({
            severity: "warn",
            summary: "Delete",
            detail: "Data Deleted",
            life: 3000,
          });
        },
      },
    ],
  },
  {
    label: "Navigate",
    items: [
      {
        label: "Vue Website",
        icon: "pi pi-external-link",
        url: "https://vuejs.org/",
      },
      {
        label: "Router",
        icon: "pi pi-upload",
        command: () => {
          window.location.hash = "/fileupload";
        },
      },
    ],
  },
]);
const toggle = (event: Event) => {
  toggleMenu.value?.toggle(event);
};
</script>
