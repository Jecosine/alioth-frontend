<template>
  <Card>
    <template #title> Daily </template>
    <template #content>
      <div class="content-block">
        <ul class="m-0 p-0">
          <template v-for="(item, i) in 3" :key="`sk-${i}`">
            <li class="mb-3">
              <div class="flex">
                <div style="flex: 1">
                  <Skeleton width="100%" class="mb-2"></Skeleton>
                  <Skeleton width="75%"></Skeleton>
                </div>
              </div>
            </li>
            <Divider />
          </template>
        </ul>
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
onMounted(async () => {
  console.log(await fetch("robots.txt"));
});
</script>
