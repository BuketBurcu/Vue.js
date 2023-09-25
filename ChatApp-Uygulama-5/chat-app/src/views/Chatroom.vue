<template>
  <div>
    <div class="container">
      <NavBar> </NavBar>
      <NewChatFrom></NewChatFrom>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import getUser from "../composables/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";
import NewChatFrom from "../components/NewChatFrom.vue";
export default {
  components: { NavBar.NewChatFrom },
  setup() {
    const { user } = getUser();
    const router = userRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "welcome" });
      }
    });
    return {};
  },
};
</script>

<style></style>
