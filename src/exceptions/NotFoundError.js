const ClientError = require('./ClientError');

class NotFoundError extends ClientError {
    constructor(messasge) {
        super(messasge, 404);
        this.name = 'NotFoundError';
    }
}

module.exports = NotFoundError;
