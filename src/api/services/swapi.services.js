const axios = require('axios')

class swapiService {

    async getPlanet(name){
            const response = await axios.get('https://swapi.dev/api/planets/?search=' + name)
            if(response.status == 200) {
                    return response.data
            }
    }
}

module.exports = swapiService