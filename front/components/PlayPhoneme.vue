<script setup>
import PlaySound from "~/components/PlaySound.vue";

const props = defineProps({
  phoneme: { type: String, required: false, default: null },
  p: { type: String, required: false, default: null },
})

</script>

<template>
  <PlaySound v-if="p" :src="`/sounds/${p}.ogg`" :label="`🔊 Listen ${p}`" ></PlaySound>
  <PlaySound v-if="phoneme"  :src="`/sounds/${phoneme}.ogg`" :label="`🔊 Listen ${phoneme}`" ></PlaySound>
</template>

<style scoped>
</style>