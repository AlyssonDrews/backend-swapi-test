const Server = require('../index')
const mongoose = require('mongoose')

class App {
    
    start(){
        
        var url = "mongodb://localhost:27017/planets";
        mongoose.connect(url, {
            useUnifiedTopology: false,
        }).then(() => {
            console.log('Banco de dados conectado!');
        }).catch(err => {
            console.log(`Erro ao se conectar: ${err.message}`);
        });
        
        new Server().start()    
    }
}

new App().start()