const express = require("express");
const router = express.Router();
const { getWeather } = require("../services/weatherService");

/**
 * GET /weather
 * Query params:
 *  - lat: latitude (required)
 *  - lon: longitude (required)
 */
router.get("/", async (req, res) => {
  try {
    const { lat, lon } = req.query;

    if (lat === undefined || lat === '' || lon === undefined || lon === '') {
      return res.status(400).json({ error: "Missing required query parameters: lat and lon" });
    }

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lon);

    if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
      return res.status(400).json({ error: "Invalid lat or lon: must be numbers" });
    }

    const data = await getWeather(latitude, longitude);
    res.json(data);
  } catch (err) {
    console.error("Weather route error:", err, "query:", req.query);
    res.status(500).json({ error: "Weather fetch failed" });
  }
});

module.exports = router;














