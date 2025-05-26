class Shop {
    constructor(apiClient) {
        this.client = apiClient;
    }

    async get() {
        const requestData = await this.client.request('GET', '/v2/shop');

        const data = requestData.body().data;

        if (!requestData.isSuccess()) throw new Error(requestData.body().error);
        return data;

    }
}

export default Shop;
