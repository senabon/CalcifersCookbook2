require('dotenv').config()
const mongoose = require('mongoose')


const connectionString='mongodb+srv://sendiaz:Missgoober13!@cluster0.idhbj.mongodb.net/ghibli?retryWrites=true&w=majority'
const mongoURI = 
    process.env.DB_URL==='production'
    ?process.env.DB_URL
    :connectionString

mongoose
    .connect(mongoURI)
    .then((instance)=>
        console.log('connected to db'))
        .catch((error)=>console.log(`connection failed!:${error}`))


module.exports =mongoose;