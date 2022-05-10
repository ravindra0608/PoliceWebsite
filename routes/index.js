const express = require("express");
const router = express.Router();
const Criminal = require("../models/criminal");

//Rendering the criminals list page where data entered in the post criminals list is entered
router.get("/criminalslist", function (req, res) {
  Criminal.find({}, function (err, criminalsList) {
    res.render("criminalslist", { criminalsList: criminalsList });
  });
});

// exporting the router file
module.exports = router;
