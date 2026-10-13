<script setup>
import { ref } from 'vue'

// Define the props you want to pass from Markdown
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Spoiler image'
  },
  buttonText: {
    type: String,
    default: 'Click to reveal image'
  },
  clickToHide: {
    type: Boolean,
    default: true
  }
})

const isRevealed = ref(false)
</script>


<template>
  <div class="spoiler-image">
    <!-- The Button -->
    <button
      v-show="!isRevealed"
      class="reveal-button"
      @click="isRevealed = true"
    >
      {{ buttonText || 'Click to reveal image' }}
    </button>

    <!-- The Hidden Image -->
    <div v-show="isRevealed" class="image-container">
      <img :src="src" :alt="alt" @click="isRevealed = false" />
      <p v-if="clickToHide" class="hide-hint">(Click image to hide)</p>
    </div>
  </div>
</template>


<style scoped>
.spoiler-image {
  margin: 1rem 0;
}

.reveal-button {
  padding: 0.75rem 1.5rem;
  background-color: #e5e7eb;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  color: #374151;
  transition: background-color 0.2s;
}

.reveal-button:hover {
  background-color: #d1d5db;
}

.image-container {
  margin-top: 0.5rem;
  cursor: pointer;
}

.image-container img {
  max-width: 100%;
  border-radius: 0.5rem;
  border: 2px solid #d1d5db;
}

.hide-hint {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
  text-align: center;
}
</style>