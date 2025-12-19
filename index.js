require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 5001;
const env = process.env.NODE_ENV || "development";

app.use(express.json({ limit: "10mb" }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "inovavia-api",
    env
  });
});

app.listen(port, () => {
  console.log(`🚀 Inovavia API online na porta ${port} (${env})`);
});
