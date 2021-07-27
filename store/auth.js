import axios from "axios";

const state = {
  user:"",
  accessToken:"",
};

const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_ACCESS_TOKEN(state, payload) {
    state.accessToken = payload;
  }
};

const actions = {
  login(state, payload) {
    return new Promise((resolve, reject) => {
      axios.post('http://127.0.0.1:8000/api/v1/login', payload.data).then(function (response) {
          resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};

