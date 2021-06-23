const planetModel = require('../model/planets')

class PlanetRepository {
    constructor(){
        this.planetModel = planetModel;
    }

    async createPlanet(request){
        return this.planetModel.create(request);
    }

    async getAllPlanets(){
        const findQuery = this.planetModel.find();
        const findPlantes = findQuery.exec();
        return findPlantes;
    }

    async getPlanetByName(request){
        const planetName = request;
        const findQuery = this.planetModel.find({"nome": {$regex: '^' + planetName}});
        const findPlanet = findQuery.exec();
        return findPlanet;
    }

    async getPlanetById(request){
        const planetId = request;
        const findQuery = this.planetModel.find({_id: planetId});
        const findPlanet = findQuery.exec();
        return  findPlanet;
    }

    async deletePlanetById(request){
        const planetId = request;
        const deleteQuery = this.planetModel.deleteOne({_id : planetId});
        const deletedPlanet = deleteQuery.exec();
        return deletedPlanet;
    }

}

module.exports = PlanetRepository