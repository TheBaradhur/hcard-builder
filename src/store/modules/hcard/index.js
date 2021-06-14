const state = {
  hcardInfo: {
    givenName: "",
    surname: "",
    email: "",
    phone: "",
    houseName: "",
    street: "",
    suburb: "",
    state: "",
    postcode: "",
    country: "",
    avatarUrl: "",
  },
};

const actions = {
  getHcardInfo({ commit }) {
    // Backend call to get existing data
    commit("UPDATE_HCARD_INFO", {
      givenName: "test",
      surname: "bis",
    });
  },
  setHcardInfo({ commit }, hcardInfo) {
    // Backend call to update data
    commit("UPDATE_HCARD_INFO", hcardInfo);
  },
};

const getters = {
  hcardInfo: (state) => state.hcardInfo,
};

const mutations = {
  UPDATE_HCARD_INFO(state, payload) {
    state.hcardInfo = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
