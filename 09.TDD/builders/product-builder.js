module.exports.Builder = {
  product: ({
    name = 'my product',
    description = 'product description',
    price = '3',
  } = {}) => ({
    name,
    description,
    price,
  }),
}
