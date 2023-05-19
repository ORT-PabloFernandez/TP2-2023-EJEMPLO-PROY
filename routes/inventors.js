const express = require("express");
const router = express.Router();
const inventordb = require("../data/inventors");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const inventors = await inventordb.getInventors();
  res.json(inventors);
});

router.get("/:id", async (req, res) => {
  const inventor = await inventordb.getInventor(req.params.id);
  res.json(inventor);
});

router.post("/", async (req, res) => {
  const inventor = req.body;
  const result = await inventordb.addInventor(inventor);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const inventor = req.body;
  inventor._id = id;
  const result = await inventordb.updateInventor(inventor);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await inventordb.deleteInventor(id);
  res.json(result);
});

module.exports = router;
