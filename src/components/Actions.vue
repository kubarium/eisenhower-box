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
        v-for="(action, actionIndex) in $store.getters.actionsForThisItem({section,index:$vnode.key})"
        :key="actionIndex"
        @click="takeAction(action.payload)"
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
    takeAction(payload) {
      switch (payload.intention) {
        case "done":
          this.$store.dispatch("interactWithItem", {
            intention: "finishItem",
            section: this.section,
            index: this.$vnode.key
          });
          break;

        case "removeItem":
          this.$store.dispatch("interactWithItem", {
            intention: "removeItem",
            section: this.section,
            index: this.$vnode.key
          });
          break;
        case "move":
          this.$store.dispatch("moveItem", {
            from: payload.from,
            to: payload.to,
            index: payload.which
          });
          break;
        default:
          console.log(payload);
          break;
      }
    }
  }
};
</script>

<style>
</style>
