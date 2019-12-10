var db = require("../models");

module.exports = function(app) {
  // Get all user divs
  app.get("/api/get/div", function(req, res) {
    db.divdivUserdivs.findAll({
      attributes: ["id","divColor1"]
    }).then(function(dbdivdivUserdivs) {
      res.json(dbdivdivUserdivs);
    });
  });

  // Get login by user and password
  app.get("/api/auth/up/:user/:password", function(req, res) {
    console.log(req.params.user);
    db.divdivUserdivs.findAll({
      attributes: ["id"],
      where: {
        userName: req.params.user,
        password: req.params.password
      }
    }).then(function(dbdivdivUserdivs) {
      console.log(dbdivdivUserdivs);
      res.json(dbdivdivUserdivs);
    });
  });
  // Get user div by ID
  app.get("/api/get/divcolor/:id", function(req, res) {
    console.log(req.params.user);
    db.divdivUserdivs.findAll({
      attributes: ["userName","divColor_1"],
      where: {
        id: req.params.id
      }
    }).then(function(dbdivdivUserdivs) {
      console.log(dbdivdivUserdivs);
      res.json(dbdivdivUserdivs);
    });
  });
  // Get user div by username
  app.get("/api/get/div/:user", function(req, res) {
    console.log(req.params.user);
    db.divdivUserdivs.findAll({
      attributes: ["userName"],
      where: {
        userName: req.params.user
      }
    }).then(function(dbdivdivUserdivs) {
      console.log(dbdivdivUserdivs);
      res.json(dbdivdivUserdivs);
    });
  });
  // Post a new user div
  app.post("/api/post/div", function(req, res) {
    db.divdivUserdivs.create(req.body).then(function(dbdivdivUserdivs) {
      res.json(dbdivdivUserdivs);
    });
  });
  // Post update user div color by id
  app.post("/api/post/divcolor_1/:id", function(req, res) {
    db.divdivUserdivs.update(req.body,
      {
        attributes: ["divColor_1"],
        where: {
          id: req.params.id
        }
      }
      ).then(function(divdivUserdivs) {
      res.json(divdivUserdivs);
    });
  });
};
