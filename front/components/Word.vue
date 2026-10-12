<script setup>
import WiktionaryLink from "~/components/WiktionaryLink.vue";
import {dictionary,ipas} from "~/const/dictionary.ts";

const props = defineProps({
  w: {type: String, required: true},
  ipa: {type: String, required: false, default: ''},
})

const wordTranslationFromDict = dictionary.words[props.w] || ''
const wordIpaFromDict = ipas.words[props.w] || ''
</script>

<template>
  <WiktionaryLink :word="w" />
  &nbsp; <code class="custom-pre">/{{wordIpaFromDict}}/</code>&nbsp;

  {{ wordTranslationFromDict }}
  <br>
</template>

<style scoped>

</style>