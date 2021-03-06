const songs = ({
    id,
    title,
    year,
    performer,
    genre,
    duration,
    created_at,
    updated_at,
}) => ({
    id,
    title,
    year,
    performer,
    genre,
    duration,
    createdAt: created_at,
    updatedAt: updated_at,
});

module.exports = { songs };
