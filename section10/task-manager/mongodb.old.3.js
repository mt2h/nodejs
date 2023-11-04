// CRUD create read update delete
const { MongoClient, ObjectID } = require('mongodb')

const connnetionURL = 'mongodb://127.0.0.1:27017'
const databaseName  = 'task-manager'

MongoClient.connect(connnetionURL, { useNewUrlParser: true }, (error, client) => {

    if(error){
        return console.log('Unable to connect to database')
        }
        
    const db = client.db(databaseName)

    const updatePromise = db.collection('users').updateOne({
        _id: new ObjectID("654562d0aa8abeef3c4202b0")
        }, {
        /*$set: {
            name: 'Mike'
            }*/
        $inc: {
            age: 1 //-1
            }
        })

    updatePromise
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })

    })