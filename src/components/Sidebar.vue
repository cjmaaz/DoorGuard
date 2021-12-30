<template>
  <div
    class="sidebar"
    :style="{ width: sidebarWidth }"
    @click.self="toggleSidebar"
  >
    <h1>
      <span v-if="collapsed">
        <svg
          class="svg-inline--fa fa-door-open fa-w-20"
          data-v-7d622f5c=""
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="door-open"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z"
          ></path>
        </svg>
      </span>
      <span v-else
        >Flat 201
        <svg
          class="svg-inline--fa fa-door-closed fa-w-20"
          data-v-7d622f5c=""
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="door-closed"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M624 448H512V50.8C512 22.78 490.47 0 464 0H175.99c-26.47 0-48 22.78-48 50.8V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM415.99 288c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32c.01 17.67-14.32 32-32 32z"
          ></path></svg
      ></span>
    </h1>

    <SidebarLink to="/">
      <template v-slot:header>Home</template>
      <template v-slot:icon
        ><svg
          class="svg-inline--fa fa-home fa-w-18 icon upIcon"
          data-v-08eeb476=""
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="home"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
          ></path></svg
      ></template>
    </SidebarLink>
    <SidebarLink to="/welcome">
      <template v-slot:header>User</template>
      <template v-slot:icon
        ><svg
          class="svg-inline--fa fa-user-circle fa-w-16 icon upIcon"
          data-v-08eeb476=""
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="user-circle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
          ></path></svg
      ></template>
    </SidebarLink>
    <SidebarLink v-if="user" to="/queries">
      <template v-slot:header>Query</template>
      <template v-slot:icon
        ><svg
          class="svg-inline--fa fa-file-alt fa-w-12 icon upIcon"
          data-v-08eeb476=""
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="file-alt"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
          ></path></svg
      ></template>
    </SidebarLink>
    <SidebarLink v-if="user" to="/histories">
      <template v-slot:header>History</template>
      <template v-slot:icon>
        <svg
          class="svg-inline--fa fa-hourglass-half fa-w-12 icon upIcon"
          data-v-7d622f5c=""
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="hourglass-half"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M360 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24zm-75.078 384H99.08c17.059-46.797 52.096-80 92.92-80 40.821 0 75.862 33.196 92.922 80zm.019-256H99.078C91.988 108.548 88 86.748 88 64h208c0 22.805-3.987 44.587-11.059 64z"
          ></path>
        </svg>
      </template>
    </SidebarLink>
    <SidebarLink to="/about">
      <template v-slot:header>About</template>
      <template v-slot:icon
        ><svg
          class="svg-inline--fa fa-atom fa-w-14 icon upIcon"
          data-v-08eeb476=""
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="atom"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M223.99908,224a32,32,0,1,0,32.00782,32A32.06431,32.06431,0,0,0,223.99908,224Zm214.172-96c-10.877-19.5-40.50979-50.75-116.27544-41.875C300.39168,34.875,267.63386,0,223.99908,0s-76.39066,34.875-97.89653,86.125C50.3369,77.375,20.706,108.5,9.82907,128-6.54984,157.375-5.17484,201.125,34.958,256-5.17484,310.875-6.54984,354.625,9.82907,384c29.13087,52.375,101.64652,43.625,116.27348,41.875C147.60842,477.125,180.36429,512,223.99908,512s76.3926-34.875,97.89652-86.125c14.62891,1.75,87.14456,10.5,116.27544-41.875C454.55,354.625,453.175,310.875,413.04017,256,453.175,201.125,454.55,157.375,438.171,128ZM63.33886,352c-4-7.25-.125-24.75,15.00391-48.25,6.87695,6.5,14.12891,12.875,21.88087,19.125,1.625,13.75,4,27.125,6.75,40.125C82.34472,363.875,67.09081,358.625,63.33886,352Zm36.88478-162.875c-7.752,6.25-15.00392,12.625-21.88087,19.125-15.12891-23.5-19.00392-41-15.00391-48.25,3.377-6.125,16.37891-11.5,37.88478-11.5,1.75,0,3.875.375,5.75.375C104.09864,162.25,101.84864,175.625,100.22364,189.125ZM223.99908,64c9.50195,0,22.25586,13.5,33.88282,37.25-11.252,3.75-22.50391,8-33.88282,12.875-11.377-4.875-22.62892-9.125-33.88283-12.875C201.74516,77.5,214.49712,64,223.99908,64Zm0,384c-9.502,0-22.25392-13.5-33.88283-37.25,11.25391-3.75,22.50587-8,33.88283-12.875C235.378,402.75,246.62994,407,257.8819,410.75,246.25494,434.5,233.501,448,223.99908,448Zm0-112a80,80,0,1,1,80-80A80.00023,80.00023,0,0,1,223.99908,336ZM384.6593,352c-3.625,6.625-19.00392,11.875-43.63479,11,2.752-13,5.127-26.375,6.752-40.125,7.75195-6.25,15.00391-12.625,21.87891-19.125C384.7843,327.25,388.6593,344.75,384.6593,352ZM369.65538,208.25c-6.875-6.5-14.127-12.875-21.87891-19.125-1.625-13.5-3.875-26.875-6.752-40.25,1.875,0,4.002-.375,5.752-.375,21.50391,0,34.50782,5.375,37.88283,11.5C388.6593,167.25,384.7843,184.75,369.65538,208.25Z"
          ></path></svg
      ></template>
    </SidebarLink>

    <span class="theme-icon" @click.stop="toggleDarkMode">
      <svg
        class="svg-inline--fa fa-sun fa-w-16 downIcon"
        data-v-7d622f5c=""
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="sun"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M494.2 221.9l-59.8-40.5 13.7-71c2.6-13.2-1.6-26.8-11.1-36.4-9.6-9.5-23.2-13.7-36.2-11.1l-70.9 13.7-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7C98 60.4 84.5 64.5 75 74.1c-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3 9.5 9.5 22.9 13.7 36.3 11.1l70.8-13.7 40.4 59.9C230 505.3 242.6 512 256 512s26-6.7 33.5-17.8l40.4-59.9 70.9 13.7c13.4 2.7 26.8-1.6 36.3-11.1 9.5-9.5 13.6-23.1 11.1-36.3l-13.7-71 59.8-40.5c11.1-7.5 17.8-20.1 17.8-33.5-.1-13.6-6.7-26.1-17.9-33.7zm-112.9 85.6l17.6 91.2-91-17.6L256 458l-51.9-77-90.9 17.6 17.6-91.2-76.8-52 76.8-52-17.6-91.2 91 17.6L256 53l51.9 76.9 91-17.6-17.6 91.1 76.8 52-76.8 52.1zM256 152c-57.3 0-104 46.7-104 104s46.7 104 104 104 104-46.7 104-104-46.7-104-104-104zm0 160c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"
          data-v-7d622f5c=""
        ></path>
      </svg>
    </span>
    <span v-if="!collapsed" class="theme-desc" @click.stop="toggleDarkMode">
      <p>Visibility</p>
    </span>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click.stop="toggleSidebar"
    >
      <svg
        class="svg-inline--fa fa-angle-double-left fa-w-14 downIcon"
        data-v-7d622f5c=""
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="angle-double-left"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"
        ></path>
      </svg>
    </span>
    <span v-if="!collapsed" class="collapse-desc" @click.stop="toggleSidebar">
      <p>Collapse</p>
    </span>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import SidebarLink from "@/components/SidebarLink";

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    const store = useStore();
    const collapsed = computed(() => store.state.collapsed);
    const sidebarWidth = computed(() => store.getters.sidebarWidth);
    const user = computed(() => store.state.user);
    const toggleSidebar = () => {
      store.commit("toggleSidebar");
    };
    const toggleDarkMode = () => {
      store.commit("toggleDarkMode");
    };
    return { collapsed, toggleSidebar, sidebarWidth, toggleDarkMode, user };
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: hsl(0, 0%, 0%);
  --sidebar-item-hover: hsl(0, 0%, 30%);
  --sidebar-item-active: hsl(0, 0%, 30%);
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 2.5em;
}
.theme-desc {
  position: absolute;
  margin-left: 30px;
  top: 79.4vh;
  font-size: 0.7em;
  height: 45px;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
  cursor: pointer;
}
.theme-icon {
  position: absolute;
  top: 80vh;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
  cursor: pointer;
}
.collapse-desc {
  position: absolute;
  margin-left: 30px;
  top: 84.5vh;
  font-size: 0.7em;
  height: 45px;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
  cursor: pointer;
}
.collapse-icon {
  position: absolute;
  top: 85.1vh;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
  cursor: pointer;
}
.rotate-180 {
  top: 85vh;
  transform: rotate(180deg);
  transition: 0.2s linear;
}
.svg-inline--fa.downIcon {
  color: #fff;
  width: 17px;
}
.fa-door-open,
.fa-door-closed {
  width: 40px;
}
</style>
