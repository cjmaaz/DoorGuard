<template>
  <div class="container">
    <div class="overlay" :class="{ show: !collapsed }"></div>
    <div class="header">
      <h1>About</h1>
    </div>
    <h2>Project Details:</h2>
    <p class="details">
      This is a single page application built with Vuejs. The application uses
      Vue3 Composition API. It uses Vuex 4 State Management and Vue-Router for
      the routing. It uses new modular Firebase 9 for backend services and
      authentication.
    </p>
    <p class="details"><b>Hence latest and greatest 😊</b></p>
    <h2>Diving Deep:</h2>
    <p class="details">
      Vuex 4 is using lazy load technique to reduce the initial bundle size.
      Route Guard to redirect unverified users to verification page. Implements
      Mutations, Getters and Action methods of Vuex to seamlessly update the web
      app accordingly without reloading.
    </p>
    <p class="details">
      Used Props, Slots, Computed, Watchers and Lifecycle Hooks etc. of Vuejs.
    </p>
    <h2>Design Inspiration:</h2>
    <b>Nothing Product Site.</b>
    <p>
      <a
        href="http://in.nothing.tech/"
        target="_blank"
        rel="noopener noreferrer"
        >https://in.nothing.tech/</a
      >
    </p>
    <h4>More...... later</h4>
    <div class="lower"></div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, watch, computed, onMounted } from "vue";
export default {
  setup() {
    const store = useStore();
    const collapsed = computed(() => store.state.collapsed);
    const darkMode = computed(() => store.state.darkMode);
    const headerColor = ref("");
    const headerBgcolor = ref("");
    const color = ref("");
    const bgColor = ref("");

    const computeColor = () => {
      if (darkMode.value) {
        headerColor.value = "#eee";
        headerBgcolor.value = "#222";
        color.value = "#fff";
        bgColor.value = "#333";
      } else {
        headerBgcolor.value = "#eee";
        headerColor.value = "#3d3d3d";
        bgColor.value = "#fff";
        color.value = "#000";
      }
    };

    watch(
      computed(() => store.state.darkMode),
      () => {
        computeColor();
      }
    );
    onMounted(() => {
      computeColor();
    });
    return {
      collapsed,
      color,
      bgColor,
      headerBgcolor,
      headerColor,
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
    height: 17vw;
    width: 70vw;
    margin: 4em auto auto;
    overflow: hidden;
  }
  .details {
    padding: 0 1.2em;
  }
}
</style>
