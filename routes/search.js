const express = require('express');
const users = express.Router();
const User = require('../models/User');

//function search

users.get("/search", function(req, res)  {
    var toSearch= req.body
    console.log(toSearch)
     Users.find(toSearch,function(err, data)  {
         if(err){
             throw err;
         }
         res.json(data);
     });
 });