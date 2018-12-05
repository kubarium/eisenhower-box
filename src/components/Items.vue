<template>
  <v-list class="items">

    <v-list-tile
      :key="`${section}-${index}`"
      v-for="(item,index) in $store.state.section[section]"
    >
      <v-list-tile-content>
        <v-form>
          <v-text-field
            :value="item.text"
            @input="editItem($event, index)"
            :placeholder="$store.state.placeholder[section]"
            :class="{'line-through':item.done}"
          />
        </v-form>
      </v-list-tile-content>

      <v-list-tile-action>
        <actions
          :section="section"
          :key="index"
        />
      </v-list-tile-action>

    </v-list-tile>

  </v-list>
</template>

<script>
import Actions from "./Actions.vue";
export default {
  name: "Items",
  props: ["section"],
  components: { Actions },
  methods: {
    editItem(text, index) {
      this.$store.dispatch("interactWithItem", {
        intention: "editItem",
        section: this.section,
        text,
        index
      });
    }
  }
};
</script>
<style lang="scss" scoped>
div.items {
  background-color: transparent;
}
.line-through {
  text-decoration: line-through;
}
form {
  width: 100%;
}
</style>
