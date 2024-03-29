// CRUD create read update delete
const { MongoClient, ObjectID } = require('mongodb')

const connnetionURL = 'mongodb://127.0.0.1:27017'
const databaseName  = 'task-manager'

MongoClient.connect(connnetionURL, { useNewUrlParser: true }, (error, client) => {

    if(error){
        return console.log('Unable to connect to database')
        }
        
    const db = client.db(databaseName)

    db.collection('users').deleteMany({
        age: 27
        })
        .then((result) => {
            console.log(result.deletedCount)
            })
        .catch((error) => {
            console.log(error)
            })

    db.collection('task').deleteOne({
        _id: new ObjectID("6545676e50df4602fe82e8bb")
        })
        .then((result) => {
            console.log(result)
            })
        .catch((error) => {
            console.log(error)
            })

    })