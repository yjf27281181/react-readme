import axios from 'axios'

let config = {
    baseURL: 'http://localhost:3333/api',
    transformRequest: [
        function(data) {
            let ret = '';
            for(let it in data) {
                ret+=encodeURIComponent(it)+'='+encodeURIComponent(data[it]) + '&';
            }
            return ret;
        }
    ],

    transformResponse: [
        function(data) {
            return data;
        }
    ],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    timeout: 10000,
    responseType: 'json'
}

axios.interceptors.response.use(function(res){
    //corresponding interceptor
    return res.data;
});

export function get(url) {
    return axios.get(url, config);
}

export function post(url, data) {
    console.log(config)
    return axios.post(url, data, config)
}