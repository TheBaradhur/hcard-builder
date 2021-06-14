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
    avatar: "",
  },
};

const actions = {
  getHcardInfo() {
    // Backend call to get existing data
    return state.hcardInfo;
  },
  setHcardInfo({ commit }, hcard) {
    // Backend call to update data
    commit("UPDATE_HCARD_INFO", hcard);
  },
};

const getters = {
  hcardInfo: (state) => state.hcardInfo,
};

const mutations = {
  UPDATE_HCARD_INFO(state, hcardUpdate) {
    state.hcardInfo.givenName = hcardUpdate.givenName;
    state.hcardInfo.surname = hcardUpdate.surname;
    state.hcardInfo.email = hcardUpdate.email;
    state.hcardInfo.phone = hcardUpdate.phone;
    state.hcardInfo.streetNumber = hcardUpdate.streetNumber;
    state.hcardInfo.streetName = hcardUpdate.streetName;
    state.hcardInfo.suburb = hcardUpdate.suburb;
    state.hcardInfo.state = hcardUpdate.state;
    state.hcardInfo.postcode = hcardUpdate.postcode;
    state.hcardInfo.country = hcardUpdate.country;
    state.hcardInfo.avatar = hcardUpdate.avatar;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
