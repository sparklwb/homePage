import sButton from "./sButton";

const components = [sButton];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

export default {
  install
};