import axios from "axios";
import Vue from "vue";

const ip = "http://localhost:1510";

axios.interceptors.request.use(config => {
  if (localStorage.getItem("token")) {
    config.headers.Token = localStorage.getItem("token");
    config.headers.TDomain = document.location.hostname;
  }
  return config;
});

axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (response.data.code === "1") {
        return response.data;
      } else if (!response.data.code) {
        return response;
      } else {
        Vue.prototype.$Message.error({
          content: "请求错误"
        });
        return false;
      }
    }
  },
  error => {
    Vue.prototype.$Message.error({
      content: "请求错误"
    });
  }
);

export default class Config extends axios {
  static getIp() {
    return ip;
  }
  static comGet(path) {
    return new Promise((resolve, reject) => {
      const url = ip + path;
      this.get(url).then(res => {
        resolve(res);
      });
    });
  }
  static comPost(path, data) {
    return new Promise((resolve, reject) => {
      const url = ip + path;
      this.post(url, data).then(res => {
        resolve(res);
      });
    });
  }
  static comPatch(path, data) {
    return new Promise((resolve, reject) => {
      const url = ip + path;
      this.patch(url, data).then(res => {
        resolve(res);
      });
    });
  }
  static comPut(path, data) {
    return new Promise((resolve, reject) => {
      const url = ip + path;
      this.put(url, data).then(res => {
        resolve(res);
      });
    });
  }
  static comDel(path) {
    return new Promise((resolve, reject) => {
      const url = ip + path;
      this.delete(url).then(res => {
        resolve(res);
      });
    });
  }
}
