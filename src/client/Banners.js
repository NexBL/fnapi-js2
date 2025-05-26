class Banners {
    constructor(apiClient) {
        this.client = apiClient;
    }

    async get() {
        const requestData = await this.client.request('GET', '/v1/banners');

        if (!requestData.isSuccess()) throw new Error(requestData.body().error);
        const data = requestData.body().data;
        return data;
    }

    async getColors() {
        const requestData = await this.client.request('GET', '/v1/banners/colors');

        if (!requestData.isSuccess()) throw new Error(requestData.body().error);
        const data = requestData.body().data;
        return data;
    }
}

export default Banners;
