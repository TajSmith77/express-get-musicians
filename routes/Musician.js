const { Sequelize, db } = require('../db/connection');
const express = require("express");
const {check, validationResult} = require("express-validator");
const musicianRouter = express.Router();



let Musician = db.define('musician', {
    name: Sequelize.STRING,
    instrument : Sequelize.STRING
});


musicianRouter.get("/", async (request, response) => {    
    let allMusicians = await Musician.findAll();    
    response.json(allMusicians);
})
  
musicianRouter.get("/:id", async (request, response) => {
    const id = request.params.id;
    const musician = await Musician.findByPk(request.params.id);
    response.json(musician);
})
  
musicianRouter.post("/", [check("name").not().isEmpty().trim(), check("instrument").not().isEmpty().trim()], async (req, res, next) => {
    try 
    {
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
        res.json({error: errors.array()})
        }
        else 
        {
            const musician = await Musician.create(req.body);
            if (!musician)
            {
            throw new Error("No musician created");
            }
            let musicians = await Musician.findAll();
            res.json(musicians);
        }
    }
    catch (error) 
    {
        next(error);
    }
})
musicianRouter.put("/:id", async (req, res, next) => {
    try 
    {
        const musician = await Musician.findByPk(req.params.id);
        if (!musician)
        {
            throw new Error('Musician not found');
        }
        const updatedMusician = await musician.update(req.body);
        res.json(updatedMusician);
    }
    catch (error)
    {
        next(error);
    }
})
musicianRouter.delete("/:id", async (req, res, next) => {
        try 
        {
          const musician = await Musician.findByPk(req.params.id);
          if (!musician) 
          {
            throw new Error('Musician not found');
          }
          const deletedMusician = await musician.destroy()
          res.json(deletedMusician);
        } 
        catch (error) 
        {
          next(error)
        }
    })

module.exports = {
    Musician,
    musicianRouter
};