const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const baseUrl = "https://api.giphy.com/v1/gifs/search";
const limit = process.env.BACKEND_REQUEST_LIMIT || 10;
const apiKey = process.env.BACKEND_API_KEY;
const port = 8000;

app.get("/:category", (req, res) => {
  const category = req.params.category;
  const completeUrl = `${baseUrl}?api_key=${apiKey}&q=${category}&limit=${limit}`;
  axios
    .get(completeUrl)
    .then(({ data: { data } }) => res.json(data))
    .catch(console.error);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
