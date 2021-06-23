const express = require('express')
const PlanetController = require('../controller/planet.controller')

class PlanetRouter {
    constructor (){
        this.PlanetController = new PlanetController()
        this.router = express.Router()
        this.routesAPI()
    }

    routesAPI(){

        this.router.get('/', (req, res) => {
            res.status(200).json({
                message: "Bem vindo"
            })
        })

        this.router.post('/create', this.PlanetController.createPlanet.bind(this.PlanetController))

        this.router.get('/planets', this.PlanetController.getAllPlanets.bind(this.PlanetController))
        this.router.get('/planet/name/:name', this.PlanetController.getPlanetByName.bind(this.PlanetController))
        this.router.get('/planet/id/:id', this.PlanetController.getPlanetById.bind(this.PlanetController))

        this.router.delete('/planet/delete/id/:id', this.PlanetController.deletePlanetById.bind(this.PlanetController))
    }

}

module.exports = PlanetRouter