<template>
  <div>
    <section-header :section="section" />
    <items :section="section" />
  </div>
</template>

<script>
// class="item green lighten-2"
import Items from "./Items.vue"
import SectionHeader from "./SectionHeader.vue"
export default {
    name:"Box",
    props:["section"],
  components:{Items,SectionHeader}

}
</script>


