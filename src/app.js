const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.get("/musicians", async (request, response) => {
    // WRITE YOUR CODE HERE
    
    let allMusicians = await Musician.findAll();    
    response.json(allMusicians);
    })






module.exports = app;