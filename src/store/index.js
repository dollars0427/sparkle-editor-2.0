import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editor: null,
  },
  mutations: {
    setEditor(nextState, editor){
      nextState.editor = editor;
    },
  },
  actions: {
    updateEditor: (context, editor) => context.commit('setEditor', editor),
  },
})
