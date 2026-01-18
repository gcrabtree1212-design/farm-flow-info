const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const weatherRoutes = require("./routes/weather");
const rainfallRoutes = require("./routes/rainfall");
const marketsRoutes = require("./routes/markets");
const alertsRoutes = require("./routes/alerts");
const locationsRoutes = require("./routes/locations");

const app = express();
const PORT = Number(process.env.PORT) || 8080;
const HOST = process.env.HOST || "0.0.0.0";

app.use(cors());
app.use(bodyParser.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/weather", weatherRoutes);
app.use("/rainfall", rainfallRoutes);
app.use("/markets", marketsRoutes);
app.use("/alerts", alertsRoutes);
app.use("/locations", locationsRoutes);

const server = app.listen(PORT, HOST, () => {
  console.log(`running on ${HOST}:${PORT}`);
});

// Graceful logging and exit on errors
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(() => process.exit(1));
});
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  server.close(() => process.exit(1));
});

module.exports = app;
