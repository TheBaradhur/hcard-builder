import { createStore } from "vuex";
import hcard from "./modules/hcard";

export default createStore({
  modules: {
    hcard,
  },
});
