// Create and export Redux store

import { createStore } from 'redux';
import reducers from './reducers';

export default createStore(reducers); 