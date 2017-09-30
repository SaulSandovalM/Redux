import {combineReducers} from 'redux';
import people from './objectReducer';

const rootReducer = combineReducers({
  people
});

export default rootReducer;
