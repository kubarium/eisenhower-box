<template>
    <v-btn icon :disabled="$store.state.section[section].length==4" @click="$store.dispatch('interactWithItem',{intention:'addItem',section})">
        <v-icon>add</v-icon>
    </v-btn>
</template>

<script>
export default {
    name:"ButtonAddItem",
props:["section"]
}
</script>

<style>
</style>
