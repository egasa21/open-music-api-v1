const songMapDBToModel = ({
    id,
    title,
    year,
    genre,
    performer,
    duration,
    albumId,
    created_at,
    updated_at,
}) => ({
    id,
    title,
    year,
    genre,
    performer,
    duration,
    albumId,
    created_at: created_at,
    updated_at: updated_at,
});

module.exports = songMapDBToModel;
