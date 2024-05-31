const express = require("express");
const app = express();
const { Band, bandRouter } = require("../routes/Band")
const {Musician, musicianRouter} = require("../routes/Musician")
const { db } = require("../db/connection")

const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use("/musicians", musicianRouter);
app.use("/bands", bandRouter);


module.exports = app;