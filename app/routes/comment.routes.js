module.exports = app => {
    const comment = require("../controllers/comment.controller.js");
  
    var router = require("express").Router();

    //Create comment
    router.post("/", comment.create);
  
    app.use('/api/comments', router);
};
  