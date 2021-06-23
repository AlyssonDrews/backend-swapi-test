const PlanetService = require('../services/planet.services')

class PlanetController {
    constructor(){
        this.planetService = new PlanetService()
    }
    
    async create(req, res) {
        const { nome, clima, terreno} = req.body
        
        //TO DO: tratamento de erro quando não é enviado todos os parametros
        const response = await this.planetService.createPlanet(nome, clima, terreno, res)
        if(response){
            return res.status(201).json({message: "Planeta criado com sucesso!", response: response})
        } else {
            return res.status(400).json({message: "Planeta já se encontra na base de dados..."})
        }

    }

    async getAllPlanets(req, res){
        const response = await this.planetService.getAllPlanets()
        
        if(response.length > 0){
            return res.status(200).json(response)
        } else {
            return res.status(404).json({ message: "Nenhum planeta encontrado..."})
        }
    }

    async getPlanetByName(req, res){
        const { name } = req.params
        const response = await this.planetService.getPlanetByName(name)
        if(response.length == 1){
            return res.status(200).json(response)
        } else if (response.length == 0){
            return res.status(404).json({ message: "Planeta não encontrado na base de dados..."})
        } else {
            return res.status(500).json({ message: "Erro interno no servidor..."})
        }
        
    }

    async getPlanetById(req, res){
        const { id } = req.params
        try {
            const response = await this.planetService.getPlanetById(id)
            if(response.length == 1){
                return res.status(200).json(response)
            } else{
                return res.status(404).json({ message: "Id não encontrado na base de dados..."})
            }
        }
        catch(err){
            return res.status(500).json({ message: "Não foi possível encontrar o planeta", erro: err.message})
        }
        
    }
    
    async deletePlanetById(req, res){
        const { id } = req.params
        try{
            const response = await this.planetService.deletePlanetById(id)
            if(response.deletedCount){
                return res.status(200).send({ message: "Alvo destruído...", response: response})
            } else{
                return res.status(404).json({ message: "Id não encontrado na base de dados..."})
            }
        }
        catch(err) {
            return res.status(500).json({ message: "Id do planeta inválido, nenhum planeta foi deletado...", erro: err.message})
        }
    }
}

module.exports = PlanetController