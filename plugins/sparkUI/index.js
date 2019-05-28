import sButton from "./sButton";
import sInput from "./sInput";

const components = [sButton, sInput];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

export default {
  install
};
