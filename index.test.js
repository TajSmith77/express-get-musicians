// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest");
const { db } = require('./db/connection');
const { Musician } = require('./models/index');
const app = require('./src/app');
const seedMusician = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    test("Testing musicians endpoint", async () => {
        const response = await request(app).get("/musicians");
        const responseData = JSON.parse(response.text);
        expect(response.statusCode).toBe(200);
        expect(responseData[0].name).toBe('Mick Jagger');
        expect(responseData[1].instrument).toBe('Voice');
    }) 
    test("Testing musicians 1 endpoint", async () => {
        const response = await request(app).get("/musicians/1");
        const responseData = JSON.parse(response.text);
        expect(response.statusCode).toBe(200);
        expect(responseData.name).toBe('Mick Jagger');
        expect(responseData.instrument).toBe('Voice');
    }) 
    test("Testing musicians 2 endpoint", async () => {
        const response = await request(app).get("/musicians/2");
        const responseData = JSON.parse(response.text);
        expect(response.statusCode).toBe(200);
        expect(responseData.name).toBe('Drake');
        expect(responseData.instrument).toBe('Voice');
    }) 
    test("Testing musicians 3 endpoint", async () => {
        const response = await request(app).get("/musicians/3");
        const responseData = JSON.parse(response.text);
        expect(response.statusCode).toBe(200);
        expect(responseData.name).toBe('Jimi Hendrix');
        expect(responseData.instrument).toBe('Guitar');
    }) 
    test("Testing bands endpoint", async () => {
        const response = await request(app).get("/bands");
        const responseData = JSON.parse(response.text);
        expect(response.statusCode).toBe(200);
        expect(responseData[0].name).toBe('The Beatles');
        expect(responseData[1].genre).toBe('Pop');
    })  
    test("Testing bands 1 endpoint", async () => {
        const response = await request(app).get("/bands/1");
        const responseData = JSON.parse(response.text);
        expect(response.statusCode).toBe(200);
        expect(responseData.name).toBe('The Beatles');
        expect(responseData.genre).toBe('Rock');
    })  
    test("Testing bands 2 endpoint", async () => {
        const response = await request(app).get("/bands/2");
        const responseData = JSON.parse(response.text);
        expect(response.statusCode).toBe(200);
        expect(responseData.name).toBe('Black Pink');
        expect(responseData.genre).toBe('Pop');
    })  
    test("Testing bands 3 endpoint", async () => {
        const response = await request(app).get("/bands/3");
        const responseData = JSON.parse(response.text);
        expect(response.statusCode).toBe(200);
        expect(responseData.name).toBe('Coldplay');
        expect(responseData.genre).toBe('Rock');
    })  
})