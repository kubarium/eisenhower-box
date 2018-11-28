<template>
  <v-list class="items">
    <v-list-tile
      v-for="(item,index) in $store.state.section[section]"
      :key="`${section}-${index}`"
    >
      <v-text-field
        :value="item"
        @input="editItem($event, index)"
        :ref="`${section}-${index}`"
        :placeholder="$store.state.placeholder[section]"
        @click:append="removeItem(index)"
        append-icon="close"
      ></v-text-field>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
    props:["section"],
    methods:{
        removeItem(index){
            //this.$store.commit("removeItem",{section:this.section,index})
            this.$store.dispatch("interactWithItem", {intention:"removeItem",section:this.section,index})
        },
        editItem(text, index){
            //console.log(event,index)
            //console.log(this.$refs[`${this.section}-${index}`])
            this.$store.dispatch("interactWithItem", {intention:"editItem",section:this.section,text,index})
            //this.$store.commit("editItem",{section:this.section,text,index})
        }
    },
    computed:{
        /* items:function(){
            //return [1,2,3];
            return this.$store.state[this.section]
            } */
    }
}
</script>
<style lang="scss" scoped>
div.items {
  background-color: transparent;
}
</style>
