import sButton from "./sButton";
import sInput from "./sInput";
import sNav from "./sNav";

const components = [sButton, sInput, sNav];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

export default {
  install
};
