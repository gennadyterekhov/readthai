class Transliterator {
    // for phaaga
    unnecessaryDiacriticsMap = {
        'á': 'a',
        'í': 'i',
        'ú': 'u',
        'é': 'e',
        'ó': 'o',
        'Á': 'a',
        'Í': 'i',
        'Ú': 'u',
        'É': 'e',
        'Ó': 'o',
    }

    static capitalizeFirstLetter(str: string) {
        if (str === '' || str === undefined) return ''
        if (str.length === 1) return str[0].toUpperCase()
        return str[0].toUpperCase() + str.slice(1)
    }

    public transliterate(
      originalText: string,
      characterMap: Object,
      isCaseSensitive: boolean,
      isAllCaps: boolean
    ): string {
        const updated = this.removeUnnecessaryDiacritics(originalText, this.unnecessaryDiacriticsMap)

        let result: string
        if (isCaseSensitive) {
            result = this.transliterateCaseSensitive(updated, characterMap)
        } else if (isAllCaps) {
            result = this.transliterateAllCaps(updated, characterMap)
        } else {
            result = this.transliterateRegular(updated, characterMap)
        }

        const leftSymbols = this.getLeftAddingSymbols(characterMap)
        if (leftSymbols.length > 0) {
            result = this.reorderLeftAddingSymbols(result, leftSymbols)
        }
        return result
    }

    private getLeftAddingSymbols(characterMap: Object): string[] {
        const meta = (characterMap as any)?._meta
        const arr = meta?.left_adding_symbols
        return Array.isArray(arr) ? arr : []
    }

    /**
     * Moves every left-adding symbol to the front of its syllable.
     * A "syllable boundary" here is any character that is not a consonant
     * and not another combining mark. Adjust the consonant test to fit
     * the target script (Thai here).
     */
    private reorderLeftAddingSymbols(text: string, leftSymbols: string[]): string {
        const leftSet = new Set(leftSymbols)
        const chars = Array.from(text)
        const out: string[] = []

        // Thai consonants (base + combining forms that should not be crossed)
        const isThaiConsonant = (ch: string) =>
          /[\u0E01-\u0E2E]/.test(ch)

        // Combining marks that must stay attached to their consonant
        const isThaiMark = (ch: string) =>
          /[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E]/.test(ch)

        for (let i = 0; i < chars.length; i++) {
            const ch = chars[i]

            if (!leftSet.has(ch)) {
                out.push(ch)
                continue
            }

            // We have a left-adding symbol. Insert it as far left as possible
            // without crossing a syllable boundary.
            /// actually no, i just added newer if above and it looks ok for now
            let insertAt = out.length
            while (insertAt > 0) {
                const prev = out[insertAt - 1]
                if (isThaiConsonant(prev) &&  !isThaiMark(prev)) {
                    insertAt-=1;
                    break;
                }
                if (isThaiConsonant(prev) || isThaiMark(prev)) {
                    insertAt--
                } else {
                    break
                }
            }
            out.splice(insertAt, 0, ch)
        }

        return out.join('')
    }

    private removeUnnecessaryDiacritics(originalText: string, characterMap: Object): string {
        let transliteratedText = originalText
        for (const [key, value] of Object.entries(characterMap)) {
            if (key === '_meta') {
                continue
            }
            transliteratedText = transliteratedText.replaceAll(key, value)
        }
        return transliteratedText
    }

    private transliterateRegular(originalText: string, characterMap: Object): string {
        let transliteratedText = originalText.toLowerCase()
        for (const [key, value] of Object.entries(characterMap)) {
            if (key === '_meta') {
                continue
            }
            transliteratedText = transliteratedText.replaceAll(key, value)
        }
        return transliteratedText
    }


    private transliterateAllCaps(originalText: string, characterMap: Object): string {
        let transliteratedText = originalText.toUpperCase()
        for (const [key, value] of Object.entries(characterMap)) {

            if (key === '_meta') {
                continue
            }
            transliteratedText = transliteratedText.replaceAll(key.toUpperCase(), value.toUpperCase())
        }

        return transliteratedText
    }


    private transliterateCaseSensitive(originalText: string, characterMap: Object): string {
        let transliteratedText = originalText

        for (const [key, value] of Object.entries(characterMap)) {

            if (key === '_meta') {
                continue
            }

            let transKey = Transliterator.capitalizeFirstLetter(key)
            let transValue = Transliterator.capitalizeFirstLetter(value)

            transliteratedText = transliteratedText.replaceAll(key, value)
            transliteratedText = transliteratedText.replaceAll(transKey, transValue)
        }

        return transliteratedText
    }
}

export default Transliterator