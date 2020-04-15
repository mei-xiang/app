import axios from "axios";
import { serverUrl } from "@/utils/config";

const instance = axios.create({
  baseURL: serverUrl,
  timeout: 5000
});
//跨域解决代码
axios.defaults.baseURL = "/p";
// Axios.defaults.headers["Content-Type"] =  'application/x-www-form-urlencoded';




// 全局请求拦截

// instance.interceptors.request.use(
  // function(config) {
    // 为全局的设置设置一个请求头属性
    // config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    // return config;
  // },
  // function(error) {
  //   return Promise.reject(error);
  // }
// );

// 全局响应拦截
// instance.interceptors.response.use(
//   function(response) {
//     return response;
//   },
//   function(error) {
//     if (error.response && error.response.status == 401) {
//       window.location.href = "#/longin";
//     }
//     return Promise.reject(error);
//   }
// );

export const get = (url, params) => instance.get(url, { params });

export const post = (url, data) => instance.post(url, data);

export const put = (url, data) => instance.put(url, data);

export const del = url => instance.delete(url);
