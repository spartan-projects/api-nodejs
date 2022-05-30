const genericResponseBuilder = (code, message = 'undefined message') => {
  const response = {
    api_response: {
      message: message,
      status_code: code,
    },
  };

  return response;
};

const staticMessage = (type, message = 'no message to display') => {
  const static = {
    type: type,
    result: message,
  };

  return static;
};

module.exports = {
  genericResponseBuilder,
  staticMessage,
};
