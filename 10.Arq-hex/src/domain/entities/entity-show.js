module.exports = (db) => {
  const showSchema = new db.Schema(
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
  return db.model('Show', showSchema);
};
