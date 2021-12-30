import { createStore } from 'vuex';

import { auth } from '@/firebase/config';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const store = createStore({
  state: {
    // Sidebar
    collapsed: true,
    SIDEBAR_WIDTH: 240,
    SIDEBAR_WIDTH_COLLAPSED: 58,
    darkMode: false,
    // User Data
    user: null,
    isAuthReady: false,
    // Title and Welcome
    title: 'Admin',
    welcome: 'Hello, Log your visit.',
    // Color Scheme
    headerBgcolor: "#eee",
    headerColor: "#3d3d3d",
    bgColor: "#fff",
    color: "#000"
  },
  mutations: {
    toggleSidebar(state) {
      state.collapsed = !state.collapsed;
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
      if (state.darkMode) {
        state.headerColor = "#eee";
        state.headerBgcolor = "#222";
        state.color = "#fff";
        state.bgColor = "#333";
      } else {
        state.headerBgcolor = "#eee";
        state.headerColor = "#3d3d3d";
        state.bgColor = "#fff";
        state.color = "#000";
      }
    },
    setUser(state, payload) {
      state.user = payload;
      //console.log('User state changed: ' + state.user);
    },
    setAuthIsReady(state, payload) {
      state.isAuthReady = payload;
    },
    setWelcome(state, payload) {
      state.welcome = payload;
    },
    setTitle(state, payload) {
      state.title = payload;
    },
  },
  actions: {
    async signUp(context, { name, email, password }) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        await updateProfile(auth.currentUser, {
          displayName: name
        });
        context.commit('setUser', res.user);
        context.commit('setWelcome', `Hello ${res.user.displayName.trim()}!!`);
        context.commit('setTitle', `Owner: Maaz`);
      } else {
        throw new Error('Could not complete signup');
      }
    },
    async verifyMail() {
      await sendEmailVerification(auth.currentUser);
    },
    async logmeIn(context, { email, password }) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit('setUser', res.user);
        context.commit('setWelcome', `Hello ${res.user.displayName.trim()}!!`);
        context.commit('setTitle', `Owner: Maaz`);
        if (!res.user.emailVerified) {
          context.dispatch('verifyMail');
        }
      } else {
        throw new Error('Could not Sign-in.');
      }
    },
    async signout(context) {
      await signOut(auth);
      context.commit('setUser', null);
      context.commit('setWelcome', `Hello, Log your visit.`);
      context.commit('setTitle', `Admin`);
    },
  },
  getters: {
    sidebarWidth(state) {
      return `${state.collapsed ? state.SIDEBAR_WIDTH_COLLAPSED : state.SIDEBAR_WIDTH}px`
    },
  }
})
const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true);
  store.commit('setUser', user);
  if (user) {
    store.commit('setWelcome', `Hello ${user.displayName.trim()}!!`);
    store.commit('setTitle', `Owner: Maaz`);
  }
  unsub();
})
export default store;