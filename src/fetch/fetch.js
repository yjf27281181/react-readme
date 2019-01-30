import axios from "axios";
import myconfig from "../conf";

const config = {
  baseURL: myconfig.serverURL,
  //baseURL: "http://34.229.101.241:3333/api",
  transformRequest: [
    function(data) {
      if (data) {
        console.log(data);
        let ret = "";
        Object.keys(data).forEach(function(key) {
          ret +=
            encodeURIComponent(key) + "=" + encodeURIComponent(data[key]) + "&";
        });
        return ret;
      }
      return data;
    }
  ],

  transformResponse: [
    function(data) {
      return data;
    }
  ],
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  timeout: 10000,
  responseType: "json"
};

axios.interceptors.response.use(function(res) {
  //corresponding interceptor
  return res.data;
});

axios.defaults.headers.authorization = localStorage.getItem("jwttoken");

export function get(url) {
  return axios.get(url, config);
}

export function post(url, data) {
  return axios.post(url, data, config);
}