<template>
  <div class="container">
    <div v-if="verified" class="card-details">
      <h1>Profile Info</h1>
      <span class="icon"
        ><svg
          class="svg-inline--fa fa-user-astronaut fa-w-14"
          data-v-0fcd37b8=""
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="user-astronaut"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z"
          ></path></svg
      ></span>
      <div class="profileDetails">
        <h3>{{ user.displayName }}</h3>
        <h4>Email: {{ user.email }}</h4>
        <h4>
          User Verified:
          <svg
            class="svg-inline--fa fa-check-circle fa-w-16 tick"
            data-v-0fcd37b8=""
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="check-circle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
            ></path>
          </svg>
        </h4>
        <button class="logoutBtn" @click="handleLogout">Logout</button>
      </div>
    </div>
    <div v-else>
      <h1>Profile Info</h1>
      <div class="card-verify">
        <span class="msg-text"> Please verify your email. </span>
        <button @click="handleResend">Resend Email</button>
        <span class="warn"
          ><i class="fas fa-exclamation-circle"></i> Refresh after
          confirming.</span
        >
        <button class="logoutBtn" @click="handleLogout">Logout</button>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Profile",
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const verified = computed(() => store.state.user.emailVerified);
    const headerColor = computed(() => store.state.headerColor);
    const headerBgcolor = computed(() => store.state.headerBgcolor);
    const color = computed(() => store.state.color);
    const bgColor = computed(() => store.state.bgColor);

    const handleResend = () => {
      store.dispatch("verifyMail");
    };
    const handleLogout = () => {
      store.dispatch("signout");
    };
    return {
      user,
      verified,
      handleResend,
      handleLogout,
      headerColor,
      headerBgcolor,
      color,
      bgColor,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  height: 87vh;
  .msg-text {
    display: block;
  }
  .card-details {
    margin-top: 3em;
  }
  .icon {
    font-size: 5em;
    .svg-inline--fa {
      width: 1.5em;
    }
  }
  .logoutBtn {
    display: block;
    margin: 4em auto;
    text-decoration: none;
    background: #e45a5a;
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
  .profileDetails {
    .tick {
      margin-bottom: -3px;
      color: #45b6a1;
      width: 17px;
    }
  }
}
</style>
