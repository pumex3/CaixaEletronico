/* eslint-disable prettier/prettier */
import test from 'japa'
import supertest from 'supertest'
const BASE_ULR = `http://${process.env.HOST}:${process.env.PORT}`


test.group('Saque', () => {
  test('Get AllSaques', async (assert) => {   
    const {body} = await (await supertest(BASE_ULR).get('/saques')) 
   assert.exists(body)
  })

  test('Get Saque', async (assert) => {   
    const {body} = await (await supertest(BASE_ULR).get('/saques/:id')) 
   assert.exists(body)
  })

  test('Post Saque', async (assert) => {   
    const {body} = await (await supertest(BASE_ULR).post('/saques/')) 
   assert.exists(body)
  })
})
