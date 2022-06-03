const express = require('express');
const router = new express.Router();

const responsesBuilder = require('../common/response');

router.get('/', (req, res) => {
  const staticResponse = responsesBuilder.genericResponseBuilder(
    3001,
    responsesBuilder.staticMessage('GET /products')
  );
  res.status(200).send(staticResponse);
});

router.get('/:id', (req, res) => {
  const staticResponse = responsesBuilder.genericResponseBuilder(
    3001,
    responsesBuilder.staticMessage('GET /product/:id', `Id ${req.params.id}`)
  );
  res.status(200).send(staticResponse);
});

router.post('/', (req, res) => {
  const staticResponse = responsesBuilder.genericResponseBuilder(
    3001,
    responsesBuilder.staticMessage('POST /product', req.body)
  );
  return res.status(200).send(staticResponse);
});

router.put('/:id', (req, res) => {
  const staticResponse = responsesBuilder.genericResponseBuilder(
    3002,
    responsesBuilder.staticMessage('PUT /product', req.body)
  );
  return res.status(200).send(staticResponse);
});

router.delete('/:id', (req, res) => {
  const staticResponse = responsesBuilder.genericResponseBuilder(
    3001,
    responsesBuilder.staticMessage('DELETE /product/:id', `Id ${req.params.id}`)
  );
  res.status(200).send(staticResponse);
});

module.exports = router;
