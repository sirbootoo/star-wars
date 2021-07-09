module.exports = app => {
    const movies = require("../controllers/movies.controller.js");
  
    var router = require("express").Router();
  
  
    // Retrieve all Movies
    router.get("/", movies.fetchAllMovies);
  
    // Retrieve a single Movie with id
    router.get("/:id", movies.fetchMovie);
  
    app.use('/api/movies', router);
  };
  