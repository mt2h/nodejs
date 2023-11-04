// CRUD create read update delete

//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient
//const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connnetionURL = 'mongodb://127.0.0.1:27017'
const databaseName  = 'task-manager'

//const id = new ObjectID()

MongoClient.connect(connnetionURL, { useNewUrlParser: true }, (error, client) => {

    if(error){
        return console.log('Unable to connect to database')
        }

    //console.log('Connnected correctly!')
    const db = client.db(databaseName)

    /*db.collection('users').insertOne({
        name: 'Andrew',
        age: 27
        }, (error, result) => {
        if(error){
            return console.log('Unable to insert user')
            }
        console.log(result.ops)
        })*/

    /*db.collection('users').insertMany([
        {name: 'Jen',age: 28},
        {name: 'Gunther', age: 27}
        ], (error, result) => {
            if(error){
                return console.log('Unable to insert documents!')
                }
            console.log(result.ops) 
        })*/

    /*db.collection('task').insertMany([
        {description: 'Clean the house', completed: true},
        {description: 'Renew inspection', completed: false}
        ], (error, result) => {
            if(error){
                return console.log('Unable to insert documents!')
                }
            console.log(result.ops) 
        })*/

    /*db.collection('users').insertOne({
        _id: id,
        name: 'Vikram',
        age: 26
        }, (error, result) => {
        if(error){
            return console.log('Unable to insert user')
            }
        console.log(result.ops)
        })*/
    })