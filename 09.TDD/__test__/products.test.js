const request = require('supertest')

const server = require('../index')

const { connect, getUri, closeDb } = require('../db/index')
//IMPORTAMOS FUNCION DE LOS SERVICIOS

const { store } = require('../services/product-service')

//con JEST falseamos el servicio
jest.mock('../services/product-service.js')
//antes, reseteamos el servicio para que no se acumulen las funcionalidades
beforeEach(() => {
  store.mockReset()
})

beforeAll(async () => {
  const uri = await getUri()
  await connect({ uri })
})

afterAll(async () => {
  await closeDb()
})

//CREAR OBJETO CON PROPIEDAD PRODUCT
const { Builder } = require('../builders/product-builder')

//INICIAR LA PRUEBA

describe('POST /products', () => {
  test('should store a new product', async () => {
    const product = Builder.product()

    const response = await request(server)
      .post('/products')
      .send(product)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)

    const { _id, ...productStored } = response.body
    expect(productStored).toEqual(product)
    expect(_id).toBeTruthy()
  })
})
