class Language {
    static LANGS = {
        "arabic": "ar",
        "german": "de",
        "english": "en",
        "spanish": "es",
        "spanishLatinAmerica": "es-419",
        "french": "fr",
        "indonesian": "id",
        "italian": "it",
        "japanese": "ja",
        "korean": "ko",
        "polish": "pl",
        "portugueseBrazil": "pt-BR",
        "russian": "ru",
        "thai": "th",
        "turkish": "tr",
        "vietnamese": "vi",
        "chineseSimplified": "zh-Hans",
        "chineseTraditional": "zh-Hant"
    }

    static arabic() { return this.LANGS.arabic }
    static german() { return this.LANGS.german }
    static english() { return this.LANGS.english }
    static spanish() { return this.LANGS.spanish }
    static spanishLatinAmerica() { return this.LANGS.spanishLatinAmerica }
    static french() { return this.LANGS.french }
    static indonesian() { return this.LANGS.indonesian }
    static italian() { return this.LANGS.italian }
    static japanese() { return this.LANGS.japanese }
    static korean() { return this.LANGS.korean }
    static polish() { return this.LANGS.polish }
    static portugueseBrazil() { return this.LANGS.portugueseBrazil }
    static russian() { return this.LANGS.russian }
    static thai() { return this.LANGS.thai }
    static turkish() { return this.LANGS.turkish }
    static vietnamese() { return this.LANGS.vietnamese }
    static chineseSimplified() { return this.LANGS.chineseSimplified }
    static chineseTraditional() { return this.LANGS.chineseTraditional }

    static getAll() {
        return Object.values(this.LANGS);
    }

    static isValid(lang) {
        if (Object.values(this.LANGS).includes(lang)) {
            return true;
        }

        if (Object.keys(this.LANGS).includes(lang)) {
            return true;
        }
        return false;
    }
}

export default Language;
