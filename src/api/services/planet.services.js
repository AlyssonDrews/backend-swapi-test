const planetModel = require('../model/planets');
const swapiService = require('./swapi.services');
const PlanetRepository = require('../repositories/planet.repository');
const Planet = require('../model/planets')

class PlanetService {
    constructor(){
        this.planetRepository = new PlanetRepository()
        this.swapiService = new swapiService()
        this.planetModel =  planetModel
    }

    async createPlanet(name, climate, terrain, response){
        const searchPlanetApi = await this.swapiService.getPlanet(name)
        const planetAperances = searchPlanetApi.results[0].films.length
        const planetModel = new Planet({nome: name, clima: climate, terreno: terrain, aparicoesFilme: planetAperances })
        this.planetRepository.createPlanet(planetModel, response)
        
        return planetModel
    }

    async getAllPlanets(){
        return this.planetRepository.getAllPlanets();
    }

    async getPlanetByName(req){
        return this.planetRepository.getPlanetByName(req)
    }

    async getPlanetById(req){
        return this.planetRepository.getPlanetById(req)
    }

    async deletePlanetById(req){
        return this.planetRepository.deletePlanetById(req)
    }
}


module.exports = PlanetService