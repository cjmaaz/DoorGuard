<template>
  <div class="container-history">
    <div class="overlay" :class="{ show: !collapsed }"></div>
    <div class="title-header">
      <h1>History</h1>
    </div>
    <div class="messages">
      <h3 class="name">Hey, {{ user.displayName }}</h3>
      <h4>Your Messages:</h4>

      <div class="table">
        <div class="row header green">
          <div class="cell">Category</div>
          <div class="cell">Message</div>
        </div>

        <div class="row" v-for="message in messages" :key="message.id">
          <div class="cell" data-title="Category">
            {{ message.category }}
          </div>
          <div class="cell" data-title="Message">
            {{ message.message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import getCollection from "@/composables/getCollection";

const store = useStore();
const collapsed = computed(() => store.state.collapsed);
const headerColor = computed(() => store.state.headerColor);
const headerBgcolor = computed(() => store.state.headerBgcolor);
const color = computed(() => store.state.color);
const bgColor = computed(() => store.state.bgColor);
const user = computed(() => store.state.user);

const { documents } = getCollection("message", [
  "userMail",
  "==",
  user.value.email,
]);

const messages = ref(documents);

// Without onSnapshot
//import { db } from "@/firebase/config";
//import { collection, getDocs } from "firebase/firestore";
//const colRef = collection(db, "message");

/*getDocs(colRef).then((snapshot) => {
  let docs = [];
  snapshot.docs.forEach((doc) => {
    let eachDoc = doc.data();
    if (
      eachDoc.userMail == user.value.email &&
      eachDoc.name == user.value.displayName
    ) {
      docs.push({ ...doc.data(), id: doc.id });
    }
  });
  messages.value = docs;
  console.log(messages.value);
});*/
</script>
<style lang="scss" scoped>
.container-history {
  color: v-bind(color);
  background-color: v-bind(bgColor);
  height: 100vh;
  .title-header {
    color: v-bind(headerColor);
    background-color: v-bind(headerBgcolor);
    h1 {
      font-family: "Be Vietnam Pro", monospace;
      padding: 10px 0;
      margin: 0;
    }
  }
}
</style>
<style lang="sass">
  .wrapper
    margin: 0 auto
    padding: 40px
    max-width: 800px

.table
  margin: 0 0 40px 0
  width: 100%
  box-shadow: 0 1px 3px rgba(0,0,0,0.2)
  display: table
  @media screen and (max-width: 580px)
    display: block

.row
  display: table-row
  background: v-bind(headerBgcolor)

  &:nth-of-type(odd)
    background: v-bind(bgColor)

  &.header
    font-weight: 900
    border: 3px solid v-bind(bgcolor)

  @media screen and (max-width: 580px)
    padding: 14px 0 7px
    display: block

    &.header
      padding: 0
      height: 6px

      .cell
        display: none

    .cell
      margin-bottom: 10px

      &:before
        margin-bottom: 3px
        content: attr(data-title)
        min-width: 98px
        font-size: 10px
        line-height: 10px
        font-weight: bold
        text-transform: uppercase
        color: #969696
        display: block

.cell
  padding: 6px 12px
  display: table-cell
  @media screen and (max-width: 580px)
    padding: 2px 16px
    display: block
</style>
