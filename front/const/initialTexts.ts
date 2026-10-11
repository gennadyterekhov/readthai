import { uruvir, lirbantu, burmeseToThai } from './maps'

const URUVIR_INITIAL_TEXT = `Sctaw ase mahaw u gu mahaw ase sctaw.
Ixir ulyar eku taa se la yommar.
Kordan har Foxscan.
Gu har Mascix i Abunààrdan-la.
Gu dinay-dim, lu dim gu dinur.
Yomay Agdaadim kom Ig.
Yomay Drarxev-dim.`

// const BURMESE_TO_THAI_INITIAL_TEXT = `လူတိုင်းသည် တူညီ လွတ်လပ်သော ဂုဏ်သိက္ခာဖြင့် လည်းကောင်း၊ တူညီလွတ်လပ်သော
// အခွင့်အရေးများဖြင့် လည်းကောင်း၊ မွေးဖွားလာသူများ ဖြစ်သည်။ ထိုသူတို့၌ ပိုင်းခြား ဝေဖန်တတ်သော ဉာဏ်နှင့်
//  ကျင့်ဝတ် သိတတ်သော စိတ်တို့ရှိကြ၍ ထိုသူတို့သည် အချင်းချင်း မေတ္တာထား၍ ဆက်ဆံကျင့်သုံးသင့်၏။
// `
const BURMESE_TO_THAI_INITIAL_TEXT = `အာနုထင်း
ဂီတ
ဂါထာ
မေတ္တာ
အမေရိက
လူတိုင်းသည် တူညီ လွတ်လပ်သော ဂုဏ်သိက္ခာဖြင့် လည်းကောင်း၊ တူညီလွတ်လပ်သော
အခွင့်အရေးများဖြင့် လည်းကောင်း၊ မွေးဖွားလာသူများ ဖြစ်သည်။ ထိုသူတို့၌ ပိုင်းခြား ဝေဖန်တတ်သော ဉာဏ်နှင့်
ကျင့်ဝတ် သိတတ်သော စိတ်တို့ရှိကြ၍ ထိုသူတို့သည် အချင်းချင်း မေတ္တာထား၍ ဆက်ဆံကျင့်သုံးသင့်၏။

`


const LIRBANTU_INITIAL_TEXT = `Dwentu Zurrush
Amala Imsar
Shenbar Etelu
khetho ze ruan i ne wakti

ezubu chaka caran dwenta
khetu hisan kampo geré
phaaga an thenu luys e xonshaw

Shaway ruanú i Lipish e genú Azahar . Am
carsay mo zenú Amil. Gén duxan Ézubewún e
Ruun muchomná e ze . Gén ckoran gérexo  zé ak
Oxlába . Charó urushay huluú, epe gén
charó an rozek . Ekmay génu Rux, nú thay gen kámhan i zéu Phat

Shaway ruanu ertepo i Uwina
Zenú Amil am carsay mo Gerexo
Zenú Arel am luysay  epe genú Xordilem
Nu dinay gen charo, epe gen nu dinan charo oxaru Ermil
Dugmolay genú  Ekem epe gen ekman mo e Hul

Shaway luysanu ak gen i Dwenta e Geshex
Gen laran zohan mise ze
Dahmay geu Bemoren kho ge hulo an
Dahmay geu Damir hi thay ge pranan du Buxtuu
Dugmolay genú Ruzen kho gen serxan mo ak Zoglun  mu ze i gerexu Azahar

Shaway ahanu i geu Kalu
Du apagu Kumnonna am carsay ze, khan duxantu Kumnonna hisan carsant
Zeu Thamre am kawray , khu awtepan ezbo gen
Buxtuu am pranay gen, khan gen pranan une
Kawray Dug i geu Lipish i du Kumnonna
`
const LIRBANTU_INITIAL_TEXT_W_CYRILLIC_GUIDES = `имена персонажей:
Dwentu Zurrush
Amala Imsar
Shenbar Etelu
khetho ze ruan i ne wakti

панграмма:
ezubu chaka caran dwenta
khetu hisan kampo geré
phaaga an thenu luys e xonshaw

молитвы

Париму
Shaway ruanú i Lipish e genú Azahar . Am
carsay mo zenú Amil. Gén duxan Ézubewún e
Ruun muchomná e ze . Gén ckoran gérexo  zé ak
Oxlába . Charó urushay huluú, epe gén
charó an rozek . Ekmay génu Rux, nú thay gen kámhan i zéu Phat

Зуррушу
Shaway ruanu ertepo i Uwina
Zenú Amil am carsay mo Gerexo
Zenú Arel am luysay  epe genú Xordilem
Nu dinay gen charo, epe gen nu dinan charo oxaru Ermil
Dugmolay genú  Ekem epe gen ekman mo e Hul

Нам Уш
Shaway luysanu ak gen i Dwenta e Geshex
Gen laran zohan mise ze
Dahmay geu Bemoren kho ge hulo an
Dahmay geu Damir hi thay ge pranan du Buxtuu
Dugmolay genú Ruzen kho gen serxan mo ak Zoglun  mu ze i gerexu Azahar


Умун
Shaway ahanu i geu Kalu
Du apagu Kumnonna am carsay ze, khan duxantu Kumnonna hisan carsant
Zeu Thamre am kawray , khu awtepan ezbo gen
Buxtuu am pranay gen, khan gen pranan une
Kawray Dug i geu Lipish i du Kumnonna
`

export const BURMESE_TO_THAI_PRESET = {
    maps: burmeseToThai,
    defaultMapName: 'burmese_to_thai_map',
    initialText: BURMESE_TO_THAI_INITIAL_TEXT,
}

export const URUVIR_PRESET = {
    maps: uruvir,
    defaultMapName: 'official_to_cyr_map',
    initialText: URUVIR_INITIAL_TEXT,
}

export const LIRBANTU_PRESET = {
    maps: lirbantu,
    defaultMapName: 'official_to_arm_map',
    initialText: LIRBANTU_INITIAL_TEXT,
}