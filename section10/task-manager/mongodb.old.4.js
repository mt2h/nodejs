// CRUD create read update delete
const { MongoClient, ObjectID } = require('mongodb')

const connnetionURL = 'mongodb://127.0.0.1:27017'
const databaseName  = 'task-manager'

MongoClient.connect(connnetionURL, { useNewUrlParser: true }, (error, client) => {

    if(error){
        return console.log('Unable to connect to database')
        }
        
    const db = client.db(databaseName)

    db.collection('task').updateMany({
        completed: false
        }, {
            $set: {
                completed: true
            }
        })
        .then((result) => {
            console.log(result.modifiedCount)
            })
        .catch((error) => {
            console.log(error)
            })

    })