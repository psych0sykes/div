var db = require("../models");

module.exports = function(app) {
  // Get all user divs
  app.get("/api/get/div", function(req, res) {
    db.divdivUserdivs.findAll({}).then(function(dbdivdivUserdivs) {
      res.json(dbdivdivUserdivs);
    });
  });
  // Get login by user and password
  app.get("/api/auth/:user/:password", function(req, res) {
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

};
