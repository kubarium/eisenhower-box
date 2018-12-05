<template>
  <header class="white--text">
    <h2 class="display-1 text-uppercase font-weight-bold">
      {{$store.state.heading[section]}}
    </h2>
    <span class="subheading font-italic">
      {{$store.state.subheading[section]}}
    </span>
    <button-add-item
      class="button-add-item"
      :section="section"
    />

  </header>
</template>

<script>
import ButtonAddItem from "./ButtonAddItem.vue"
export default {
name:"SectionHeader",
props:["section"],
components:{ButtonAddItem}
}
</script>
<style lang="scss" scoped>
header {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "heading button-add-item"
    "subheading subheading";
}
h2{
    grid-area: heading;
}
.subheading{
    grid-area: subheading;
}
.button-add-item{
    grid-area: button-add-item;
  justify-self: end;
}
</style>

