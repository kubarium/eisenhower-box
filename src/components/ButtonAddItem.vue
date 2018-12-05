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

</template>

<script>
export default {
  name: "ButtonAddItem",
  props: ["section"]
};
</script>

<style lang="scss" scoped>
.hidden {
  visibility: hidden;
}
</style>