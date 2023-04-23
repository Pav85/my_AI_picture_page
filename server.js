const PORT = 8000;
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
require("dotenv").config();

app.post("/images", () => {
    const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImageEdit(
  fs.createReadStream("otter.png"),
  fs.createReadStream("mask.png"),
  "A cute baby sea otter wearing a beret",
  2,
  "1024x1024"
);

});

app.listen(PORT, () => console.log("Your server is running on PORT " + PORT));
