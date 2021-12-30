<template>
  <div class="container">
    <div class="overlay" :class="{ show: !collapsed }"></div>
    <div class="header">
      <h1 v-if="user">Welcome {{ user.displayName }}</h1>
      <h1 v-else>Welcome</h1>
    </div>
    <div v-if="!user" class="lower">
      <div v-if="isNew">
        <SignupForm @signup="enterChat" />
        <span>Already have an account?</span>
        <span @click="isNew = false">Login</span>
      </div>
      <div v-else>
        <LoginForm @login="enterChat" />
        <span>Don't have an account?</span>
        <span @click="isNew = true">Sign Up</span>
      </div>
    </div>
    <div v-if="user"><Profile /></div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import SignupForm from "@/components/UserComp/SignupForm.vue";
import LoginForm from "@/components/UserComp/LoginForm.vue";
import Profile from "@/components/UserComp/Profile.vue";

export default {
  name: "Welcome",
  components: { SignupForm, LoginForm, Profile },
  setup() {
    const router = useRouter();
    const store = useStore();
    const collapsed = computed(() => store.state.collapsed);
    const headerColor = computed(() => store.state.headerColor);
    const headerBgcolor = computed(() => store.state.headerBgcolor);
    const color = computed(() => store.state.color);
    const bgColor = computed(() => store.state.bgColor);
    const user = computed(() => store.state.user);
    const isNew = ref(false);
    const enterChat = () => {
      router.push("/queries");
    };
    return {
      isNew,
      collapsed,
      color,
      bgColor,
      headerBgcolor,
      headerColor,
      enterChat,
      user,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  color: v-bind(color);
  background-color: v-bind(bgColor);
  .header {
    color: v-bind(headerColor);
    background-color: v-bind(headerBgcolor);

    h1 {
      font-family: "Be Vietnam Pro", monospace;
      padding: 10px 0;
      margin: 0;
    }
  }

  a {
    color: v-bind(headerColor);
  }
  .lower {
    height: 91vh;
    margin: 0.7em auto auto;
    div > span {
      margin-left: -10px;
      + span {
        margin-left: -10px;
        display: block;
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>
