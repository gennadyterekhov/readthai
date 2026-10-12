<script setup>
import WiktionaryLink from "~/components/WiktionaryLink.vue";
import {dictionary} from "~/const/dictionary.ts";

const props = defineProps({
  w: {type: String, required: true},
})

const wordTranslationFromDict = dictionary.words[props.w] || ''

</script>

<template>
  <WiktionaryLink :word="w" />
  {{ wordTranslationFromDict }}
</template>

<style scoped>
</style>