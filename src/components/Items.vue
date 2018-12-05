<template>
  <v-list class="items">
    <v-list-tile
      class="item"
      v-for="(item,index) in $store.state.section[section]"
      :key="`${section}-${index}`"
    >

      <v-text-field
        :value="item.text"
        @input="editItem($event, index)"
        :placeholder="$store.state.placeholder[section]"
        :class="{'line-through':item.done}"
      />
      <!-- 
      <v-menu
        bottom
        left
        transition="slide-y-transition"
      >

        <v-btn
          slot="activator"
          icon
          flat
        >
          <v-icon>arrow_drop_down</v-icon>

        </v-btn>

        <v-list>
          <v-list-tile
            v-for="(action, actionIndex) in actions"
            :key="actionIndex"
            @click="action.click(section, actionIndex)"
          >
            <v-list-tile-title>{{ action.text }}</v-list-tile-title>

          </v-list-tile>
        </v-list>

      </v-menu>
 -->
      <actions
        :section="section"
        :key="index"
      />
      <!-- <item :text="item.text" />
      <actions :section="section" /> -->
    </v-list-tile>
  </v-list>
</template>

<script>
import Actions from "./Actions.vue";
export default {
  props: ["section"],
  data() {
    return {};
  },
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
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
div.items {
  background-color: transparent;
}
.line-through {
  text-decoration: line-through;
}
.item1 {
  outline: 1px solid red;
  display: grid;
  grid-template-columns: auto fr;
}
</style>
