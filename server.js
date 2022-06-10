const express = require('express');
const app =  express();
const PORT = 8000;
const cors = require('cors');
const MongoClient =  require('mongodb').MongoClient;
app.use(cors());

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