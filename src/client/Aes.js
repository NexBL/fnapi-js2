class Aes {
    constructor(apiClient) {
        this.client = apiClient;
    }

    async get() {
        const requestData = await this.client.request('GET', '/v2/aes');

        const data = requestData.body().data;
        const build = data.build.replace(/\\u002B/g, '+').replace(/\\u002F/g, '/');
        const mainKey = data.mainKey;
        const dynamicKeys = data.dynamicKeys;

        return {
            build: build,
            mainKey: mainKey,
            dynamicKeys: dynamicKeys
        }

    }
}

export default Aes;
