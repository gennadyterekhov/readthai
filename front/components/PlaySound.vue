<script setup>
const props = defineProps({
  src: { type: String, required: true },
  label: { type: String, default: '🔊 Play sound' }
})

const audio = ref(null)

function play() {
  if (!audio.value) audio.value = new Audio(props.src)
  audio.value.currentTime = 0
  audio.value.play()
}
</script>

<template>
  <button class="play-sound-btn" @click="play">{{ label }}</button>
</template>

<style scoped>
.play-sound-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: #f9fafb;
  cursor: pointer;
}
</style>