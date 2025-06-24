import RequestFlags from '../enums/RequestFlags.js';
import SearchOptions from '../types/SearchOptions.js';

class Cosmetics {
    constructor(apiClient) {
        this.client = apiClient;
    }

    async getAll(flags = RequestFlags.none()) {
        return await this.client.request('GET', '/v2/cosmetics/br', null, {
            params: { 
                ...flags && { responseFlags: flags }
            }
        });
    }

    async getAllNew(flags = RequestFlags.none()) {
        return await this.client.request('GET', '/v2/cosmetics/new', null, {
            params: { 
                ...flags && { responseFlags: flags }
            }
        });
    }

    async getAllTracks(flags = RequestFlags.none()) {
        return await this.client.request('GET', '/v2/cosmetics/tracks', null, {
            params: { 
                ...flags && { responseFlags: flags }
            }
        });
    }

    async getAllInstrument(flags = RequestFlags.none()) {
        return await this.client.request('GET', '/v2/cosmetics/instruments', null, {
            params: { 
                ...flags && { responseFlags: flags }
            }
        });
    }

    async getAllCars(flags = RequestFlags.none()) {
        return await this.client.request('GET', '/v2/cosmetics/cars', null, {
            params: { 
                ...flags && { responseFlags: flags }
            }
        });
    }

    async getAllLego(flags = RequestFlags.none()) {
        return await this.client.request('GET', '/v2/cosmetics/lego', null, {
            params: { 
                ...flags && { responseFlags: flags }
            }
        });
    }

    async getAllLegoKits(flags = RequestFlags.none()) {
        return await this.client.request('GET', '/v2/cosmetics/lego/kits', null, {
            params: { 
                ...flags && { responseFlags: flags }
            }
        });
    }

    async getAllBeans(flags = RequestFlags.none()) {
        return await this.client.request('GET', '/v2/cosmetics/beans', null, {
            params: { 
                ...flags && { responseFlags: flags }
            }
        });
    }

    async getById(cosmeticId, flags = RequestFlags.none()) {
        if (!cosmeticId) throw new Error('Cosmetic ID is required');
        
        return await this.client.request('GET', `/v2/cosmetics/br/${cosmeticId}`, null, {
            params: { 
                ...flags && { responseFlags: flags }
            }
        });
    }

    async search(searchOptions = new SearchOptions(), flags = RequestFlags.none(), searchAll = true) {
        const params = searchOptions.build();
        if (searchAll) {
            return await this.client.request('GET', '/v2/cosmetics/br/search/all', null, {
                params: {
                    ...params,
                    ...flags && { responseFlags: flags }
                }
            });
        } else {
            return await this.client.request('GET', '/v2/cosmetics/br/search', null, {
                params: {
                    ...params,
                    ...flags && { responseFlags: flags }
                }
            });
        }
    }
}

export default Cosmetics;
