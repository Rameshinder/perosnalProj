import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(
  promiseMiddleware()
)))

store.subscribe(() => {
  // console.log('store', store.getState())
})

export default store
