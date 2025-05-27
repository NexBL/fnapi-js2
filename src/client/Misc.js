import RequestFlags from '../enums/requestFlags.js';
import SearchOptions from '../types/SearchOptions.js';

class Misc {
    constructor(apiClient) {
        this.client = apiClient;
    }

    async fixPath(path) {
        return path
            .replace(/^FortniteGame\/Content/, '/Game')
            .replace(/FortniteGame\/Plugins\/GameFeatures\/BRCosmetics\/Content/, '/BRCosmetics')
            .replace(/FortniteGame\/Plugins\/GameFeatures\/CosmeticShoes\/Content/, '/CosmeticShoes')
            .split('/')
            .slice(0, -1)
            .join('/');
    }

}

export default Misc;
