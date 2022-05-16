<template>
  <Card>
    <template #title>
      <i class="pi pi-chart-line"></i>
      <span>Activity</span>
    </template>
    <template #content>
      <div class="grid">
        <div class="col-9">
          <div class="sm:hidden lg:flex">
            <svg
              :width="52 * (squareSize + 2)"
              :height="7 * (squareSize + 2)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g v-for="i in 52" :key="`col-${i}`">
                  <rect
                    v-for="j in 7"
                    rx="2"
                    :height="squareSize"
                    :width="squareSize"
                    :y="(j - 1) * (squareSize + 2)"
                    :x="(i - 1) * (squareSize + 2)"
                    stroke="transparent"
                    :fill="`rgba(123,123,123, ${Math.random()})`"
                    :key="`col-${i}-row-${j}`"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="col-1">
          <Divider layout="vertical"></Divider>
        </div>
        <div class="col-2">Test</div>
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
const squareSize = ref<number>(10);
</script>
