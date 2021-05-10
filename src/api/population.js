const express = require("express");
const getPopulationByCountry = require("./helpers/getPopulationByCountry");
const router = express.Router();

router.get("/by-country", async (req, res) => {
  try {
    const data = await getPopulationByCountry();
    return res.json(data);
  } catch (err) {
    next(err);
  }
  return res.json(data);
});

module.exports = router;
