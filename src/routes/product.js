const express = require('express');
const router = express.Router;

const responsesBuilder = require('../common/response');

router.get('/products', (req, res) => {
  const staticResponse = responsesBuilder.genericResponseBuilder(
    3001,
    responsesBuilder.staticMessage('GET /products')
  );
  res.status(200).send(staticResponse);
});

router.get('/product/:id', (req, res) => {
  const staticResponse = responsesBuilder.genericResponseBuilder(
    3001,
    responsesBuilder.staticMessage('GET /product/:id', `Id ${req.params.id}`)
  );
  res.status(200).send(staticResponse);
});

router.post('/product/', (req, res) => {
  const staticResponse = responsesBuilder.genericResponseBuilder(
    3001,
    responsesBuilder.staticMessage('POST /product', req.body)
  );
  return res.status(200).send(staticResponse);
});

router.put('/product/:id/', (req, res) => {
  const staticResponse = responsesBuilder.genericResponseBuilder(
    3002,
    responsesBuilder.staticMessage('PUT /product', req.body)
  );
  return res.status(200).send(staticResponse);
});

router.delete('/product/:id', (req, res) => {
  const staticResponse = responsesBuilder.genericResponseBuilder(
    3001,
    responsesBuilder.staticMessage('DELETE /product/:id', `Id ${req.params.id}`)
  );
  res.status(200).send(staticResponse);
});

module.exports = router;
