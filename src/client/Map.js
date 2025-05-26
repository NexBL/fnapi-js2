class Map {
    constructor(apiClient) {
        this.client = apiClient;
    }

    async get() {
        const requestData = await this.client.request('GET', '/v1/map');

        if (!requestData.isSuccess()) throw new Error(requestData.body().error);
        const data = requestData.body().data;
        return data;
    }
}

export default Map;
