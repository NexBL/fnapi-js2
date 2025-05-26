class Stats {
    constructor(apiClient) {
        this.client = apiClient;
    }

    async get(name, accountType, timeWindow, image) {
        if (!this.client.options.apiKey) throw new Error('API key is required for stats');
        if (!name) throw new Error('Name parameter is required');
        if (!accountType) throw new Error('Account type parameter is required');
        if (!timeWindow) throw new Error('Time window parameter is required');

        const requestData = await this.client.request('GET', '/v2/stats/br/v2', null, {
            params: {
                name: name,
                accountType: accountType,
                timeWindow: timeWindow,
                image: image || 'all'
            }
        });

        if (!requestData.isSuccess()) {
            throw new Error(requestData.body().error || 'Failed to fetch stats');
        }

        return requestData.body().data;

    }

    async byId(id, timeWindow, image) {
        if (!this.client.options.apiKey) throw new Error('API key is required for stats');
        if (!id) throw new Error('ID parameter is required');
        if (!timeWindow) throw new Error('Time window parameter is required');

        const requestData = await this.client.request('GET', `/v2/stats/br/v2/${id}`, null, {
            params: {
                timeWindow: timeWindow,
                image: image || 'all'
            }
        });

        if (!requestData.isSuccess()) {
            throw new Error(requestData.body().error || 'Failed to fetch stats');
        }

        return requestData.body().data;

    }
}

export default Stats;
