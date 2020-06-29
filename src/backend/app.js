const express = require('express');
const app = express();
const port = 3001;
const getUsers = require("./users");
const Person = require("../Person");
const person1 = new Person('Jon', 30);

// Connection MongoDB with app.js

//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb+srv://workshop:workshopVV@cluster0-6t1cr.mongodb.net/workshop?retryWrites=true&w=majority";

//MongoClient.connect(url, function(err, db) {
  //if (err) throw err;
  //var dbo = db.db("workshop");
  //dbo.collection("users").find({}).toArray(function(err, documents) {
    //if (err) throw err;
    //console.log(documents);
    //db.close();
  //});
//});
 

app.get('/rest/users', (req, res) => res.send(getUsers()));
app.listen(port, () => console.log(`Yes server is running`));
person1.greeting();
