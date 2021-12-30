<template>
  <div>
    <Sidebar />
    <!--<div :style="{ 'margin-left': sidebarWidth }">-->
    <div :style="{ 'margin-left': '58px' }">
      <router-view />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import Sidebar from "@/components/Sidebar";

export default {
  components: { Sidebar },
  setup() {
    const store = useStore();
    const sidebarWidth = computed(() => store.getters.sidebarWidth);
    const textColor = computed(() => store.state.color);
    const backColor = computed(() => store.state.bgColor);
    return { sidebarWidth, textColor, backColor };
  },
};
</script>

<style lang="scss">
#app {
  color: v-bind(textColor);
  background-color: v-bind(backColor);
  font-family: "Be Vietnam Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
