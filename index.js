const express = require('express')
const PlanetRouter = require('./src/api/routes/routes')

class Server {
    
    constructor(){
        this.app = express()
        this.planetRouter = new PlanetRouter()
    }
    
    start(){
        
        this.app.use(express.json())

        this.app.use('/api', this.planetRouter.router)
        
        this.app.listen(3000, () => {
            console.log('Conectado na porta 3000')
        })
    }
    
}

module.exports = Server