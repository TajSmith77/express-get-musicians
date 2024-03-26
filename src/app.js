const express = require("express");
const app = express();
const { Musician, Band } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

app.get("/musicians", async (request, response) => {    
    let allMusicians = await Musician.findAll();    
    response.json(allMusicians);
    })
app.get("/musicians/1", async (request, response) => {        
    let allMusicians = await Musician.findAll();
    let thisMusician = allMusicians[0];    
    response.json(thisMusician);
    })
app.get("/musicians/2", async (request, response) => {            
    let allMusicians = await Musician.findAll();
    let thisMusician = allMusicians[1];    
    response.json(thisMusician);
    })
app.get("/musicians/3", async (request, response) => {                
    let allMusicians = await Musician.findAll();
    let thisMusician = allMusicians[2];    
    response.json(thisMusician);
    })

app.get("/bands", async (request, response) => {        
    let allBands = await Band.findAll();    
    response.json(allBands);
    })
app.get("/bands/1", async (request, response) => {        
    let allBands = await Band.findAll();   
    let thisBand = allBands[0]; 
    response.json(thisBand);
    })
app.get("/bands/2", async (request, response) => {        
    let allBands = await Band.findAll();   
    let thisBand = allBands[1]; 
    response.json(thisBand);
    })
app.get("/bands/3", async (request, response) => {        
    let allBands = await Band.findAll();   
    let thisBand = allBands[2]; 
    response.json(thisBand);
    })
module.exports = app;