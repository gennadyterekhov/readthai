<script setup>
const props = defineProps({
    modelValue: { type: String, default: '' },
    label: { type: String, default: '' },
    rows: { type: Number, default: 6 },
    hideDetails: { type: Boolean, default: false },
    // style: { type: [String, Object, Array], default: '' },
    styleFontFamily: { type: String, default: '' },
    minFontSize: { type: Number, default: 0.6 },
    maxFontSize: { type: Number, default: 40 },
    step: { type: Number, default: 0.1 },
    initialFontSize: { type: Number, default: 1 },
})

const emit = defineEmits(['update:modelValue', 'input'])
let styleForTextarea=null
if(props.styleFontFamily){
    styleForTextarea = `font-family: ${props.styleFontFamily};`
}
const autoGrow = ref(false)
const fontSize = ref(props.initialFontSize)

function bump(delta) {
    fontSize.value = Math.min(
        props.maxFontSize,
        Math.max(props.minFontSize, +(fontSize.value + delta).toFixed(2))
    )
}

const fontSizeCss = computed(() => `${fontSize.value}rem`)
</script>

<template>
    <div class="resizable-textarea">
        <div class="d-flex align-center ga-1 mb-1">
            <v-btn size="x-small" variant="text" density="comfortable" @click="bump(-step)">
                <v-icon icon="mdi-minus" />
            </v-btn>
            <span class="text-caption text-medium-emphasis" style="min-width: 3.5rem; text-align: center;">
                {{ fontSize.toFixed(1) }}rem
            </span>
            <v-btn size="x-small" variant="text" density="comfortable" @click="bump(step)">
                <v-icon icon="mdi-plus" />
            </v-btn>
            <v-spacer />
            <v-btn
              size="x-small"
              density="comfortable"
              :variant="autoGrow ? 'flat' : 'text'"
              :color="autoGrow ? 'primary' : undefined"
              prepend-icon="mdi-arrow-expand-vertical"
              @click="autoGrow = !autoGrow"
            >
                раскрыть
            </v-btn>
        </div>
        <v-textarea
          :key="autoGrow ? 'grow' : 'fixed'"
          :model-value="modelValue"
          :label="label"
          :rows="autoGrow ? undefined : rows"
          :auto-grow="autoGrow"
          :hide-details="hideDetails"
          :style="styleForTextarea"
          @update:model-value="emit('update:modelValue', $event)"
          @input="emit('input', $event)"
        />
    </div>
</template>

<style scoped>
.resizable-textarea :deep(textarea) {
    font-size: v-bind(fontSizeCss);
}
</style>