<script setup>
const props = defineProps({
  word: { type: String, required: true },
})
</script>

<template>
  <a
    :href="`https://en.wiktionary.org/wiki/${word}#Thai`"
    target="_blank"
    rel="noopener noreferrer"
    class="link-text"
  >{{word}}</a>

</template>

<style scoped>
.link-text{
  font-size: 2rem;
}
</style>