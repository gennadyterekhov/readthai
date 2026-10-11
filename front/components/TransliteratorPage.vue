<script setup>
import Transliterator from '~/services/Transliterator'

const props = defineProps({
    preset: {
        type: Object,
        required: true,
    },
})

const transliteratorInst = new Transliterator()

const maps = computed(() => props.preset.maps)
const chosenMapName = ref(props.preset.defaultMapName)
const chosenMap = ref({})
const inputTextArea = ref(props.preset.initialText)
const outputTextArea = ref('')

const mapOptions = computed(() =>
    maps.value.map((m) => ({ value: m?._meta?.name, title: m?._meta?.select_option_inner_text }))
)

function setMap(mapName) {
    const filtered = maps.value.filter((el) => el._meta.name === mapName)
    if (filtered.length !== 1) {
        console.error('something wrong with name')
        outputTextArea.value = 'something wrong with name'
        return
    }
    chosenMap.value = filtered[0]
}

function transliterate() {
    const isCaseSensitive = chosenMap.value._meta.is_case_sensitive
    const isAllCaps = chosenMap.value._meta.is_all_caps

    outputTextArea.value = transliteratorInst.transliterate(
        inputTextArea.value,
        chosenMap.value,
        isCaseSensitive,
        isAllCaps
    )
}

watch(chosenMapName, (newName) => {
    setMap(newName)
    transliterate()
})

onMounted(() => {
    setMap(chosenMapName.value)
    transliterate()
})
</script>

<template>
    <div>
        <v-row dense>
            <v-col cols="12">
                <v-card>
                    <v-card-text>
                        <v-select
                          v-model="chosenMapName"
                          :items="mapOptions"
                          item-title="title"
                          item-value="value"
                          label="Map"
                        />
                        <ResizableTextarea
                          v-model="inputTextArea"
                          label="Input"
                          :rows="6"
                          @input="transliterate"
                        />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="mt-2" dense>
            <v-col v-if="chosenMap?._meta?.fonts?.length" v-for="fontName in chosenMap._meta.fonts" :key="fontName" cols="12" md="6">
                <v-card>
                    <v-card-text>
                        <div class="text-caption text-medium-emphasis mb-1">{{ fontName }}</div>
                        <ResizableTextarea
                          v-model="outputTextArea"
                          :rows="6"
                          :initial-font-size="2"
                          :step="1"
                          :styleFontFamily="fontName"
                          hide-details
                        />
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-else cols="12">
                <v-card>
                    <v-card-text>
                        <ResizableTextarea
                          v-model="outputTextArea"
                          :rows="6"
                          :initial-font-size="2"
                          :step="1"
                          hide-details
                        />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>