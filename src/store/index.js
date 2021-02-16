import { createStore, combineReducers } from 'redux'
import scratchStorage from '../../lib/scratch-storage'
const scratchVm = require('../../lib/scratch-vm')

const storage = new scratchStorage()
const vm = new scratchVm()
vm.attachStorage(storage)

function vmReducer(state = vm, action) {
  return state
}

const reducers = combineReducers({
  vm: vmReducer
})

const store = createStore(reducers)

export default store
