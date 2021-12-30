<template>
  <div class="container-query">
    <div class="overlay" :class="{ show: !collapsed }"></div>
    <div class="header">
      <h1>Query Page</h1>
    </div>
    <form>
      <div class="drop-container">
        <label for="category">Category: </label>
        <select name="category" id="category" v-model="category">
          <option value="Complaint">Complaint</option>
          <option value="Enquiry">Enquiry</option>
          <option value="Message">Message</option>
          <option value="Urgent">Urgent</option>
        </select>
      </div>
      <div class="input-area">
        <textarea
          placeholder="Type a message and hit enter to send..."
          v-model="message"
          @keypress.enter="handleSubmit"
        >
        </textarea>
        <button @click.prevent="handleSubmit">Send</button>
        <div class="error">
          {{ error }}
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { db } from "@/firebase/config";
import { useRouter } from "vue-router";
import { collection, addDoc } from "firebase/firestore";

const store = useStore();
const router = useRouter();
const collapsed = computed(() => store.state.collapsed);
const headerColor = computed(() => store.state.headerColor);
const headerBgcolor = computed(() => store.state.headerBgcolor);
const color = computed(() => store.state.color);
const bgColor = computed(() => store.state.bgColor);
// Form
const error = ref(null);
const message = ref("");
const category = ref("Message");

// User Data
const user = computed(() => store.state.user);

//Submit and Validation
const handleSubmit = async () => {
  const colRef = collection(db, "message");

  try {
    await addDoc(colRef, {
      category: category.value,
      name: user.value.displayName.trim(),
      userMail: user.value.email,
      message: message.value,
    });
    error.value = null;
    category.value = "Message";
    message.value = "";
    router.push("/histories");
  } catch (err) {
    error.value = err;
  }
};
</script>
<style lang="scss" scoped>
.container-query {
  color: v-bind(color);
  background-color: v-bind(bgColor);
  height: 100vh;
  .header {
    color: v-bind(headerColor);
    background-color: v-bind(headerBgcolor);
    h1 {
      font-family: "Be Vietnam Pro", monospace;
      padding: 10px 0;
      margin: 0;
    }
  }
  form {
    margin: 20px;

    .input-area {
      width: 80vw;
      /*display: grid;
      grid-template-columns: 5fr 1fr;*/
      max-width: 700px;
      margin: 0 auto;
      textarea {
        width: 100%;
        max-width: 100%;
        margin-left: -15px;
        padding: 10px;
        border: 1px solid grey;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
      }
      button {
        margin: 4px 4px 4px -10px;
        max-width: 100px;
        text-decoration: none;
        background: #5a96e4;
        color: #fff;
        font-weight: bold;
        border: 0;
        border-radius: 20px;
        padding: 0.7em 2em;
        cursor: pointer;
        &:hover,
        &:active {
          background: #b64545;
        }
      }
    }
    .drop-container {
      margin: 30px 0;
      select {
        padding: 6px;
        border-radius: 1em;
      }
    }
  }
}
</style>
