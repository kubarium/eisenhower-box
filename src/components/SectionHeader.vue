<template>
    <header class="white--text">
        <h2 class="display-1 text-uppercase font-weight-bold">
            {{$store.state.heading[section]}}
        </h2>
        <span class="subheading font-italic">
            {{$store.state.subheading[section]}}
        </span>
        <button-add-item :section="section" />
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
  grid-auto-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: column;
}
button {
  justify-self: end;
}
</style>

