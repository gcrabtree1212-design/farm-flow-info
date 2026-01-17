const express = require("express");
const router = express.Router();
router.get("/search", (req, res) =
  const { query } = req.query;
  res.json({
    query,
    results: [
      { name: "Farm HQ", lat: 35.2, lon: -86.1 },
      { name: "North Field", lat: 35.3, lon: -86.0 }
    ]
  });
});
module.exports = router;
