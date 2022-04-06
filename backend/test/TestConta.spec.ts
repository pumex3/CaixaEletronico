/* eslint-disable prettier/prettier */
import test from 'japa'
import supertest from 'supertest'
const BASE_ULR = `http://${process.env.HOST}:${process.env.PORT}`


test.group('Conta', () => {
  test('Get AllContas', async (assert) => {   
    const {body} = await (await supertest(BASE_ULR).get('/contas')) 
   assert.exists(body)
  })

  test('Get Conta', async (assert) => {   
    const {body} = await (await supertest(BASE_ULR).get('/contas/:id')) 
   assert.exists(body)
  })

  test('Post Conta', async (assert) => {   
    const {body} = await (await supertest(BASE_ULR).post('/contas')) 
   assert.exists(body)
  })

  test('Put Conta', async (assert) => {   
    const {body} = await (await supertest(BASE_ULR).put('/contas/:id')) 
   assert.exists(body)
  })

  test('Delete Conta', async (assert) => {   
    const {body} = await (await supertest(BASE_ULR).delete('/contas/:id')) 
   assert.exists(body)
  })

})
