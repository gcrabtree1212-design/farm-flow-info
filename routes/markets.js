const express = require("express");
const router = express.Router();
const { getGrainPrices, getBeefPrices, getGoldPrices, getSilverPrices } = require("../services/marketService");
router.get("/grains", async (req, res) = getGrainPrices()));
router.get("/beef", async (req, res) = getBeefPrices()));
router.get("/gold", async (req, res) = getGoldPrices()));
router.get("/silver", async (req, res) = getSilverPrices()));
module.exports = router;
