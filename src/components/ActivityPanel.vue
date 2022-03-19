<template>
  <Card>
    <template #title> Activity </template>
    <template #content>
      <div class="w-full sm:hidden lg:block">
        <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
          <g>
            <g v-for="i in 52" :key="`col-${i}`">
              <rect
                v-for="j in 7"
                rx="2"
                height="16"
                width="16"
                :y="j * 20"
                :x="i * 20"
                stroke="transparent"
                :fill="`rgba(123,123,123,${Math.random()})`"
                :key="`col-${i}-row-${j}`"
              />
            </g>
          </g>
        </svg>
      </div>
    </template>
  </Card>
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
