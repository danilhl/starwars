import {createStore, applyMiddleware} from 'redux'
import { setLocalStorage } from '@utils/localStorage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));


store.subscribe(() => {
    setLocalStorage('store', store.getState().favoriteReducer)
})

export default  store