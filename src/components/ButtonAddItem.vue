<template>

  <v-tooltip left>
    <v-btn
      slot="activator"
      icon
      class="button-add"
      :disabled="$store.state.section[section].length==4"
      @click="$store.dispatch('interactWithItem',{intention:'addItem',section})"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <span v-if="$store.state.section[section].length==4">Let's not turn this into a wish list, shall we?</span>
    <span v-else>Keep adding what's relevant</span>
  </v-tooltip>

</template>

<script>
export default {
    name:"ButtonAddItem",
props:["section"]
}
</script>

<style lang="scss" scoped>
.button-add{
    margin-left: 0;
}

</style>