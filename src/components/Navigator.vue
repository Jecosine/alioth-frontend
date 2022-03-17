<template>
  <Menubar :model="menu">
    <template #start>
      <div class="px-4">
        <Image src="/img/icons/Logo.svg" imageClass="h-2rem" />
      </div>
    </template>
    <template #end>
      <Button
        type="button"
        icon="pi pi-check-square"
        class="p-button-rounded p-button-text mx-1"
        @click="switchTheme"
        ><i class="pi pi-check-square" v-badge.danger="2"></i
      ></Button>

      <Button
        type="button"
        :icon="themeIcon"
        class="p-button-rounded p-button-text mx-1"
        @click="switchTheme"
      ></Button>
      <template v-if="isLogin">
        <Button
          type="button"
          @click="toggle"
          aria-haspopup="true"
          aria-controls="profileMenu"
          class="mx-2"
        ></Button>
        <Menu
          id="profileMenu"
          ref="profileMenuRef"
          :model="profileMenu"
          :popup="true"
        />
      </template>
      <template v-else>
        <div class="inline-block line-height-3rem">
          <Button
            label="Login"
            class="mx-1 p-button-rounded p-button-sm vertical-align-middle"
          />
          <Button
            label="Register"
            class="p-button-outlined p-button-rounded mx-1 p-button-sm vertical-align-middle"
          />
        </div>
      </template>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { navigationMenu, userMenu } from "@/api/components/Menu";
import { MenuItem } from "primevue/menuitem";
import { ref } from "vue";
import eventBus from "vue3-eventbus";
import Menubar from "primevue/menubar";
const menu = ref<MenuItem[]>(navigationMenu);
const profileMenu = ref<MenuItem[]>(userMenu);
const profileMenuRef = ref(null);
const toggle = (event: unknown) => {
  profileMenuRef.value.toggle(event);
};
const themeIcon = ref<string>("pi pi-sun");
const switchTheme = () => {
  themeIcon.value =
    themeIcon.value === "pi pi-sun" ? "pi pi-moon" : themeIcon.value;

  eventBus.emit("themeChange");
};
const isLogin = ref<boolean>(false);
</script>
<style lang="scss"></style>
