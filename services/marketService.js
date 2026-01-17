async function getGrainPrices() { return { symbol: "CORN", price: 4.85, unit: "USD/bu" }; }
async function getBeefPrices() { return { symbol: "BEEF", price: 1.92, unit: "USD/lb" }; }
async function getGoldPrices() { return { symbol: "GOLD", price: 2350, unit: "USD/oz" }; }
async function getSilverPrices() { return { symbol: "SILVER", price: 28.5, unit: "USD/oz" }; }
module.exports = { getGrainPrices, getBeefPrices, getGoldPrices, getSilverPrices };
