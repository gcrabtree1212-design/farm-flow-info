const express = require("express");
const router = express.Router();
const { getRainfall } = require("../services/weatherService");
router.get("/", async (req, res) =
  try {
    const { lat, lon } = req.query;
    const data = await getRainfall(lat, lon);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Rainfall fetch failed" });
  }
});
module.exports = router;
