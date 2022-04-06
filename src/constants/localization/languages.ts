import { Language } from "contexts/Localization/types"

export const EN: Language = { locale: 'en-US', language: 'English', code: 'en' }
export const ZHCN: Language = { locale: 'zh-CN', language: '简体中文', code: 'zh-cn' }
export const ZHTW: Language = { locale: 'zh-TW', language: '简体中文', code: 'zh-tw' }
export const RU: Language = { locale: 'ru-RU', language: 'Русский', code: 'ru' }
export const UK: Language = { locale: 'uk-UA', language: 'Українська', code: 'uk' }
export const KO: Language = { locale: 'ko-KR', language: '한국어', code: 'ko' }

export const languages = {
  'en-US': EN,
  'zh-CN': ZHCN,
  'zh-TW': ZHTW,
  'ru-RU': RU,
  'uk-UA': UK,
  'ko-KR': KO,
}

export const languageList = Object.values(languages)
