class Playlists {
    constructor(apiClient) {
        this.client = apiClient;
    }

    async all() {
        const requestData = await this.client.request('GET', '/v1/playlists');

        const data = requestData.body().data;
        if (!requestData.isSuccess()) throw new Error(requestData.body().error);
        return data;
    }

    async byId(id) {
        if(!id) throw new Error("Id is required.")

        const requestData = await this.client.request('GET', `/v1/playlists/${id}`);

        const data = requestData.body().data;
        if (!requestData.isSuccess()) throw new Error(requestData.body().error);
        return data;
    }
}

export default Playlists;
