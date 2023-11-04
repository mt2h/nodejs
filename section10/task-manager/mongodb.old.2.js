// CRUD create read update delete
const { MongoClient, ObjectID } = require('mongodb')

const connnetionURL = 'mongodb://127.0.0.1:27017'
const databaseName  = 'task-manager'

MongoClient.connect(connnetionURL, { useNewUrlParser: true }, (error, client) => {

    if(error){
        return console.log('Unable to connect to database')
        }
        
    const db = client.db(databaseName)

    //db.collection('users').findOne({name: 'Jen'}, (error, user) => {
    //db.collection('users').findOne({name: 'Jen', age: 1}, (error, user) => {        
    /*db.collection('users').findOne({_id: ObjectID('653c6f0a20f66edc50af843b')}, (error, user) => {
        if(error){
            return console.log('Unable to fetch')
            }
        console.log(user)
        })*/

    /*db.collection('users').find({age: 27}).toArray((error, users) => {
        console.log(users)
        })

    db.collection('users').find({age: 27}).count((error, count) => {
        console.log(count)
        })*/

    db.collection('task').findOne({_id: ObjectID("6545676e50df4602fe82e8bb")}, (error, task) => {
        console.log(task)
        })

    db.collection('task').find({completed: false}).toArray((error, tasks) => {
        console.log(tasks)
        })

    })