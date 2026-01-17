onst express = require("express");
const router = express.Router();
const { getWeather } = require("../services/weatherService");

// GET /weather
router.get("/", async (req, res) => {
  try {
    const { lat, lon } = req.query;

    // Validate required query parameters
    if (!lat || !lon) {
      return res.status(400).json({
        error: "Missing required query parameters: lat and lon",
        details: { lat, lon }
      });
    }

    // Fetch weather data
    const data = await getWeather(lat, lon);

    // Handle unexpected empty response
    if (!data) {
      return res.status(502).json({
    return res.status(502).json({
        error: "Weather service returned no data",
        details: { lat, lon }
      });
    }

    res.json(data);

  } catch (err) {
    console.error("Weather route error:", {
      message: err.message,
      stack: err.stack,
      route: "/weather"
    });

    res.status(500).json({
      error: "Internal server error while fetching weather",
      message: err.message
    });
  }
});

module.exports = router;








