<template>
  <div class="flex w-full h-full align-items-center">
    <div class="grid-nogutter w-full">
      <div
        class="login-panel-container lg:col-4 lg:col-offset-4 xl:col-2 xl:col-offset-5"
      >
        <div class="p-4 w-full text-center">
          <Image src="/img/icons/Logo.svg" imageClass="w-6 align-self-center" />
        </div>
        <div class="field mb-5">
          <span class="p-float-label">
            <input-text
              id="email"
              type="text"
              class="w-full shadow-2"
              v-model="loginForm.email"
            ></input-text>
            <label for="email">Email</label>
          </span>
        </div>
        <div class="field mb-5">
          <span class="p-float-label">
            <password
              id="password"
              class="w-full"
              input-class="w-full shadow-2"
              v-model="loginForm.password"
              toggleMask
            ></password>
            <label for="password">Password</label>
          </span>
        </div>
        <div class="flex flex-row justify-content-between">
          <Button
            label="Login"
            class="p-button w-full vertical-align-middle"
            @click="$router.push({ path: '/' })"
          />
        </div>
        <div
          class="flex flex-row align-items-center justify-content-center mt-5"
        >
          <div class="button-group text-center">
            <Button
              icon="fa-brands fa-github"
              class="p-button-rounded bg-bluegray-700 text-2xl mx-2"
            />
            <Button
              icon="fa-brands fa-bitbucket"
              class="p-button-rounded bg-blue-700 text-2xl mx-2"
            />
          </div>
          <span class="bg-transparent text-400 mx-2">Or</span>
          <Button
            label="SignUp"
            icon="fa-solid fa-user-plus"
            class="p-button-text p-button-secondary"
          ></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// const name = "LoginView";
import { UserLoginForm } from "@/typings/user";
import { reactive, ref } from "vue";

const loginForm = reactive<UserLoginForm>({
  email: "",
  password: "",
  keepLogin: false,
});
</script>

<style lang="scss" scoped>
::v-deep(.divider-container) {
  .p-divider-content {
    background-color: transparent;
  }
}
</style>
