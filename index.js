require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./src/routes/product');

const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL || '';

app.use(cors());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.use('/api/v1/', productRoutes);

mongoose.connect(dbUrl, (err, re) => {
  if (err) throw err;
  console.log(`Connection Established at: ${dbUrl}`);

  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
});
