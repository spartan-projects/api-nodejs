require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

app.use(cors());

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
