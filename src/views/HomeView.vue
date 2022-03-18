<template>
  <div class="pt-8">
    <nav-menu
      class="fixed"
      style="width: calc(100% - 2rem); top: 1rem"
    ></nav-menu>
    <Image
      image-class="w-full h-12rem overflow-hidden"
      image-style="object-fit: cover"
      v-if="1 > 2"
      src="/img/banner.jpeg"
      alt="Not available"
      width="100%"
      size="cover"
    />
    <Card
      v-else
      class="col-12 h-12rem shadow-none border-solid surface-50 border-300"
    >
      <!-- <template #title> Simple Card </template>
      <template #content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template> -->
    </Card>
    <main class="grid">
      <Notification class="col-12 md:col-6 lg:col-8" />
      <Daily class="col-12 md:col-6 lg:col-4" />
      <ActivityPanel class="col-12 md:col-6 lg:col-8" />
    </main>
  </div>
</template>

<script lang="ts">
import NavigatorVue from "@/components/Navigator.vue";
import { defineComponent } from "vue";
import Notification from "@/components/Notification.vue";
import Daily from "../components/Daily.vue";
import ActivityPanel from "@/components/ActivityPanel.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    "nav-menu": NavigatorVue,
    Notification,
    Daily,
    ActivityPanel,
  },
});
</script>
