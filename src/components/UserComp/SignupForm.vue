<template>
  <div class="welcome">
    <h3>Sign Up</h3>
    <form @submit.prevent="handleSubmit">
      <input
        v-model.trim="name"
        type="text"
        required
        placeholder="Enter name..."
      />
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

      <button>Sign Up</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  emits: ["signup"],
  setup(props, context) {
    const store = useStore();
    const error = ref(null);
    const name = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      try {
        await store.dispatch("signUp", {
          email: email.value,
          password: password.value,
          name: name.value,
        });
        await store.dispatch("verifyMail");
        context.emit("signup");
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
      border: 1px solid;
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
