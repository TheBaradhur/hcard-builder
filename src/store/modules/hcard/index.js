const state = {
  hcardInfo: {
    givenName: "",
    surname: "",
    email: "",
    phone: "",
    streetNumber: "",
    streetName: "",
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
      givenName: "",
      surname: "",
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
