class CreatorCode {
    constructor(apiClient) {
        this.client = apiClient;
    }

    async get(code) {
        if (!code) throw new Error('Code parameter is required');
        
        const requestData = await this.client.request('GET', '/v2/creatorcode', null, {
            params: {
                name: code
            }
        });
        if (!requestData.isSuccess()) throw new Error(requestData.body().error);
        return requestData.body().data;
    }
}

export default CreatorCode;
