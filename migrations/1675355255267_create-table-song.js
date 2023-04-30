/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('songs', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        title: {
            type: 'VARCHAR(25)',
            notNull: true,
        },
        year: {
            type: 'INT',
            notNull: true,
        },
        performer: {
            type: 'VARCHAR(50)',
            notNull: true,
        },
        genre: {
            type: 'VARCHAR(25)',
            notNull: true,
        },
        duration: {
            type: 'INT',
            notNull: true,
        },
        albumId: {
            type: 'VARCHAR(50)',
            notNull: true,
            references: 'albums',
            referencesConstraintName: 'fk_songs_album',
            onDelete: 'cascade',
        },
    });
};

exports.down = (pgm) => {
    pgm.dropTable('songs');
};
