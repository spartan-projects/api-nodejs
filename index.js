require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL || '';

app.use(cors());

mongoose.connect(dbUrl, (err, re) => {
  if (err) throw err;
  console.log(`Connection Established at: ${dbUrl}`);

  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
});
