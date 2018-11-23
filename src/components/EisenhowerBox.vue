<template>
  <v-layout align-center justify-center row fill-height>

    <v-flex xs12 md12 lg10 xl8>
      <div class="box">
        <span class="headline"></span>
        <span class="headline text-uppercase">Urgent</span>
        <span class="headline text-uppercase">Not Urgent</span>
        <span class="headline text-uppercase importance">Important</span>
        <div class="item green lighten-2">

          <header class="white--text">
            <h2 class="display-1 text-uppercase font-weight-bold">
              Do
            </h2>
            <span class="subheading font-italic">Do it now.</span>
            <v-btn icon :disabled="$store.state.section.do.length==4">
              <v-icon>add</v-icon>
            </v-btn>
          </header>

          <items section="do" />

        </div>
        <div class="item green lighten-2">

          <header class="white--text">
            <h2 class="display-1 text-uppercase font-weight-bold">
              Decide
            </h2>
            <span class="subheading font-italic">Schedule a time to do it.</span>
            <v-btn icon :disabled="$store.state.section.decide.length==4">
              <v-icon>add</v-icon>
            </v-btn>
          </header>

          <items section="decide" />

        </div>
        <span class="headline text-uppercase importance">Not Important</span>
        <div class="item deep-orange lighten-2">

          <header class="white--text">
            <h2 class="display-1 text-uppercase font-weight-bold">
              Delegate
            </h2>
            <span class="subheading font-italic">Who can do it for you?</span>
            <v-btn icon :disabled="$store.state.section.delegate.length==4">
              <v-icon>add</v-icon>
            </v-btn>
          </header>

          <items section="delegate" />

        </div>
        <div class="item deep-orange lighten-2">

          <header class="white--text">
            <h2 class="display-1 text-uppercase font-weight-bold">
              Do it later
            </h2>
            <span class="subheading font-italic">Stop doing this or do it in moderation!</span>
            <v-btn icon :disabled="$store.state.section.later.length==4" @click="$store.commit('addItem',{section:'later'})">
              <v-icon>add</v-icon>
            </v-btn>
          </header>

          <items section="later" />

        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Items from "./Items.vue"
export default {
  name: 'EisenhowerBox',
  props: {
  },
  components:{Items}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  border-radius: 1rem;
  overflow: hidden;
  background: rgba(159, 159, 159, 210);
  box-shadow: 1px 1px 11px 2px #aaa;
  display: grid;
  grid-template-columns: auto 1fr 1fr;
}
.headline {
  background: #ebebeb;
  padding: 15px;
}
header {
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: column;
}
button {
  justify-self: end;
}
.importance {
  writing-mode: vertical-rl;
  text-align: center;
  text-orientation: sideways;
  transform: rotate(180deg);
}
.item {
  padding: 1rem;
  text-align: left;
  min-height: 250px;
}
.item:nth-of-type(1) {
  margin-right: 1px;
  margin-bottom: 1px;
}
.item:nth-of-type(2) {
  margin-bottom: 1px;
}
.item:nth-of-type(3) {
  margin-right: 1px;
}
ul {
  margin: 1rem;
}
a {
  color: #42b983;
}
div.items {
  background-color: transparent;
}
</style>
