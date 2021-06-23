const PlanetService = require('../services/planet.services')

class PlanetController {
    constructor(){
        this.planetService = new PlanetService()
    }
    
    async create(req, res) {
        const { nome, clima, terreno} = req.body

        const response = await this.planetService.createPlanet(nome, clima, terreno, res)

        return res.status(201).json({response: response})
    }
    
    async getAllPlanets(req, res){
        const response = await this.planetService.getAllPlanets()

        if(response.length > 0){
            return res.status(200).json(response)
        } else {
            return res.status(404).json({ message: "Nenhum planeta encontrado"})
        }
    }

    async getPlanetByName(req, res){
        const { name } = req.params
        const response = await this.planetService.getPlanetByName(name)

        return res.status(200).json(response)
        
    }

    async getPlanetById(req, res){
        const { id } = req.params
        const response = await this.planetService.getPlanetById(id)

        return res.status(200).json(response)
    }
    
    async deletePlanetById(req, res){
        const { id } = req.params
        const response = await this.planetService.deletePlanetById(id)

        return res.status(200).send()
    }
}

module.exports = PlanetController