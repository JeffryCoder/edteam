const {test, describe, it, mock} = require('node:test')

const assert = require('assert')

const request = require('supertest')

const app = require('../src/app')


describe('Initial test', ()=>{

    it('First text', (t)=>{


        assert.equal(5, 5)
    })



})


describe('Test user routes', ()=>{

    it('should return a 200 status code', async (t)=>{


        const response = await request(app).get('/users')
    
        assert.equal(response.statusCode, 200)
    
    })
    
    
    it('should return an error on users routes', async (t)=>{
    
    
        await it('should return a 404 status code', async (t)=>{
    
    
            const response = await request(app).get('/user/3')
        
            assert.equal(response.statusCode, 404)
        
        })
        await it('should return a 404 status code', async (t)=>{
        
        
            const response = await request(app).get('/user/3')
        
            assert.equal(response.statusCode, 404)
        
        })
        
    })

})




