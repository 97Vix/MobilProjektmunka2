import axios from 'axios';

var headers = {
  'Content-Type': 'application/json',
};

/*
const loginGet = () => {
  headers = {
    'Content-Type': 'application/json',
    Cookie: 'JSESSIONID=3E34B805D5AE07FABC1642AAAAFE63E6',
  };
  return axios.get('http://192.168.31.93:8080/user', { headers });
};
*/
const login = (user, pass) => {
  headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    //  Accept: '*/*',
    //'Accept-Encoding': 'gzip, deflate, br',
    // Connection: 'keep-alive',
    //  'Access-Control-Allow-Origin': '*',
  };
  var params = 'email=' + user + '&' + 'password=' + pass;
  //axios.defaults.maxRedirects = 0;
  //axios.defaults.withCredentials = true;

  return axios.post(
    'http://192.168.31.93:8080/auth/login',
    params,
    {
      headers,
    },
    //{ Cookie: 'JSESSIONID=0' },
    // { maxRedirects: 0 },
    { withCredentials: true }
  );
};

const sendConsumption = (paramList, token) => {
  headers = {
    //'Content-Type': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    //Cookie: token,
    Token: token,
  };

  var params = [];
  for (var property in paramList) {
    var encodedKey = encodeURIComponent(property); //neveket iterál
    var encodedValue = encodeURIComponent(paramList[property]); //név alpján érték
    params.push(encodedKey + '=' + encodedValue);
  }
  params = params.join('&');

  return axios.post(
    'http://192.168.31.93:8080/recording/recordconsumption',
    //JSON.stringify(params),
    params,
    {
      headers,
    }
  );
};

const webServices = {
  sendConsumption,
  login,
};

export default webServices;
