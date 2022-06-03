require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const productRoutes = require('./src/routes');
const mongoDb = require('./src/config/mongo');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

/*
TODO:
  productRoutes require will take automatically
  the index.js file in src/routes folder.
  index.js adds dynamically routes to the express.Router.
*/
app.use('/api/v1/', productRoutes);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);

  mongoDb();
});
