import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'

Vue.use(Vuex)
const set = Vue.set

function toLocalStorage (contactCards) {
  localStorage.setItem('__contactCards', JSON.stringify(contactCards))
}

export default new Vuex.Store({
  state () {
    return {
      contactCards: [
        ...JSON.parse(localStorage.getItem('__contactCards') || '[]')
      ]
    }
  },
  mutations: {
    createContact (state, payload) {
      payload.id = uuidv4()
      state.contactCards.push(JSON.parse(JSON.stringify(payload)))
      toLocalStorage(state.contactCards)
    },
    updateContact (state, { id, contact }) {
      set(state.contactCards, id, contact)
      toLocalStorage(state.contactCards)
    },
    deleteContact (state, payload) {
      state.contactCards.splice(payload, 1)
      toLocalStorage(state.contactCards)
    }
  },
  actions: {},
  modules: {}
})
