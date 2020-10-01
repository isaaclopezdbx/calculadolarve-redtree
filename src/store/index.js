import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dollarAvailable: null,
    bolivarsAvailable: null,
    productList: [],
    showControl: true,
    ShowColorControl: true,
  },
  mutations: {
    introBolivarStore(state, bolivarsAvailable) {
      state.bolivarsAvailable = bolivarsAvailable;
    },
    introDollarStore(state, dollarAvailable) {
      state.dollarAvailable = dollarAvailable;
    },
    ChangeShow(state) {
      state.showControl = !state.showControl;
    },
    introList(state, costProducts) {
      state.productList.push(costProducts);
      state.dollarAvailable -= costProducts.DL;
      state.bolivarsAvailable -= costProducts.BS;
    },
    deleteList(state) {
      state.productList = [];
      state.dollarAvailable = null;
      state.bolivarsAvailable = null;
    },
    deleteProductOnList(state, index) {
      state.bolivarsAvailable += state.productList[index].BS;
      state.dollarAvailable += state.productList[index].DL;
      state.productList.splice(index, 1);
    },
    ShowAction(state) {
      if (state.bolivarsAvailable === 0) {
        state.ShowColorControl = false;
      } else {
        state.ShowColorControl = true;
      }
    },
  },
  actions: {},
  modules: {},
});
