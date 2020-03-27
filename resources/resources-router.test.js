const server = require('../api/server.js');
const request = require('supertest');
const db = require('../data/dbConfig')

it("tests run", function() {
    expect(true).toBe(true);
});

describe('resources', ()=>{
    describe('GET /resources', ()=>{
        it('return resources array when hitting endpoint', ()=>{
            return request(server).get('/resources')
                .then(res=>{
                    expect(Array.isArray(res.body)).toBe(true)
                })
            })
            it("should return json", function () {
                return request(server)
                    .get("/resources")
                    .then(response => {
                        expect(response.type).toMatch(/json/i);
                    })
            })

        it('should return a 200', ()=>{
            return request(server).get('/resources')
                .then(res=>{
                    expect(res.status).toBe(200)
                })
            })
        })
        describe("POST /resources", function () {
            it("should return a 201 status code", function () {
                return request(server)
                    .post("/resources")
                    .send({ name: "gold orew", quantity: 1})
                    .then(response => {
                        expect(response.status).toBe(201);
                    })
            })
        });
    })