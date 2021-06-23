const app = require('../src/app');
const chai = require('chai')
const chaiHttp = require('chai-http')
const request = require('supertest')
const mongoose = require('mongoose')

chai.use(chaiHttp)
chai.should()

const validPlanet = {
    nome: "Alderaan",
    clima: 'Quente',
    terreno: 'Acidentado'
};

const invalidPlanet = {
    nome: "",
    clima: "",
    terreno: ""
}

describe('Planets', () => {
    describe('get /api/planets', () => {
        it ('Deve retornar todos os planetas cadastrados - 200', done => {
            chai.request('http://localhost:3000')
            .get('/api/planets')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
        it ('Deve retornar erro ao criar o planeta', done => {
            chai.request('http://localhost:3000')
            .post('/api/create')
            .send(invalidPlanet)
            .end((err, res) => {
                res.should.have.status(400)
                done()
            })
        });
    });
});