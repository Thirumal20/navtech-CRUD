const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "navtechdb",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Mysql Connected");
});

app.get("/create", (req, res) => {
  let sql = "create database angularDb";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("angular DB Created Successfully");
  });
});

app.get("/createUserTable", (request, response) => {
  let sqlquery =
    "CREATE TABLE userdetails(id int AUTO_INCREMENT, firstname VARCHAR(25), lastname VARCHAR(25), email VARCHAR(50), dob date, address Varchar(250),  city Varchar(25), url Varchar(100),state Varchar(25), zip int(20), occu Varchar(25), intrest Varchar(255), PRIMARY KEY(id))";
  db.query(sqlquery, (error, result) => {
    if (error) throw error;
    else response.send("Table Created Sucessfully");
  });
});

app.post("/adduserDetails", (request, response) => {
  console.log(request.body);
  var data = request.body

  let sqlquery=`insert into userdetails (firstname , lastname , email , dob, address ,  city , url ,state , zip , occu , intrest)
   values('${data.firstname}','${data.lastname}','${data.email}','${data.dob}','${data.address}','${data.city}','${data.url}','${data.state}','${data.zip}','${data.occu}','${data.intrest}')`;
  db.query(sqlquery,(error,result)=>{
      if(error) throw error;
      else response.send(result);
  });
});

app.post("/addorderDetails", (request, response) => {
  console.log(request.body);
  var data = request.body

  let sqlquery=`insert into orders (onumber , oduedate , cname , caddress, phone ,  total )
   values('${data.onumber}','${data.oduedate}','${data.cname}','${data.caddress}','${data.phone}','${data.total}')`;
  db.query(sqlquery,(error,result)=>{
      if(error) throw error;
      else response.send(result);
  });
});

app.post("/register", (request, response) => {
  console.log(request.body);
  var data = request.body

  let sqlquery=`insert into users (username, password )
   values('${data.username}','${data.password}')`;
  db.query(sqlquery,(error,result)=>{
      if(error) throw error;
      else response.send(result);
  });
});


app.post("/login", (request, response) => {
  console.log(request.body);
  var data = request.body

  let sqlquery=`select username, password from users  WHERE username ='${data.username}' and password ='${data.password}' `;
  db.query(sqlquery,(error,result)=>{
      if(error) throw error;
      else response.send(result);
  });
});

app.get("/getUserDetails", (request, response) => {
    // console.log(request.body);
    // var data = request.body
  
    let sqlquery=`select * from userdetails`;
    db.query(sqlquery,(error,result)=>{
        if(error) throw error;
        else response.send(result);
    });
  });

  app.get("/getOrderDetails", (request, response) => {
    // console.log(request.body);
    // var data = request.body
  
    let sqlquery=`select * from orders`;
    db.query(sqlquery,(error,result)=>{
        if(error) throw error;
        else response.send(result);
    });
  });



  app.post('/edituserDetails', (request, response) => {
    console.log(request.body);
  var data = request.body
  // UPDATE table_name
  // SET column1 = value1, column2 = value2, ...
  // WHERE condition;
  

  let sqlquery=`UPDATE  userdetails set firstname ='${data.firstname}'  , lastname ='${data.lastname}' , email ='${data.email}' , dob = '${data.dob}', 
  address = '${data.address}' ,  city = '${data.city}' , url = '${data.url}' ,state ='${data.state}' ,
   zip ='${data.zip}' , occu ='${data.occu}' , intrest ='${data.intrest}' WHERE id ='${data.id}' `;
  db.query(sqlquery,(error,result)=>{
      if(error) throw error;
      else response.send(result);
  });
});


app.post('/editordersDetails', (request, response) => {
  console.log(request.body);
var data = request.body
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;


let sqlquery=`UPDATE  orders set onumber ='${data.onumber}'  , oduedate ='${data.oduedate}' , cname ='${data.cname}' , caddress = '${data.caddress}', 
phone = '${data.phone}' ,  total = '${data.total}'  WHERE id ='${data.id}' `;
db.query(sqlquery,(error,result)=>{
    if(error) throw error;
    else response.send(result);
});
});


app.post('/deleteUserDetails', (request, response) => {
  console.log(request.body);
  var data = request.body

  let sqlquery=` DELETE FROM userdetails WHERE id ='${data.id}'`;
  db.query(sqlquery,(error,result)=>{
      if(error) throw error;
      else response.send(result);
  });
});

app.post('/deleteorderDetails', (request, response) => {
  console.log(request.body);
  var data = request.body

  let sqlquery=` DELETE FROM orders WHERE id ='${data.id}'`;
  db.query(sqlquery,(error,result)=>{
      if(error) throw error;
      else response.send(result);
  });
});


app.listen(PORT, function () {
  console.log("Server is running on port no : " + PORT);
});
