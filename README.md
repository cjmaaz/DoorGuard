# My Guest and Visit Manger App

This application is built to save the query of the visitors coming to my home.

## Details

This is a single page application built with Vuejs. The application uses
Vue3 Composition API. It uses Vuex 4 State Management and Vue-Router for
the routing. It uses new modular Firebase 9 for backend services and
authentication.<br/> <br/>
Vuex 4 is using lazy load technique to reduce the initial bundle size.
Route Guard to redirect unverified users to verification page. Implements
Mutations, Getters and Action methods of Vuex to seamlessly update the web
app accordingly without reloading. <br/><br/>
Used Props, Slots, Computed, Watchers and Lifecycle Hooks etc. of Vuejs.
<br/>
Other than Authentication from Firebase 9, it uses firestore query and rules to prevent unauthorized access.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
