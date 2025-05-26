class SearchOptions {
    constructor() {
        this.params = {};
    }

    setLanguage(lang) { this.params.language = lang; return this; }
    setSearchLanguage(lang) { this.params.searchLanguage = lang; return this; }
    setMatchMethod(method) { this.params.matchMethod = method; return this; }
    setId(id) { this.params.id = id; return this; }
    setName(name) { this.params.name = name; return this; }
    setDescription(desc) { this.params.description = desc; return this; }
    setType(type) { this.params.type = type; return this; }
    setDisplayType(type) { this.params.displayType = type; return this; }
    setBackendType(type) { this.params.backendType = type; return this; }
    setRarity(rarity) { this.params.rarity = rarity; return this; }
    setDisplayRarity(rarity) { this.params.displayRarity = rarity; return this; }
    setBackendRarity(rarity) { this.params.backendRarity = rarity; return this; }
    setHasSeries(has) { this.params.hasSeries = has; return this; }
    setSeries(series) { this.params.series = series; return this; }
    setBackendSeries(series) { this.params.backendSeries = series; return this; }
    setHasSet(has) { this.params.hasSet = has; return this; }
    setSet(set) { this.params.set = set; return this; }
    setSetText(text) { this.params.setText = text; return this; }
    setBackendSet(set) { this.params.backendSet = set; return this; }
    setHasIntroduction(has) { this.params.hasIntroduction = has; return this; }
    setBackendIntroduction(value) { this.params.backendIntroduction = value; return this; }
    setIntroductionChapter(chapter) { this.params.introductionChapter = chapter; return this; }
    setIntroductionSeason(season) { this.params.introductionSeason = season; return this; }
    setHasFeaturedImage(has) { this.params.hasFeaturedImage = has; return this; }
    setHasVariants(has) { this.params.hasVariants = has; return this; }
    setHasGameplayTags(has) { this.params.hasGameplayTags = has; return this; }
    setGameplayTag(tag) { this.params.gameplayTag = tag; return this; }
    setHasMetaTags(has) { this.params.hasMetaTags = has; return this; }
    setMetaTag(tag) { this.params.metaTag = tag; return this; }
    setHasDynamicPakId(has) { this.params.hasDynamicPakId = has; return this; }
    setDynamicPakId(id) { this.params.dynamicPakId = id; return this; }
    setAdded(timestamp) { this.params.added = timestamp; return this; }
    setAddedSince(timestamp) { this.params.addedSince = timestamp; return this; }
    setUnseenFor(duration) { this.params.unseenFor = duration; return this; }
    setLastAppearance(timestamp) { this.params.lastAppearance = timestamp; return this; }

    build() {
        return Object.fromEntries(
            Object.entries(this.params)
                .filter(([_, value]) => value !== undefined)
        );
    }
}

export default SearchOptions;
