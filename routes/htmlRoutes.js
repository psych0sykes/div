var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index");
    });

  app.get("/auth/signin", function(req, res) {
    res.render("logIn");
  });

  app.get("/yourdiv", function(req, res) {
    res.render("yourdiv");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
