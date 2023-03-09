//Le pasamos el modelo de base de datos
module.exports = (db) => {
  const movieSchema = new db.Schema(
    {
      title: { type: String, require: true },
      poster: { type: String, required: false },
    },
    {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    }
  );
  return db.model('Movie', movieSchema)
};
