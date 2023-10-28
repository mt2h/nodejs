// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connnetionURL = 'mongodb://127.0.0.1:27017'
const databaseName  = 'task-manager'

MongoClient.connect(connnetionURL, { useNewUrlParser: true }, (error, client) => {

    if(error){
        return console.log('Unable to connect to database')
        }

    //console.log('Connnected correctly!')
    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'Andrew',
        age: 27
        })

    })