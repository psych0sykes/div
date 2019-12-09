var db = require("../models");

module.exports = function(app) {
  // Get all divs
  app.get("/api/get/div", function(req, res) {
    db.divdivUserdivs.findAll({}).then(function(dbdivdivUserdivs) {
      res.json(dbdivdivUserdivs);
    });
  });

  app.post("/api/post/div", function(req, res) {
    db.divdivUserdivs.findAll({}).then(function(dbdivdivUserdivs) {
      res.json(dbdivdivUserdivs)
    })
  })

};
