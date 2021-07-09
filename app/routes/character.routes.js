module.exports = app => {
    const character = require("../controllers/character.controller.js");

    var router = require("express").Router();


    // Retrieve all character
    router.get("/", character.fetchAllCharacters);

    app.use('/api/characters', router);
};
