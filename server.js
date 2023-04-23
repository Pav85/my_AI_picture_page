const PORT = 8000;
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
