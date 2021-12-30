<template>
  <div class="welcome">
    <h3>Login</h3>
    <form @submit.prevent="handleSubmit">
      <input
        v-model.trim="email"
        type="email"
        required
        placeholder="Enter email...."
      />
      <input
        v-model="password"
        type="password"
        required
        placeholder="Enter password.."
      />
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <button>Log in</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  emits: ["login"],
  setup(props, context) {
    const store = useStore();
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const handleSubmit = async () => {
      try {
        await store.dispatch("logmeIn", {
          email: email.value,
          password: password.value,
        });
        context.emit("login");
      } catch (err) {
        error.value = err;
      }
    };
    return { name, email, password, error, handleSubmit };
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  h3 {
    text-align: center;
    margin-left: -18px;
  }
  form {
    width: 200px;
    max-width: 440px;
    margin: 2em auto;
    input {
      width: 250px;
      padding: 1em;
      border-radius: 1em;
      border: 1px solid #bbb;
      outline: none;
      color: #999;
      margin: 1em 10em 1em -30px;
    }
    .error {
      color: #ff3f80;
      font-size: 14px;
      margin-bottom: 0.5em;
    }
    button {
      display: block;
      margin: 0 47px;
      text-decoration: none;
      background: #5ae4ca;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 20px;
      padding: 0.7em 2em;
      cursor: pointer;
      &:hover,
      &:active {
        background: #45b6a1;
      }
    }
  }
}
</style>
