<script setup>
import WiktionaryLink from "~/components/WiktionaryLink.vue";
import {dictionary,ipas} from "~/const/dictionary.ts";
import TransliteratedWord from "~/components/TransliteratedWord.vue";

const props = defineProps({
  w: {type: String, required: true},
  ipa: {type: String, required: false, default: ''},
})

const wordTranslationFromDict = dictionary.words[props.w] || ''
const wordIpaFromDict = ipas.words[props.w] || ''
</script>

<template>
  <WiktionaryLink :word="w" />
&nbsp;
  {{wordIpaFromDict}}
<!--  <span v-if="ipa">/{{ipa}}/</span>&nbsp;-->
<!--  <TransliteratedWord v-else :w="w" />&nbsp;-->

  {{ wordTranslationFromDict }}
  <br>
</template>

<style scoped>
</style>