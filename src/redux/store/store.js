import { createStore } from 'redux';
import rootReducer from '../reducers';

// Para desarrollo
const Store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Para produccion
// const Store = createStore(rootReducer);

export default Store;
