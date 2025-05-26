import axios from 'axios';
import Response from '../http/Response.js';
import Cosmetics from './Cosmetics.js';
import Aes from './Aes.js'
import CreatorCode from './CreatorCode.js';
import Map from './Map.js';
import News from './News.js';
import Playlists from './Playlists.js';
import Shop from './Shop.js';
import Stats from './Stats.js';
import Banners from './Banners.js';


class ApiClient {
    constructor(config = {}) {
        this.baseUrl = 'https://fortnite-api.com';
        this.options = {
            timeout: 30000,
            headers: {},
            ...config
        };

        if (config.apiKey) {
            this.options.headers['Authorization'] = `${config.apiKey}`;
        }

        this.client = axios.create({
            baseURL: this.baseUrl,
            timeout: this.options.timeout,
            headers: this.options.headers
        });

        this.cosmetics = new Cosmetics(this);
        this.aes = new Aes(this)
        this.sac = new CreatorCode(this);
        this.news = new News(this);
        this.map = new Map(this);
        this.playlists = new Playlists(this);
        this.stats = new Stats(this);
        this.shop = new Shop(this);
        this.banners = new Banners(this);
    }

    async request(method, path, data = null, options = {}) {
        const maxRetries = 3;
        let lastError;

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const response = await this.client.request({
                    method,
                    url: path,
                    data,
                    headers: { ...this.options.headers, ...options.headers },
                    params: { ...this.options.query, ...options.params },
                    timeout: 60000
                });

                return new Response(
                    response.status,
                    response.data,
                    response.headers
                );
            } catch (error) {
                lastError = error;

                if (error.response) {
                    return new Response(
                        error.response.status,
                        error.response.data,
                        error.response.headers
                    );
                }

                if (error.code === 'ECONNRESET' || error.code === 'ETIMEDOUT' || error.code === 'ECONNABORTED') {
                    if (attempt < maxRetries) {
                        console.log(`Request failed (${error.code}). Retrying... (${attempt}/${maxRetries})`);
                        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
                        continue;
                    }
                }

                throw error;
            }
        }

        throw lastError;
    }

    setHeader(key, value) {
        this.options.headers[key] = value;
        this.client.defaults.headers[key] = value;
    }

    getBaseUrl() {
        return this.baseUrl;
    }

    _getTypeValue(item) {
        if (!item.type?.backendValue) return null;

        const typeMapping = {
            'AthenaCharacter': 'outfit',
            'AthenaDance': 'emote',
            'AthenaPickaxe': 'pickaxe',
            'AthenaBackpack': 'backpack'
        };

        return typeMapping[item.type.backendValue] || null;
    }
}

export default ApiClient;
