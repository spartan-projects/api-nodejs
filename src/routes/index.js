const express = require('express');
const fs = require('fs');
const utils = require('../utils/utils');

const router = new express.Router();

const CURRENT_DIR = __dirname;

const loadRouter = () => {
  fs.readdirSync(CURRENT_DIR).filter((file) => {
    const name = utils.removeExtension(file);
    if (name !== 'index') {
      console.log(`Loding routes: ${name}`);
      router.use(`/${name}`, require(`./${file}`));
    }
  });
};

loadRouter();

module.exports = router;
