<script setup>
import {dictionary} from "~/const/dictionary.ts";
import Exercise from "~/components/Exercise.vue";

const props = defineProps({
  w: {type: String, required: true},//word
  d: {type: String, required: false, default: 'trans_to_thai'},//direction
})

const wordTranslationFromDict = dictionary.words[props.w]?.translation || ''
const wordIpaFromDict = dictionary.words[props.w]?.ipa || ''
const wordPaiboonFromDict = dictionary.words[props.w]?.paiboon || ''

let exerciseText = props.d === 'thai_to_trans' ? `write ${props.w} in IPA/Paiboon?` : `write /${wordIpaFromDict}/ in Thai`
exerciseText = props.d === 'translation' ? `what is ${props.w} in english?` : exerciseText

let expected = props.d === 'thai_to_trans' ? [wordIpaFromDict, wordPaiboonFromDict] : [props.w]
expected = props.d === 'translation' ? [wordTranslationFromDict] : expected

</script>

<template>
  <Exercise :t="exerciseText" :e="expected" />

</template>

<style scoped>

</style>