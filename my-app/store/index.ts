import createStore from 'redux'
import savedItems from '../reducer/savedItems'

const store = createStore(savedItems)

export default store;