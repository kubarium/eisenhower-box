<template>
  <v-layout
    align-center
    justify-center
    row
    fill-height
  >

    <v-flex
      md12
      lg10
      xl8
      hidden-xs-only
    >
      <div class="square">
        <span class="headline "></span>
        <span class="headline text-uppercase ">Urgent</span>
        <span class="headline text-uppercase ">Not Urgent</span>
        <span class="headline text-uppercase  importance">Important</span>

        <box
          class="item green lighten-2"
          section="do"
        />

        <box
          class="item green lighten-2"
          section="decide"
        />

        <span class="headline text-uppercase  importance">Not Important</span>

        <box
          class="item deep-orange lighten-2"
          section="delegate"
        />

        <box
          class="item deep-orange lighten-2"
          section="later"
        />

      </div>
    </v-flex>
    <v-flex
      xs12
      hidden-sm-and-up
    >
      <div class="column">

        <div class="title text-uppercase ">Important & Urgent</div>
        <box
          class="item green lighten-2"
          section="do"
        />

        <div class="title text-uppercase ">Important But Not Urgent</div>
        <box
          class="item green lighten-2"
          section="decide"
        />

        <div class="title text-uppercase ">Not Important But Urgent</div>
        <box
          class="item deep-orange lighten-2"
          section="delegate"
        />

        <div class="title text-uppercase ">Neither Important <br /> Nor Urgent</div>
        <box
          class="item deep-orange lighten-2"
          section="later"
        />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Box from "./Box.vue"
export default {
  name: 'EisenhowerBox',
  props: {
  },
  created(){
this.$store.commit("loadStorage")
  },components:{Box}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.square {
  border-radius: 1rem;
  overflow: hidden;
  background: rgba(159, 159, 159, 210);
  box-shadow: 1px 1px 11px 2px #aaa;
  display: grid;
  grid-template-columns: auto 1fr 1fr;
}
.column{
  border-radius: 1rem;
  overflow: hidden;
}
.column .item:not(:last-of-type){
  margin-bottom: 15px;
}
.headline, .title {
  background: #ebebeb;
  padding: 15px;
}
.column .title1{
  line-height: 2 !important;  
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
</style>
