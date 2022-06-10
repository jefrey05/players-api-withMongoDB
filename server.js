const express = require('express');
const app =  express();
const PORT = 8000;
const cors = require('cors');
<<<<<<< HEAD
const MongoClient = require('mongodb').MongoClient;
app.use(cors());
require('dotenv').config()
=======
const MongoClient =  require('mongodb').MongoClient;
app.use(cors());
>>>>>>> 18a40d27f51733742a5b1e1113acaf3ee9fe1290

let db,
   dbConnectionStr = process.env.DB_STRING,
   dbName = 'players-api';

   MongoClient.connect(dbConnectionStr,{useUnifiedTopology: true})
   .then(client=>{
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName)
   })

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get('/',(req,res)=>{
    res.json("hello there")
})


app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})