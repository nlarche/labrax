<template>
  <div id="app">
        <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              Labrax
            </a>
            <div class="navbar-item">
              <div class="select is-primary">
                <select v-model="selected" v-on:change="selectRegion">
                  <option value="golfe">Golfe de Gascogne</option>
                  <option value="manche">Manche Est et Mer du Nord </option>
                  <option value="mediterranee">Meditérannée</option>
                </select>
              </div>
            </div>
          </div>
        </nav>
     <section class="section">
      <div class="container is-widescreen">
        <router-view></router-view>
      </div>
  </section>
  </div>
</template>

<script>
import { setRegion, getRegion } from '@/service/region';

export default {
  name: 'app',
  data() {
    return {
      selected: getRegion().key,
    };
  },
  methods: {
    async selectRegion() {
      setRegion(this.selected);
      this.$router.push({ name: 'List', params: { reg: this.selected } });
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
