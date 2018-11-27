<template>
  <v-layout align-center justify-center row fill-height>

    <v-flex md12 lg10 xl8 hidden-xs-only>
      <div class="box">
        <span class="headline "></span>
        <span class="headline text-uppercase ">Urgent</span>
        <span class="headline text-uppercase ">Not Urgent</span>
        <span class="headline text-uppercase  importance">Important</span>

        <div class="item green lighten-2">
          <section-header section="do" />
          <items section="do" />
        </div>

        <div class="item green lighten-2">
          <section-header section="decide" />
          <items section="decide" />
        </div>

        <span class="headline text-uppercase  importance">Not Important</span>

        <div class="item deep-orange lighten-2">
          <section-header section="delegate" />
          <items section="delegate" />
        </div>

        <div class="item deep-orange lighten-2">
          <section-header section="later" />
          <items section="later" />
        </div>

      </div>
    </v-flex>
    <v-flex xs12>
      <div class="item green lighten-2">
        <items section="do" />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Items from "./Items.vue"
import SectionHeader from "./SectionHeader.vue"
export default {
  name: 'EisenhowerBox',
  props: {
  },
  created(){
this.$store.commit("loadStorage")
  },
  components:{Items,SectionHeader}
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
