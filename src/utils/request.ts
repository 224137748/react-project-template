import axios from 'axios';
import { stringify } from 'qs';
import { message } from 'antd';

// 是否正在重定向
let isRedirecting = false;

const instance = axios.create({
  baseURL: '',
  timeout: 10000,
  responseType: 'json',
  paramsSerializer(params) {
    return stringify(params, { arrayFormat: 'brackets', encode: true })
  },
  // 允许带上cookie
  withCredentials: true
});

// 请求拦截
instance.interceptors.request.use(config => {
  if (config.method?.toLowerCase() === 'get') {
    config.params = {
      ...config.params,
      _t: Date.now()
    };
  }
  return config;
}, err => Promise.reject(err));

instance.interceptors.response.use(res => {
  if (res.data?.errno === 0) {
    return res.data;
  } else {
    if ((res.data?.errno === 13 || res.data?.errno === 6) && !isRedirecting) {
      isRedirecting = true;
      // 跳转到登录界面
      window.location.href = `https://e.rental.admin/login?redirect=${encodeURIComponent(
        window.location.href
      )}`;
    }
    return Promise.reject(res.data?.messgae);
  }
}, error => {
  message.error({
    content: '接口返回错误',
    key: 'serve_error'
  });
  // 返回接口返回的错误信息
  return Promise.reject(JSON.stringify(error));
});

export default instance;