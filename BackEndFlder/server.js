const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

// //////////////
app.use(bodyParser.json());
app.use(cors())


// db connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'navtechdb1'
});

db.connect((err)=>{
    if(err)
    console.log("The error is",error);
    else
    console.log("connected to db");
});

app.get('/createdb',(req,res)=>{
    db.query('create database navtechdb1',(err,result)=>{
        if(err)
        console.log("error during db creation",err);
        else
        console.log("dbcreated");
    })
});

// create table
app.get("createTable",(req,res)=>{
    db.query("create table signup_details",(err,result)=>{
        if(err)
        console.log("error during signup_details creation",err);
        else{
            console.log("created signup_details successfully");
        }
    })

})






//PORT
const PORT = 6200;
app.listen(PORT,()=>console.log(`server running on ${PORT}`))

