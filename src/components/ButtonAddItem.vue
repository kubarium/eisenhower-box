<template>

  <v-btn
    slot="activator"
    icon
    class="button-add"
    :class="{hidden:$store.state.section[section].length==4}"
    @click="$store.dispatch('interactWithItem',{intention:'addItem',section})"
  >
    <v-icon>add</v-icon>
  </v-btn>
  <!-- <v-tooltip left>
    <span v-if="$store.state.section[section].length==4">Because it's not a wish list</span>
    <span v-else>Keep adding what's relevant</span>
  </v-tooltip> -->

</template>

<script>
export default {
  name: "ButtonAddItem",
  props: ["section"]
};
</script>

<style lang="scss" scoped>
.button-add {
  margin-left: 0;
}
.hidden {
  visibility: hidden;
}
</style>