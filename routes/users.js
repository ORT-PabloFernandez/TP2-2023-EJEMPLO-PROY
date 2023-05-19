var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("aca deberia ir un listado de usuarios");
});

module.exports = router;
