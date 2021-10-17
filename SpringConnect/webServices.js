import axios from 'axios';

var headers = {
  'Content-Type': 'application/json',
};

const sendConsumption = params => {
  headers = {
    'Content-Type': 'application/json',
  };

  return axios.post(
    'localhost:150/send/sendConsumption',
    JSON.stringify(params),
    {
      headers,
    }
  );
};

const webServices = {
  sendConsumption,
};

export default webServices;
