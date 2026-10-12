<script setup>
import Transliterator from '~/services/Transliterator'
import {thaiToIpa} from '~/const/maps.ts'

const props = defineProps({
  w: {type: String, required: true},
})

const transliteratorInst = new Transliterator()

const inputTextArea = ref(props.w)
const outputTextArea = ref('')

console.log('thaiToIpa', thaiToIpa)

function transliterate() {
  outputTextArea.value = transliteratorInst.transliterate(
    inputTextArea.value,
    thaiToIpa[0],
    false,
    false
  )
}

transliterate()
</script>

<template>
  {{ outputTextArea }}
</template>