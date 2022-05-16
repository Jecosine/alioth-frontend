<template>
  <Menubar :model="menu" class="nav-inner-container surface-card">
    <template #start>
      <div class="px-4">
        <Image
          src="/img/icons/Logo.svg"
          imageClass="h-2rem cursor-pointer"
          @click="$router.push({ path: '/' })"
        />
      </div>
    </template>
    <template #end>
      <!--      <Button-->
      <!--        type="button"-->
      <!--        icon="pi pi-check-square"-->
      <!--        class="p-button-rounded p-button-text mx-1"-->
      <!--        @click="switchTheme"-->
      <!--        ><i class="pi pi-check-square" v-badge.danger="2"></i-->
      <!--      ></Button>-->
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
          class="mx-2 p-button-rounded p-button-text p-0 h-full"
        >
          <img src="/img/avatar.jpg" class="w-3rem" alt="avatar" />
        </Button>
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
            class="mx-1 p-button-sm vertical-align-middle"
            @click="$router.push({ name: 'login' })"
          />
          <Button
            label="Register"
            class="p-button-outlined mx-1 p-button-sm vertical-align-middle"
          />
        </div>
      </template>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { navigationMenu, userMenu } from "@/api/components/Menu";
import { MenuItem } from "primevue/menuitem";
import { reactive, ref } from "vue";
import eventBus from "vue3-eventbus";
import Menubar from "primevue/menubar";
import userService from "@/services/UserService";
import { UserLoginForm } from "@/typings/user";

const menu = ref<MenuItem[]>(navigationMenu);
const profileMenu = ref<MenuItem[]>(userMenu);
const profileMenuRef = ref(null);
const toggle = (event: unknown) => {
  profileMenuRef.value?.toggle(event);
};
const themeIcon = ref<string>("pi pi-sun");
const switchTheme = () => {
  themeIcon.value =
    themeIcon.value === "pi pi-sun" ? "pi pi-moon" : themeIcon.value;

  eventBus.emit("themeChange");
};
const isLogin = ref<boolean>(true);
const loginForm = reactive<UserLoginForm>({
  email: "jecosine@gmail.com",
  keepLogin: false,
  password: "114514",
});
// login service
const {
  mutate: loginMutation,
  onError: onLoginError,
  onDone: onLoginDone,
  loading: loginLoading,
} = userService.login(loginForm);
onLoginDone((e) => {
  console.log("Done", e);
});
onLoginError((error) => {
  console.log("Error", error);
});
</script>
<style lang="scss" scoped>
.nav-inner-container {
  z-index: 999;
}
</style>
