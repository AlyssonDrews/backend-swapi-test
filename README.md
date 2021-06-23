<h1 align="center">
Backend SWAPI Test!
</h1>

## Cenário:

Uma API REST desenvolvida para conter dados de planetas do universo Star Wars. As informações são obtidas direto da [SWAPI](https://swapi.dev), a API oficial da saga.

## Tecnologias utilizadas:

-  Node.Js
-  Npm
-  Express
-  Mocha
-  Chai
-  MongoDb/Mongoose
-  Axios
-  Supertest

## Instalação
  Inicialmente o projeto já deve ter sido clonado em sua maquina:
  
    $ git clone https://github.com/AlyssonDrews/backend-swapi-test
   
  Após isso, deve ser executado o seguinte comando para que os pacotes sejam instalados:
   
    $ npm install 
    
## Execução da API: 

  Para executar a API, execute os seguintes comandos no seu terminal:
 
    $ cd src
    $ node app.js
   
   *IMPORTANTE* -- O banco de dados (MongoDb) sera executado por padrão na porta localhost:27017, certifique-se de que essa porta esteja disponível.

## CURL's:

  O projeto tem as seguintes Endpoints e seus respectivos Curls:
  
  #### Criar um novo planeta
  * POST /api/create
  
  ````
  curl --location --request POST 'http://localhost:3000/api/create/' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "nome": "Alderaan",
    "clima": "Quente",
    "terreno": "Acidentado"
}'
````
  #### Buscar todos os planetas
  * GET /api/planets
  
  ```
   curl --location --request GET 'http://localhost:3000/api/planets'
  ```
  #### Buscar planeta pelo nome
  * GET /api/planet/name/:name
  
  ```
   curl --location --request GET 'http://localhost:3000/api/planet/name/:name'
  ```
  #### Buscar planeta pelo Id
  * GET /api/planet/id/:id
  
  ```
   curl --location --request GET 'http://localhost:3000/api/planet/id/:id'
  ```
  #### Deletar planeta pelo Id
  * DELETE /api/planet/delete/id/:id
  
  ```
   curl --location --request DELETE 'http://localhost:3000/api/planet/delete/id/:id'
  ```
  
## Testes:

O Projeto conta com testes de integração, execute os seguinte comandos no terminal

    $ cd src
    $ npm test
 
