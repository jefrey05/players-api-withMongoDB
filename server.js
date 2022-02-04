const express = require('express');
const app =  express();
const PORT = 8000;
const cors = require('cors');
const { response } = require('express');
const MongoClient = require('mongodb').MongoClient;
app.use(cors());
require('dotenv').config()

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
    db.collection('players').find().toArray()
    .then(data=>{
      res.render('index.ejs',{info: data})
    })
    .catch(error=>console.error(error))
})

app.post('/addPlayer',(req,res)=>{
    //console.log(req.body)
    db.collection('players').insertOne({name: req.body.playerName,nationality:req.body.playerNationality})
    .then(result=>{
        console.log('Player Added');
        res.redirect('/')
    })
    .catch(error=>console.error(error))
})


app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})