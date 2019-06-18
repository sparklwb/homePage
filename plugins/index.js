import Vue from "vue";
import iView from "iview";
import "iview/dist/styles/iview.css";
import api from "../utils/api";

Vue.use(iView);

Vue.prototype.$api = api;
