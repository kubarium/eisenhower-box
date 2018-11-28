<template>
  <v-app id="app">
    <v-tooltip bottom>
      <h1 slot="activator">
        The Eisenhower Box

      </h1>
      <span>
        "WHAT IS IMPORTANT IS SELDOM URGENT AND WHAT IS URGENT IS SELDOM IMPORTANT",

        Dwight D. Eisenhower
      </span>
    </v-tooltip>
    <v-content>
      <v-container fluid>
        <eisenhower-box />
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import EisenhowerBox from './components/EisenhowerBox.vue'

export default {
  name: 'app',
  components: {
    EisenhowerBox
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
h1 {
  background: #394d5f;
  color: whitesmoke;
  line-height: 56px;
  margin-bottom: 1em;
}
.red {
  color: #fc3e50;
}
.blue {
  color: #2c3e50;
}
.green {
  color: #2c6e50;
}
.yellow {
  color: #cfef9f;
}
</style>
