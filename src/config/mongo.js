const mongoose = require('mongoose');

const mongoDb = process.env.MONGODB_URL || '';

const dbConnection = () => {
  mongoose.connect(
    mongoDb,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, req) => {
      if (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        return;
      }

      console.log(`Connection established to MongoDB - ${mongoDb}`);
    }
  );
};

module.exports = dbConnection;
