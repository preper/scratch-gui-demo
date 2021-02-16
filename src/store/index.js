import { createStore, combineReducers } from 'redux'

function count(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}

const reducers = combineReducers({
  count
})

const store = createStore(reducers)

export default store
