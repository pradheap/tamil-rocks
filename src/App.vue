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
              <b-nav-item href="/about">About</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
    </b-navbar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
