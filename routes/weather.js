const express = require("express");
const router = express.Router();
const { getWeather } = require("../services/weatherService");
router.get("/", async (req, res) =
  try {
    const { lat, lon } = req.query;
    const data = await getWeather(lat, lon);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Weather fetch failed" });
  }
});
module.exports = router;
