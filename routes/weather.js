Name	Last commit message	Last commit date
..
alerts.js
Add files via upload
15 hours ago
locations.js
Add files via upload
15 hours ago
markets.js
Add files via upload
15 hours ago
rainfall.js
Add files via upload
15 hours ago
weather.js
Refactor weather route for cleaner structure
6 minutes ago

const express = require("express");
const router = express.Router();
const { getWeather } = require("../services/weatherService");

// GET /weather
router.get("/", async (req, res) => {
  try {
    const { lat, lon } = req.query;

    const data = await getWeather(lat, lon);
    res.json(data);

  } catch (err) {
    console.error("Weather route error:", err);
    res.status(500).json({ error: "Weather fetch failed" });
  }
});

module.exports = router;














