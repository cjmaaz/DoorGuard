<template>
  <div class="container">
    <div class="overlay" :class="{ show: !collapsed }"></div>
    <div class="header">
      <h1>201's {{ title }}</h1>
    </div>
    <p class="greet">{{ greet }}</p>
    <div class="subtitle">Greetings! Home Log Manager</div>

    <div class="lower">
      <hr />
      <h3>What's the purpose?</h3>
      <ul class="lists">
        <b><li>Log your complaints.</li></b>
        <p>We have camera installed inside so specify the timings.</p>
        <b><li>Any message if I'm not available.</li></b>
        <p>You can log your queries also.</p>
        <b><li>Any help you need</li></b>
        <p>Select urgent in query box, and I'll contact you soon.</p>
      </ul>
      <hr />
      <h3>How you can do it?</h3>
      <ol class="lists">
        <b><li>Login</li></b>
        <p>
          Select
          <svg
            class="svg-inline--fa fa-user-circle fa-w-16"
            data-v-fae5bece=""
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
            ></path>
          </svg>
          user icon and Login/Signup, you'll get new icons in navbar.
        </p>
        <b><li>Query</li></b>
        <p>
          Select
          <svg
            class="svg-inline--fa fa-file-alt fa-w-12"
            data-v-fae5bece=""
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
            ></path>
          </svg>
          query icon and enter your query, select category before Submit.
        </p>
      </ol>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Home",
  setup() {
    const store = useStore();
    // Navbar
    const collapsed = computed(() => store.state.collapsed);
    // Color Scheme
    const darkMode = computed(() => store.state.darkMode);
    const headerColor = computed(() => store.state.headerColor);
    const headerBgcolor = computed(() => store.state.headerBgcolor);
    const color = computed(() => store.state.color);
    const bgColor = computed(() => store.state.bgColor);

    const title = computed(() => store.state.title);
    const greet = computed(() => store.state.welcome);

    return {
      collapsed,
      darkMode,
      headerColor,
      headerBgcolor,
      title,
      color,
      bgColor,
      greet,
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
  p.greet {
    margin: 4vh auto;
    font-family: monospace;
    font-size: calc(1em + 1vw);
    position: relative;
    /*outline: 2px solid red;*/
    width: max-content;
    max-width: 81vw;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    &::before {
      background-color: v-bind(bgColor);
      animation: typeWriter 2s steps(v-bind("greet.length")) 1s forwards;
    }
    &::after {
      width: 0.125em;
      background-color: v-bind(color);
      animation: typeWriter 2s steps(v-bind("greet.length")) 1s forwards,
        blink 600ms steps(v-bind("greet.length")) infinite;
    }
  }
  .subtitle {
    opacity: 0;
    transform: translateY(2rem);
    animation: fadeInUp 1s ease 2.5s forwards;
  }
  .lists {
    text-align: left;
    .svg-inline--fa {
      width: 18px;
      margin-bottom: -3.5px;
      &.fa-file-alt {
        height: 18px;
      }
    }
  }
  .lower {
    height: 83vh;
    width: 70vw;
    margin: 4em auto auto;
    h3 {
      text-align: left;
      font-weight: 800;
    }
  }
}
@keyframes typeWriter {
  to {
    left: 100%;
  }
}
@keyframes blink {
  to {
    background: transparent;
  }
}
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
