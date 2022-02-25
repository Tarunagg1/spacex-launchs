import { combineReducers } from 'redux';

import rocketReducer from './rocket';


const rootReducer = combineReducers({
    rocket:rocketReducer
})


export default rootReducer;