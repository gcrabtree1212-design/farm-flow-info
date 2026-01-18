const express = require("express");
const router = express.Router();
const { getGrainPrices, getBeefPrices, getGoldPrices, getSilverPrices } = require("../services/marketService");
router.get("/grains", async (req, res) => res.json(await getGrainPrices()));
router.get("/beef", async (req, res) => res.json(await getBeefPrices()));
router.get("/gold", async (req, res) => res.json(await getGoldPrices()));
router.get("/silver", async (req, res) => res.json(await getSilverPrices()));
module.exports = router;
