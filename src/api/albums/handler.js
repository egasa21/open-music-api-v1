import ClientError from '../../exceptions/ClientError';

class AlbumsHandler {
    constructor(service, validator) {
        this._service = service;
        this._validator = validator;
    }

    async postAlbumHandler(request, h) {
        try {
            this._validator.validateAlbumPayload(request.payload);
            const { name, year } = request.payload;

            const albumId = await this._service.addAlbum({ name, year });
            const response = h.response({
                status: 'success',
                message: 'Album berhasil ditambahkan',
                data: {
                    albumId,
                },
            });
            response.code(201);
            return response;
        } catch (err) {
            if (err instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: err.message,
                });
                response.code(err.statusCode);
                return response;
            }
            const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada sisi server kami.',
            });
            response.code(500);
            console.log(err);
            return response;
        }
    }
}

export default AlbumsHandler;
