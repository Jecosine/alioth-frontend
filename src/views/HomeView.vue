<template>
  <div class="">
    <main class="grid-nogutter">
      <div class="col-8 col-offset-2">
        <div class="grid">
          <div class="col-12">
            <nav-menu class="mb-2 sticky c-shadow-8 bg-white"></nav-menu>
          </div>
          <div class="col-12">
            <Image
              class="p-0"
              image-class="w-full h-16rem overflow-hidden c-shadow-8 mb-2 border-round"
              image-style="object-fit: cover"
              v-if="1 > 2"
              src="/img/banner.jpeg"
              alt="Not available"
              width="100%"
              size="cover"
            />
            <Card
              v-else
              class="h-16rem border-solid border-300 mb-2 c-shadow-8"
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
          </div>
          <div class="col-12 col-12 lg:col-8 mb-2">
            <Notification class="c-shadow-8" />
          </div>
          <div class="col-12 lg:col-4 mb-2">
            <Daily class="c-shadow-8" />
          </div>
          <div class="col-12 md:col-12 xl:col-8">
            <ActivityPanel class="c-shadow-8" />
          </div>
        </div>
      </div>
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
