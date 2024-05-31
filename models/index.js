const {Band, bandRouter} = require('../routes/Band')
const {Musician, musicianRouter} = require('../routes/Musician')

Band.hasMany(Musician)
Musician.belongsTo(Band)


module.exports = {
    Band,
    Musician,
    bandRouter,
    musicianRouter
};
