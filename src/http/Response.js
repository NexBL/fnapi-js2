class Response {
    constructor(status, responseData, headers = {}) {
        this._status = status;
        this._data = responseData;
        this._headers = headers;
        this._timestamp = new Date();
    }

    isSuccess() {
        return this._status >= 200 && this._status < 300;
    }

    isError() {
        return this._status >= 400;
    }

    body() {
        return this._data;
    }

    headers() {
        return this._headers;
    }

    status() {
        return this._status;
    }
}

export default Response;
