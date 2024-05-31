const { Sequelize, db } = require('../db/connection');
const express = require("express");
const bandRouter = express.Router();



let Band = db.define('band', {
    name: Sequelize.STRING,
    genre: Sequelize.STRING
});


bandRouter.get("/", async (request, response) => {    
    let allBands = await Band.findAll( );    
    response.json(allBands);
})
  
bandRouter.get("/:id", async (request, response) => {
    const id = request.params.id;
    const band = await Band.findByPk(id);
    response.json(band);
})
  
bandRouter.post("/", async (req, res, next) => {
    try 
    {
        const band = await Band.create(req.body);
        if (!band)
        {
          throw new Error("No band created");
        }
        res.send(`New band named ${band.name} who plays ${band.instrument} has been created`);
    } 
    catch (error) 
    {
        next(error);
    }
})
bandRouter.put("/:id", async (req, res, next) => {
    try 
    {
        const band = await Band.findByPk(req.params.id);
        if (!band)
        {
            throw new Error('Band not found');
        }
        const updatedBand = await band.update(req.body);
        res.json(updatedBand);
    }
    catch (error)
    {
        next(error);
    }
})
bandRouter.delete("/:id", async (req, res, next) => {
        try 
        {
          const band = await Band.findByPk(req.params.id);
          if (!band) 
          {
            throw new Error('Band not found');
          }
          const deletedBand = await band.destroy()
          res.json(deletedBand);
        } 
        catch (error) 
        {
          next(error)
        }
    })

module.exports = {
    Band,
    bandRouter,
};