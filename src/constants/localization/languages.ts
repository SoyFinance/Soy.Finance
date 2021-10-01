import { Language } from "contexts/Localization/types"

export const EN: Language = { locale: 'en-US', language: 'English', code: 'en' }
export const ZHCN: Language = { locale: 'zh-CN', language: '简体中文', code: 'zh-cn' }
export const ZHTW: Language = { locale: 'zh-TW', language: '简体中文', code: 'zh-tw' }

export const languages = {
  'en-US': EN,
  'zh-CN': ZHCN,
  'zh-TW': ZHTW,
}

export const languageList = Object.values(languages)
