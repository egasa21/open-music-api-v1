import { Server } from '@hapi/hapi';
// import Hapi from '@hapi/hapi';
import dotenv from 'dotenv';
import albums from './api/albums/index';
import AlbumsService from './services/postgres/AlbumsService';
import AlbumsValidator from './validator';

dotenv.config();

const server = new Server();
const albumService = new AlbumsService();

server.connection({ port: process.env.PORT });
server.route({
    cors: {
        origin: ['*'],
    },
});
server.register({
    plugin: albums,
    options: {
        service: albumService,
        validator: AlbumsValidator,
    },
});

server.start(() => console.log(`Server berjalan pada ${server.info.uri}`));
