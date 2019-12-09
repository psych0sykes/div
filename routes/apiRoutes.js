var db = require("../models");

module.exports = function(app) {
  // Get all divs
  app.get("/api/get/div", function(req, res) {
    db.divdivUserdivs.findAll({}).then(function(dbdivdivUserdivs) {
      res.json(dbdivdivUserdivs);
    });
  });

  app.post("/api/post/div", function(req, res) {
    console.log(req.body);
    db.divdivUserdivs.create(req.body).then(function(dbdivdivUserdivs) {
      console.log(dbdivdivUserdivs);
      res.json(dbdivdivUserdivs);
    })
  })

};
