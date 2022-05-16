<template>
  <div class="grid">
    <!--  team search bar -->
    <!--  show available team list:
    use list view, show team avatar, name, description, activities, member count, created time... -->
    TeamView
  </div>
</template>

<script lang="ts" setup>
// TODO: has team?
import { teamService } from "@/services/TeamService";
import { useStore } from "vuex";
import { key } from "@/store";
import { ref } from "vue";
const store = useStore(key);
const hasTeam = ref<boolean>(false);
const getAvailableTeamsCaller = teamService.getAvailableTeams({
  ownerId: store.getters.getUserId,
});
</script>
