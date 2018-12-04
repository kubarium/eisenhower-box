<template>
  <v-menu
    bottom
    left
    transition="slide-y-transition"
  >
    <v-btn
      ref="activator"
      slot="activator"
      icon
      flat
    >
      <v-icon>arrow_drop_down</v-icon>

    </v-btn>

    <v-list>
      <v-list-tile
        v-for="(action, actionIndex) in $store.getters.actionsForSection(section)"
        :key="actionIndex"
        @click="takeAction(action.payload, actionIndex)"
      >
        <v-list-tile-title>{{ action.text }}</v-list-tile-title>

      </v-list-tile>
    </v-list>

  </v-menu>
</template>

<script>
export default {
  props: ["section"],
  name: "Actions",
  computed: {},
  methods: {
    takeAction(payload, actionIndex) {
      switch (payload.intention) {
        case "done":
          break;

        case "removeItem":
          this.$store.dispatch("interactWithItem", {
            intention: "removeItem",
            section: this.section,
            index: this.$vnode.key
          });
          break;
        default:
          break;
      }
      console.log(this.$vnode.key, payload, this.section, actionIndex);
    }
  }
};
</script>

<style>
</style>
