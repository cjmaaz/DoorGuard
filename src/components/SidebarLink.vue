<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <slot name="icon"></slot>
    <transition name="fade">
      <span v-if="!collapsed">
        <slot name="header"></slot>
      </span>
    </transition>
  </router-link>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  props: {
    to: { type: String, required: true },
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    const collapsed = computed(() => store.state.collapsed);
    return { isActive, collapsed };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;
  margin: 10px 0;
  padding: 23px 4px;
  border-radius: 0.25em;
  height: 1.5em;
  color: white;
  text-decoration: none;
}
.link:hover {
  background-color: var(--sidebar-item-hover);
}
.link.active {
  background-color: var(--sidebar-item-active);
}
.link svg.icon.upIcon {
  flex-shrink: 0;
  width: 35px;
  height: 35px;
}
.link svg.icon.upIcon.fa-file-alt {
  height: 35px;
}
.link span {
  margin-left: 15px;
}
</style>
