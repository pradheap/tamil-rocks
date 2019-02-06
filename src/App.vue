<template>
  <div id="app">
    <b-navbar toggleable="sm" sticky>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="/">
          <img src="./assets/logo.png" alt="Tamil" width="56px">
          Tamil Rocks
        </b-navbar-brand>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
              <router-link to="/ngram">NGram</router-link>
            </b-navbar-nav>
            <b-navbar-nav>
              <b-nav-item href="/about">About</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
    </b-navbar>
  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Mukta+Malar');
@import url('https://fonts.googleapis.com/css?family=Open+Sans|M+PLUS+1p');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.navbar-brand {
  color: #000;
  font-weight: 500;
  font-size: 24px;
}
.navbar {
  background-color: #98ccd3;
}
</style>
