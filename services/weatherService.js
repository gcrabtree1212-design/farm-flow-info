const axios = require("axios");
async function getWeather(lat, lon) {
  const key = process.env.WEATHER_API_KEY;
  const { data } = await axios.get(url);
  return data;
}
async function getRainfall(lat, lon) {
  return { lat, lon, last7Days: [ { day: "Day 1", mm: 5 }, { day: "Day 2", mm: 0 }, { day: "Day 3", mm: 12 } ] };
}
module.exports = { getWeather, getRainfall };
