const express = require("express");
const router = express.Router();
let alerts = [];
router.get("/", (req, res) => res.json(alerts));
router.post("/", (req, res) => {
  const alert = { id: Date.now(), ...req.body };
  alerts.push(alert);
  res.status(201).json(alert);
});
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  alerts = alerts.filter(a => a.id !== id);
  res.json({ success: true });
});
module.exports = router;
