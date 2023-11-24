<template>
  <div>
    <div class="container">
      <NavBar />
      <ChatWindow />
      <NewChatFrom />
    </div>
  </div>
</template>

<script>
import NewChatFrom from "../components/NewChatFrom.vue";
import ChatWindow from "../components/ChatWindow.vue";
import NavBar from "../components/NavBar.vue";
import getUser from "../composables/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { NavBar, NewChatFrom, ChatWindow },
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
