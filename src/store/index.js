import { createStore } from 'vuex'

const modulesFiles = require.context('./modules', false, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  if(typeof value.default != "undefined")modules[moduleName] = value.default;
  return modules;
}, {});

const getters = {
  GetActiveMenu: store => store.ActiveMenu,
  isActiveElement: store => name => {
      return store.ActiveElements.includes(name) && !state.HidedElements.includes(name)
  },
}

var _enableMenu = '';

export default createStore({
  state: {
    ActiveMenu: _enableMenu,
    ActiveElements: [

    ],
    HidedElements: [],
    zoom: 1
  },
  mutations: {
    SET_ACTIVE_MENU: (state, name) => {
      state.ActiveMenu = name;
  },
  ADD_ACTIVE_ELEMENT: (state, name) => {
      if (!state.ActiveElements.includes(name)) state.ActiveElements.push(name)
  },
  SET_HIDE_ELEMENT: (state, {name, toggle}) => {
      if(toggle) {
           if (!state.HidedElements.includes(name)) state.HidedElements.push(name)
      }
      else {
          let index = state.HidedElements.indexOf(name);
          if (index != -1) state.HidedElements.splice(index, 1);
      }
  },
  REMOVE_ACTIVE_ELEMENT: (state, name) => {
      let index = state.ActiveElements.indexOf(name);
      if (index != -1) state.ActiveElements.splice(index, 1);
  }
  },
  actions: {
    setActiveMenu({ commit }, name) {
      commit('SET_ACTIVE_MENU', name);
  },
  disableMenu({ commit }) {
      commit('SET_ACTIVE_MENU', '');
  },
  addActiveElement({ commit }, name) {
      commit('ADD_ACTIVE_ELEMENT', name);
  },
  removeActiveElement({ commit }, name) {
      commit('REMOVE_ACTIVE_ELEMENT', name);
  },
  hideElement({ commit }, name) {
      commit('SET_HIDE_ELEMENT', {name, toggle: true});
  },
  showElement({ commit }, name) {
      commit('SET_HIDE_ELEMENT', {name, toggle: false});
  }
  },
  modules,
  getters
})
